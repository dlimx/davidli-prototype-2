import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const bioQuery = graphql`
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

const Bio = () => (
  <StaticQuery
    query={bioQuery}
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
              borderRadius: 100,
              marginRight: 20,
              height: 200,
              width: 240,
              objectFit: 'cover',
            }}
          />
          <p>
            Written by <strong>{author}</strong> who lives and works in San
            Francisco building useful things.
            {` `}
            <a href={`https://instagram.com/${social.instagram}`}>
              You should follow him on Instagram.
            </a>
          </p>
        </div>
      );
    }}
  />
);

export default Bio;
