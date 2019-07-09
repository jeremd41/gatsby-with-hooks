import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
