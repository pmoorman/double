import React from "react";
import { graphql, PageProps } from "gatsby";

import * as styles from "./blog-post.module.scss";

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
  const { data } = props;
  console.log(props);
  return <>{data.file.childMarkdownRemark.frontmatter.title}</>;
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
