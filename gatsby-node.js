/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const constants = require('./src/constants/index');

const getBlogPosts = graphql =>
  new Promise(resolve => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
              filter: { collection: { eq: "posts" } }
            ) {
              edges {
                node {
                  collection
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `,
      ),
    );
  });

const createBlogPosts = (actions, result) => {
  const { createPage } = actions;
  const BlogPost = path.resolve(`./src/templates/BlogPost.js`);
  const BlogList = path.resolve(`./src/templates/BlogList.js`);
  const BlogIndex = path.resolve(`./src/templates/BlogIndex.js`);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  if (!constants.blogActive || !result.data.allMarkdownRemark) {
    return;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;
  const numPages = Math.ceil(posts.length / constants.blogPostsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    if (i === 0) {
      createPage({
        path: `/stories/`,
        component: BlogIndex,
        context: {
          limit: constants.blogPostsPerPage,
          currentPage: i + 1,
          numPages,
        },
      });
    } else {
      createPage({
        path: `/stories/${i + 1}`,
        component: BlogList,
        context: {
          limit: constants.blogPostsPerPage,
          skip: i * constants.blogPostsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    }
  });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/stories${post.node.fields.slug}`,
      component: BlogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

const getProjects = graphql =>
  new Promise(resolve => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
              filter: { collection: { eq: "projects" } }
            ) {
              edges {
                node {
                  collection
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `,
      ),
    );
  });

const createProjects = (actions, result) => {
  const { createPage } = actions;
  const ProjectPage = path.resolve(`./src/templates/ProjectPage.js`);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  if (!result.data.allMarkdownRemark) {
    return;
  }

  // Create project pages.
  const projects = result.data.allMarkdownRemark.edges;

  projects.forEach(project => {
    createPage({
      path: `/work${project.node.fields.slug}`,
      component: ProjectPage,
      context: {
        slug: project.node.fields.slug,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) =>
  Promise.all([getBlogPosts(graphql), getProjects(graphql)])
    .then(data => {
      createBlogPosts(actions, data[0]);
      createProjects(actions, data[1]);
    })
    .catch(error => {
      console.error(error);
    });

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const newNode = {
      ...node,
      collection: getNode(node.parent).sourceInstanceName,
    };

    const value = createFilePath({ node: newNode, getNode });
    createNodeField({
      name: `slug`,
      node: newNode,
      value,
    });
  }
};
