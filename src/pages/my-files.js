import React from "gatsby"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
            <h1>Pliki z mojego serwera</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>extension</th>
                    </tr>
                </thead>
            
            <tbody>
                {data.allFile.edges.map(({ node }, index) =>(
                <tr key={index}>
                    <td>{node.id}</td>
                    <td>{node.name}</td>
                    <td>{node.extension}</td>
                    </tr>
                    ))}
            </tbody>
            </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
    edges {
      node {
        id
        name
        extension
      }
    }
  }
}`