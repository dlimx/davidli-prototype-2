import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const WorkIndex = () => (
  <Layout>
    <SEO title="Work" keywords={[`work`, `gatsby`, `javascript`, `react`]} />
    <h1>Hey, I'm David</h1>
    <p>
      I am a software engineer currently at{' '}
      <a href="https://quartermaster.com">Quartermaster</a>.
    </p>
    <p>
      I graduated <a href="https://mcgill.ca">McGill University</a> with a
      degree in Honours Biochemistry. I had initially planned on pursuing
      medicine - but I found that my passions lie with software.
    </p>
  </Layout>
);

export default WorkIndex;
