import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import profile from '../../content/assets/IMG_2223-ConvertImage.jpg';

const NotFoundPage = () => (
  <Layout
    right={
      <img
        src={profile}
        style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
      />
    }
  >
    <SEO title="Not Found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... unfortunate.</p>
    <Link to="/">Let&#39;s go home.</Link>
  </Layout>
);

export default NotFoundPage;
