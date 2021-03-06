import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/wood-panel-optimized.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 page-header"
            style={{
              // boxShadow: '0.5rem 0 0 #b82601, -0.5rem 0 0 #b82601',
              // backgroundColor: '#b82601',
              color: 'white',
              padding: '1rem',
            }}
          >
            Experiences in woodburning
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
