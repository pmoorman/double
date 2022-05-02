import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Widget } from "@typeform/embed-react";

import * as styles from "./index.module.scss";

export interface ContactSectionProps {
  typeformId: string;
}

export const ContactSection: FC<ContactSectionProps> = ({ typeformId }) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col>
            <Widget id={typeformId} className={styles.typeform} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
