import "../components/articles/articlePost.css";
import Container from "@material-ui/core/Container";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/core/NavigationBar";
import React from "react";
require("prismjs/themes/prism-tomorrow.css");

export default function ArticlePost({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://jetpackcompose.app" + frontmatter.slug}
        />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta
          property="twitter:description"
          content={frontmatter.description}
        />
        <meta property="twitter:image" content={frontmatter.heroImageUrl} />
      </Helmet>
      <main>
        <NavigationBar />
        <Container maxWidth="md">
          <div className="blog-post">
            <div className="title">{frontmatter.title}</div>
            <h2>{frontmatter.date}</h2>
            <img src={frontmatter.heroImageUrl} className="heroImage"></img>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Container>
      </main>
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
        heroImageUrl
      }
    }
  }
`;
