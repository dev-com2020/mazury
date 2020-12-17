import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <div>
      <p><Image fixed={data.file.childImageSharp.fixed} alt="łódka"/></p>
<h4>{data.allMarkdownRemark.totalCount} artykuł(ów)</h4><p>
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <Link 
      to={node.fields.slug}
      css={css`
    text-decoration: none;
    color: inherit;
  `}>
      <h3 css={css`
      margin-bottom: ${rhythm(1/4)};
      `}>
        {node.frontmatter.title}{" "}
        <span css={css`
        color: #bbb;
        `}>
          - {node.frontmatter.date}
          </span>
          </h3>
  <p>{node.excerpt}</p>
  </Link>
    </div>
  ))}
</p>

    </div>
  </Layout>
)

export const query = graphql`
query{
  site{
    siteMetadata{
      title
    }
  }
  file(name: {eq: "krajobraz"}) {
    childImageSharp {
      fixed(width: 600, quality: 100, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 80 }) {
        ...GatsbyImageSharpFixed
        
      }
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }`