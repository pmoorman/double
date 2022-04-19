import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import * as styles from "./index.module.scss";

export const ContactSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="mb-5 fw-bold">Sounds like a great match?</h2>
            <p className={cn("mb-5 pb-5 lead-lg")}>
              We’re eager to hear from you!
            </p>
            <p
              className={cn(
                "pt-5 d-flex align-items-center justify-content-center lead-lg"
              )}
            >
              Press Enter
              <StaticImage
                width={23}
                src="./enter-icon.svg"
                alt="enter icon"
                className="mx-3"
              />
              to get started
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
