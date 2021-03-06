import React from 'react'

import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import WorkRoll from '../../components/WorkRoll'

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/tree-coal.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              // backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Work
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <p>Please <Link to={"/contact"}>contact</Link> for purchase inquiries. Accepted forms of payment are PayPal and Venmo.</p>
              <WorkRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
