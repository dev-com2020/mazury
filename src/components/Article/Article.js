import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  StyledImage,
  StyledWrapper
} from './ArticleStyle';


const Article = ({ image, hour, title, text }) => {
  const data = useStaticQuery(graphql`
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
  }`
  );
  return (
    <Container>
      <div>
        <StyledImage fluid={image} alt="jezioro" />
      </div>
      <StyledWrapper>
        <div>
          <h3>
            {hour}
          </h3>
          <h2>{title}</h2>
          <p>{text.slice(0, 270)}...<Link to="/">Czytaj więcej</Link></p>
        </div>
      </StyledWrapper>
    </Container>

  )
}
export default Article