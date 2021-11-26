import React from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { ArrowButton } from "@app/components";

export const BottomSection = () => {
  return (
    <section id="bottom" className={styles.bottom}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="mb-4">That’s us</h2>
            <p className="lead">
              Long story short, you should send us an email if you’re looking
              for a technical crew who are showing others how marketing is done
              (who’ll also make you laugh enough to keep around).
            </p>

            <div
              className={cn(
                styles.bottom__box,
                "bg-primary text-white p-4 py-5 my-5"
              )}
            >
              Go on, do it. And if we work together,
              <strong>1% of your cash</strong> will power disease prevention in
              the world’s poorest communities. <strong>Hell yeah</strong>.
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-center mb-lg-5 mb-4">
              <ArrowButton to="mailto:pieter@double-agency.com">
                Contact us
              </ArrowButton>
            </div>

            <div className={cn(styles.bottom__contact_info, "mb-5")}>
              <span className="fw-bold"> Email </span>
              : pieter@double-agency.com <br />
              <span className="fw-bold"> WhatsApp </span>: +316 230 555 90
            </div>

            <p className="lead pt-4">
              <strong>Talk soon.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
