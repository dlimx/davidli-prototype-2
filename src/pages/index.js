import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import theme from '../theme/theme.scss';
import styles from './AboutStyles.module.scss';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

import profile from '../../content/assets/IMG_2223-ConvertImage.jpg';
import LinkTransitioner from '../components/LinkTransitioner';

class AboutIndex extends Component {
  static propTypes = {
    location: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
  };

  render() {
    return (
      <Layout
        right={() => (
          <img
            alt="Profile"
            src={profile}
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          />
        )}
      >
        <SEO title="Home" keywords={[`david`, `about`, `work`, `history`]} />
        <h1 className={styles.title}>
          Hi - I&#39;m <span style={{ color: theme.colorPrimary }}>David</span>
        </h1>
        <subtitle>Let&#39;s make the world a better place.</subtitle>

        <hr />

        <h3>Life Projects</h3>
        <LinkTransitioner to="/about/ulysses">
          <h5>Ulysses</h5>
        </LinkTransitioner>
        <blockquote>
          What&#39;s something you&#39;ve done, or that you want to do, that you
          think I should do? It can be anything you want, as easy or as hard as
          you want it to be. And as long as you give me the rest of my life to
          do it, I promise that I will.
        </blockquote>
        <p>
          I have received 24 challenges, and here is my journey to finish them
          thus far.
        </p>
        <LinkTransitioner to="/about/ulysses">My Challenges →</LinkTransitioner>
        <div style={{ height: 40 }} />
        <LinkTransitioner to="/about/dinner-club">
          <h5>Dinner Club</h5>
        </LinkTransitioner>
        <blockquote>
          Every week, my fellow cooks and I each invite one person. The only
          rule? It has to be someone the other two don&#39;t know. Themed,
          home-cooked meals, and warm, delightful friendship. No strings
          attached, and anyone is welcome to join.
        </blockquote>
        <p>
          If you want to join the invite list, please just reach out. Check out
          some of our past meals here.
        </p>
        <LinkTransitioner to="/about/dinner-club/">
          Our dinners →
        </LinkTransitioner>
      </Layout>
    );
  }
}

export default AboutIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
