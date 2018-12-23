import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const WorkIndex = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hello from work</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default WorkIndex;
