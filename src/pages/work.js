import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const WorkIndex = () => (
  <Layout>
    <SEO title="Work" keywords={[`work`, `gatsby`, `javascript`, `react`]} />
    <h1>Work</h1>
    <p>I'm currently at Quartermaster.</p>

    <h2>Projects</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default WorkIndex;
