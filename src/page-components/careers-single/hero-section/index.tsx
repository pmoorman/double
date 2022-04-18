import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { Link } from "@app/components";

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
        <div className={styles.backBtn}>
          <Link to="/careers">← Back to open positions</Link>
        </div>
        <Row className="text-center">
          <Col>
            <p className={cn("mb-4", styles.p)}>Apply for</p>
            <h1 className="mb-5 fw-bold text-primary">{title}</h1>
            <hr className={styles.hr} />
            <p className={cn("mb-5 fw-bold", styles.p)}>{salary}</p>
            <p className={cn("mb-0 d-flex justify-content-center", styles.p)}>
              <StaticImage
                height={33}
                src="./location-icon.svg"
                alt="location icon"
                className="me-1"
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
