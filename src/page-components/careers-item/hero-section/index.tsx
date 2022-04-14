import React, { FC } from "react";
import { Container } from "react-bootstrap";
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
        <p>Apply for</p>
        <h1>{title}</h1>
        <h4>{salary}</h4>
        <p className="lead">{location}</p>
      </Container>
    </section>
  );
};
