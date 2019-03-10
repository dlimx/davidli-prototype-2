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
      const { author, social } = data.site.siteMetadata;
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 40,
            paddingTop: 20,
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              borderRadius: '50%',
              marginRight: 20,
            }}
          />
          <p>
            Written by <strong>{author}</strong> who lives and works in Toronto
            building useful things.
            {` `}
            <a href={`https://www.instagram.com/${social.instagram}`}>
              You should follow him on Instagram.
            </a>
          </p>
        </div>
      );
    }}
  />
);

export default BlogIntro;
