import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

export const WorkPostTemplate = ({
  content,
  contentComponent,
  title,
  size,
  material,
  price,
  featuredimage,
  image2,
  image3,
  tags,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  console.log(featuredimage);

  const images = [
    {
      src: featuredimage.childImageSharp.fluid.src
    },
    {
      src: image2.childImageSharp.fluid.src
    },
    {
      src: image3.childImageSharp.fluid.src
    },
  ]

  return (
    <SimpleReactLightbox>
      <section className="section -work-post">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <div>
                <SRLWrapper>
                  <div className="columns">
                    <div className="column is-4">
                      <img className="lightbox-img" src={featuredimage.childImageSharp.fluid.src} alt={title}/>
                    </div>
                    <div className="column is-4">
                      <img className="lightbox-img" src={image2.childImageSharp.fluid.src} alt={title} />
                    </div>
                    <div className="column is-4">
                      <img className="lightbox-img" src={image3.childImageSharp.fluid.src} alt={title} />
                    </div>
                  </div>
                </SRLWrapper>
              </div>
              <div className={"work-post-data"}>
                <p>Material: {material}</p>
                <p>Size: {size}</p>
                <p>Price: {price}</p>
              </div>
              <div>
                <p>
                  <Link className="button" to={"/contact"}>Contact for inquiries</Link>
                </p>
              </div>
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </SimpleReactLightbox>
  )
}

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
  material: PropTypes.string,
  price: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Work">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.title} ${post.frontmatter.size} ${post.frontmatter.material}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        size={post.frontmatter.size}
        material={post.frontmatter.material}
        price={post.frontmatter.price}
        featuredimage={post.frontmatter.featuredimage}
        image2={post.frontmatter.image2}
        image3={post.frontmatter.image3}
      />
    </Layout>
  )
}

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WorkPost

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        size
        material
        price
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`
