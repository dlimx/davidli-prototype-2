import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... unfortunate.</p>
    <Link to="/">Let&#39;s go home.</Link>
  </Layout>
);

export default NotFoundPage;
