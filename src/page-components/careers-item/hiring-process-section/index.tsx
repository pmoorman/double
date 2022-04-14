import React from "react";
import { Container } from "react-bootstrap";
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
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  variableWidth: true,
};

export const HiringProcessSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Slider {...sliderSettings}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.carouselItem}>
              <h5>
                Step {i + 1}: {s.title}
              </h5>
              <p>{s.body}</p>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};
