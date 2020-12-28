import React from "react"
import Layout from "../components/layout"
import MainArticle from "../components/MainArticle/MainArticle"
import Article from "../components/Article/Article"
import { graphql } from 'gatsby';

export const query = graphql`
query{
  site{
    siteMetadata{
      title
    }
  }
  file(name: {eq: "river"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid

      }
    }
  }
  allMarkdownRemark {
    edges{
      node {
        frontmatter{
          title
          date
          text
          featuredImage {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  }
`;

const IndexPage = ({ data }) => {
  const date = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <MainArticle />
      {date.map(item => {
        return (
          <Article
            hour={item.node.frontmatter.date}
            title={item.node.frontmatter.title}
            text={item.node.frontmatter.text}
            image={item.node.frontmatter.featuredImage.childImageSharp.fluid}
          />
        )
      }
      )}
    </Layout>
  )
}
export default IndexPage