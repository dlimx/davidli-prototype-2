import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO';

import profile from '../../../content/assets/IMG_2223-ConvertImage.jpg';

const Quartermaster = () => (
  <Layout
    right={
      <img
        src={profile}
        style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
      />
    }
  >
    <SEO
      title="Quartermaster"
      keywords={[`work`, `gatsby`, `javascript`, `react`]}
    />
    <h1>Quartermaster!</h1>
  </Layout>
);

export default Quartermaster;
