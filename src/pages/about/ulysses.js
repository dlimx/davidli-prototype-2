import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Collapsible from 'react-collapsible';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import profile from '../../../content/assets/IMG_2223-ConvertImage.jpg';

class Ulysses extends Component {
  render() {
    return (
      <Layout
        right={
          <img
            src={profile}
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          />
        }
      >
        <SEO
          title="Dinner Club"
          keywords={[`work`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <div>
            <h2>Ulysses</h2>
            <blockquote>
              What's something you've done, or that you want to do, that you
              think I should do?
            </blockquote>
            <blockquote>
              It can be anything you want, as easy or as hard as you want it to
              be. And as long as you give me the rest of my life to do it, I
              promise that I will.
            </blockquote>
          </div>
          <div>
            <h3>1-10 - Waterloo</h3>
            <Collapsible
              className="progress"
              trigger="David Li - Find yourself."
            >
              <p>Still looking.</p>
            </Collapsible>
            <Collapsible trigger="Jeff Li - Find commited love. " />
            <Collapsible trigger="Kelly Broderick-Sander - Travel to Iceland." />
            <Collapsible trigger="Vareesha Khan - Be excited & giddy with affection." />
            <Collapsible
              className="progress"
              trigger="Jonathan Yang - Learn to code and make an Android or iOS application. "
            >
              <p>
                I have been learning how to code. I started with Java, followed
                by mostly web-design related applications of HTML, CSS, and
                JavaScript. I'm getting into React Native and Cordova, so I'm
                hoping to have something for mobile.
              </p>
            </Collapsible>
            <Collapsible
              className="progress"
              trigger="Daniyal Abdali - Learn another language."
            >
              <p>Does JavaScript count?.</p>
            </Collapsible>
            <Collapsible trigger="Anon. - Travel to many places and relax when you can." />
            <Collapsible trigger="Zaeem Qureshi - Wake up and sleep at the same time each day, for at least a month." />
            <Collapsible
              trigger={
                "Eric Quinn - Go rock climbing, and attempt a path you didn't think you could do."
              }
            />
            <Collapsible
              className="progress"
              trigger="Jonathan Leung - Start a food and travel blog on all your life adventures. Make sure some of the content touches on reflections on yourself, and the things you learn."
            >
              <p>
                This site is the implementation of my food an travel blog, with
                the actual blog found under "Stories". I have been spending time
                learning HTML, CSS, JavaScript, etc., to design and build this
                website. I will follow up with the beginnings of a blog soon.
                The first post was posted (2016/09/20), though I am still in the
                process of sorting the blog out. Posts will be bi-weekly,
                hopefully, and will include random thoughts, travel, lifestyle,
                reviews, plans, etc., and will hopefully be a reflection of
                life.
              </p>
              <p>
                The blog will run on standard MVC architecture, using node.js
                and Express to power the back end. The database is MongoDB.
                Currently the front end is simply Express-powered Jade HTML/CSS
                under the BootStrap framework, though there are plans to move it
                to an AngularJS or React.js powered single-page application.
              </p>
            </Collapsible>
          </div>
          <div className="card">
            <h3>11-20 - Montreal</h3>
            <Collapsible
              className="progress"
              trigger="Angela Li - stay in touch with the people you love, even if its just a Christmas card or birthday message. & things you want to achieve in life: actually make an effort to go for it."
            >
              <p>
                I am promising to work hard. Whether I succeed, I will have to
                update later. Regardless, I have been sending many messages and
                letters to some of the people I love, so they can't complain.
              </p>
            </Collapsible>
            <Collapsible trigger="Nancy Duan - Once a year, or whenever you remember to, draw a self-portrait of any size, with any medium. It can be as simple as a sketch or as a complicated as a painting." />
            <Collapsible
              trigger={
                "Azeem Khan - Come back and visit McGill during my graduation. If that isn't feasible, return to Montreal in the next 10 or so years to check in, tour the city, and be reminded of where you came from."
              }
            />
            <Collapsible
              trigger={
                "Gabriel Ning - Talk to one random girl you didn't previously know every day until you find that special someone who cares for you as much as you care for them."
              }
            />
            <Collapsible trigger="Jeongho Jang - Go backpacking across all six continents before you die, without a company, solely by yourself. While backpacking, collect memories from the people you meet during your journey." />
            <Collapsible trigger="Glenn Li - Find something or someone you love, and dedicate your whole self to it/them." />
            <Collapsible
              trigger={
                "Sonnia Kuo - Push yourself beyond what you know you're okay with, what you know you'll like. Stay safe, of course, but that was always a fine line."
              }
            />
            <Collapsible trigger="Denice Liu - Hold on to one important thing in your life that you would have sacrificed otherwise." />
            <Collapsible trigger="Colten Wimmer - Kiss as many girls as you can." />
            <Collapsible trigger="Julie-Nathalie Vallée-Trudeau - Get a PADI license in SCUBA diving, ideally somewhere exotic." />
          </div>
          <div>
            <h3>21-24 - Montreal Pt 2</h3>
            <Collapsible trigger="Jerry Dong - Eat healthier and build a six pack." />
            <Collapsible trigger="Anna Victoria Rahardjo - Keep in contact with people that matter to you (aka me)." />
            <Collapsible trigger="Mete Aykul - Make good (amazing!!) memories wherever life takes you, and work hard to find success in whatever you do." />
            <Collapsible trigger="Anon. - Spend a year trying things that are scary, reckless & risky." />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Ulysses;

// export const dinnerPhotoQuery = graphql`
//   query dinnerPhotoQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { collection: { eq: "projects" } }
//     ) {
//       edges {
//         node {
//           collection
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM, YYYY")
//             title
//             tags
//           }
//         }
//       }
//     }
//   }
// `;
