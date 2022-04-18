import cn from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import * as styles from "./index.module.scss";

const steps = [
  {
    title: "Application",
    body: "Tempor dolor duis incididunt nulla Lorem ad.",
  },
  {
    title: "20-min intro call",
    body: "Tempor dolor duis incididunt nulla Lorem ad.",
  },
  {
    title: "Assessment",
    body: "Tempor dolor duis incididunt nulla Lorem ad.",
  },
  {
    title: "Tempor dolor duis",
    body: "Tempor dolor duis incididunt nulla Lorem ad.",
  },
  {
    title: "Tempor dolor duis",
    body: "Tempor dolor duis incididunt nulla Lorem ad.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  variableWidth: true,
  initialSlide: 1,
  centerMode: true,
  dotsClass: cn("slick-dots", styles.dots),
};

export const HiringProcessSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col>
            <h3>
              <span>Our hiring</span> process
            </h3>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Slider {...sliderSettings}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.carouselItem}>
              <h5 className={styles.slideTitle}>
                Step {i + 1}: {s.title}
              </h5>
              <p className={styles.slideBody}>{s.body}</p>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};
