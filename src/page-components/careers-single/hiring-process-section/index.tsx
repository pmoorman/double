import cn from "classnames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import * as styles from "./index.module.scss";

const steps = [
  {
    title: "Application",
    body: "Fill in a short survey and help us understand how you see yourself fit into the role.",
  },
  {
    title: "Intro call",
    body: "20-min casuall talk. You don't have to prepare anything, let's just feel the vibes.",
  },
  {
    title: "Assessment",
    body: "Your platform to showcase your strategic skills and marketing experience.",
  },
  {
    title: "Skill check call",
    body: "60-min video conversation based on the assessment plus some merit questions",
  },
  {
    title: "Culture fit",
    body: "A call with our CEO",
  },
  {
    title: "Live co-working task",
    body: "(optional) Let's put our heads together to solve an actual case",
  },
  {
    title: "Offer!",
  },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  variableWidth: true,
  initialSlide: 0,
  centerMode: false,
  slidesToShow: 1,
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
        <Row>
          <Col>
            <Slider {...sliderSettings}>
              {steps.map((s, i) => (
                <div key={s.title}>
                  <div className={styles.carouselItem}>
                    <h5 className={styles.slideTitle}>
                      Step {i + 1}: {s.title}
                    </h5>
                    {s.body && <p className={styles.slideBody}>{s.body}</p>}
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
