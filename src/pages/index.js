import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, withPrefix, Link } from 'gatsby';

import classNames from 'classnames';
import theme from '../theme/theme.scss';
import styles from './AboutStyles.module.scss';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import profile from '../../content/assets/IMG_2223-ConvertImage.jpg';

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
        <h1>
          Hi - I&#39;m <span style={{ color: theme.colorPrimary }}>David</span>
        </h1>
        <p>
          I am a software engineer currently at{' '}
          <a href="https://quartermaster.com">Quartermaster</a>.
        </p>
        <p>
          I graduated <a href="https://mcgill.ca">McGill University</a> with a
          degree in Honours Biochemistry. I had initially planned on pursuing
          medicine - but I found that my passions lie with software.
        </p>
        <p>
          I have two broad goals in life: make the world a better place, and
          live and create interesting stories.
        </p>

        <hr />

        <h3>Links</h3>
        <a href={withPrefix('/Resume-LiMinXiao.pdf')}>Resume</a>

        <hr />

        <h3>Life Projects</h3>
        <Link to="/about/ulysses">
          <h5>Ulysses</h5>
        </Link>
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
        <Link to="/about/ulysses">My Challenges →</Link>
        <div style={{ height: 40 }} />
        <Link to="/about/dinner-club">
          <h5>Dinner Club</h5>
        </Link>
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
        <Link to="/about/dinner-club/">Our dinners →</Link>
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
