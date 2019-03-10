import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import DinnerCard from '../../components/DinnerCard';

class DinnerClub extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Dinner Club"
          keywords={[`work`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <h2>Dinner Club</h2>
          <blockquote>
            Every week, my fellow cooks and I each invite one person. The only
            rule? It has to be someone the other two don't know.
          </blockquote>
          <blockquote>
            Themed, home-cooked meals, and warm, delightful friendship. No
            strings attached, and anyone is welcome to join.
          </blockquote>
          <div>
            <a href="mailto:david.minxiao.li@gmail.com" target="new">
              <span>Email me and come for dinner!</span>
            </a>
          </div>
        </div>
        <div>
          <DinnerCard
            title="Cool for the Summer"
            image="https://imgur.com/rKImiy8.jpg"
          />
          <DinnerCard title="Formal" image="https://imgur.com/j3GKFUa.jpg" />
          <DinnerCard
            title="Taco (Sundays)"
            image="https://imgur.com/vSsydoo.jpg"
          />
          <DinnerCard
            title="New Year New Food"
            image="https://imgur.com/tJVbDZl.jpg"
          />
          <DinnerCard
            title="A Christmas Special"
            image="https://imgur.com/XeLb8w5.jpg"
          />
          <DinnerCard
            title="All-American Edition"
            image="https://imgur.com/7XAO4J0.jpg"
          />
          <DinnerCard title="Fall Eats" image="https://imgur.com/QFeTAtD.jpg" />
          <DinnerCard title="The First" image="https://imgur.com/7SEMuko.jpg" />
        </div>
      </Layout>
    );
  }
}

export default DinnerClub;

export const dinnerPhotoQuery = graphql`
  query dinnerPhotoQuery {
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
