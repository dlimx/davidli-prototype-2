import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const introQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`;

const BlogIntro = () => (
  <StaticQuery
    query={introQuery}
    render={data => {
      const { author } = data.site.siteMetadata;
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 40,
            paddingTop: 20,
          }}
        >
          <p>
            Written by <strong>{author}</strong> - currently in Toronto.
          </p>
        </div>
      );
    }}
  />
);

export default BlogIntro;
