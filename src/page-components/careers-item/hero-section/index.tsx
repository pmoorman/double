import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import * as styles from "./index.module.scss";

export interface HeroSectionProps {
  title: string;
  salary: string;
  location: string;
}

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  salary,
  location,
}) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="text-center">
          <Col>
            <p className={cn("mb-5", styles.p)}>Apply for</p>
            <h1 className="mb-5 fw-bold text-primary">{title}</h1>
            <hr className={styles.hr} />
            <p className={cn("mb-5 fw-bold", styles.p)}>{salary}</p>
            <p className={cn("mb-5", styles.p)}>
              <StaticImage
                width={23}
                src="./location-icon.svg"
                alt="location icon"
              />
              {location}
            </p>
            <hr className={styles.hr} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
