import React from "react";
import { graphql, PageProps } from "gatsby";

import * as styles from "./blog-post.module.scss";
import { Col, Container, Row } from "react-bootstrap";

export interface CareersItemDataProps {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        location: string;
        salary: string;
        title: string;
      };
      html: string;
    };
  };
}

export interface CareersItemProps extends PageProps<CareersItemDataProps> {}

export const CareersItemTemplate = (props: CareersItemProps) => {
  const { childMarkdownRemark } = props.data.file;
  const { html, frontmatter } = childMarkdownRemark;
  const { title, salary, location } = frontmatter;

  return (
    <>
      <section>
        <Container>
          <p>Apply for</p>
          <h1>{title}</h1>
          <h4>{salary}</h4>
          <p className="lead">{location}</p>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CareersItemTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    file(name: { eq: $slug }, sourceInstanceName: { eq: "careers" }) {
      childMarkdownRemark {
        frontmatter {
          location
          salary
          title
        }
        html
      }
    }
  }
`;
