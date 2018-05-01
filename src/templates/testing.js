import React from 'react'
import Link from 'gatsby-link'

const Testing = ({data}) => {
  const { markdownRemark : post} = data

  return (
  <div>
    <h1>{post.frontmatter.title}</h1>
     <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    <Link to="/">Go back to the homepage</Link>
  </div>
)}

export const PageQuery = graphql `
  query MyQuery($path: String) {
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      id
      frontmatter {
        title
        slug
      }
      html
    }
  }
`
export default Testing
