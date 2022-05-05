import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { Link } from "@app/components";

export interface HeroSectionProps {
  title: string;
  compensation: string;
  location: string;
}

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  compensation,
  location,
}) => {
  return (
    <section className={styles.section}>
      <Container>
        {/* <div className={styles.backBtn}>
          <Link to="/careers">← Back to open positions</Link>
        </div> */}
        <Row className="text-center">
          <Col>
            <p className={cn("mb-4 lead-lg")}>Apply for</p>
            <h1 className={cn("mb-5 fw-bold text-primary", styles.title)}>
              {title}
            </h1>
            <hr className={styles.hr} />
            <p className={cn("mb-5 fw-bold lead-lg")}>{compensation}</p>
            <p className={cn("mb-0 d-flex lead-lg justify-content-center")}>
              <StaticImage
                width={33}
                src="./location-icon.svg"
                alt="location icon"
                className="me-1 img-fluid"
                layout="fixed"
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
