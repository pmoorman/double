import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

import {
  HeroSection,
  HiringProcessSection,
  ContactSection,
} from "@app/page-components/careers-single";

import * as styles from "./index.module.scss";
import classNames from "classnames";

export interface CareersSingleDataProps {
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

export const CareersSingleTemplate: FC<PageProps<CareersSingleDataProps>> = (
  props
) => {
  const { childMarkdownRemark } = props.data.file;
  const { html, frontmatter } = childMarkdownRemark;

  return (
    <>
      <div className={styles.content}>
        <HeroSection {...frontmatter} />

        <section className="pb-0">
          <Container>
            <Row>
              <Col>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Our culture */}
        <section className="pt-5 pb-0">
          <Container>
            <Row>
              <Col>
                <h3>
                  <span>Our</span> Culture
                </h3>
                <p>
                  <strong>Remote freedom:</strong> We don’t mean the way
                  everyone’s working from home right now. We’re talking about
                  the real kind of ‘remote’. Bali, Portugal, Istanbul… our team
                  will often go to any of these places for a casual workation or
                  a full-on escape from the cold.
                </p>

                <p>
                  <strong>
                    Motivated colleagues and an energetic culture:
                  </strong>{" "}
                  You’ll be surrounded by young, smart, and fun people in a
                  fast-growing agency with fast-growing clients, which means
                  there’s a lot to learn and lots of freedom to fulfill your
                  ambition.
                </p>

                <p>
                  <strong>Never stop learning:</strong> Our agency runs one of
                  the most popular online courses on growth marketing out there.
                  You’ll get to learn directly from the creators and work on
                  different verticals in a wide range of industries. With a
                  yearly education budget, you’ll get to take courses in any
                  niche you like.
                </p>

                <p>
                  <strong>Entrepreneurial mindset:</strong> All of our team
                  members are entrepreneurs of some sort. They either have their
                  own business, are freelancers, or have worked in startup
                  ecosystems.
                </p>

                <p>
                  <strong>Career-boost:</strong> By working with clients in our
                  vast network of fast-growing (tech) companies, you’ll gain
                  experience and confidence in your skills. New situations,
                  industries, and companies will become your favourite kind of
                  challenge.
                </p>

                <p>
                  <strong>Flat hierarchy:</strong> You’ll become a consultant
                  just like everyone else at Double. What are you going to make
                  of it?
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Equal Opportunity */}
        <section className="pt-5">
          <Container>
            <Row>
              <Col>
                <h3>
                  <span>Equal</span> Opportunity
                </h3>
                <p>
                  We care about equal opportunities, diversity, and value our
                  differences. Research shows that women are less likely to
                  apply to a job opening if their resume doesn’t cover 100% of
                  the requirements while men are happy to do so even if it’s
                  around 70%.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <HiringProcessSection />

      <ContactSection />
    </>
  );
};

export default CareersSingleTemplate;

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
