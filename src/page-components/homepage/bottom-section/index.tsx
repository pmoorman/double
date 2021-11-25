import React from "react";
import cn from "classnames";
import { StaticImage } from "gatsby-plugin-image";

import { ArrowButton, Parallax } from "@app/components";
import * as styles from "./index.module.scss";

export const BottomSection = () => {
  return (
    <section id="bottom" className={styles.bottom}>
      <div className="container position-relative">
        {/* Background block */}
        <Parallax className={styles.bottom__bg_item1}>
          <div className={styles.bottom__bg_item1_inner} />
        </Parallax>

        {/* Content */}
        <div className="row position-relative position-relative">
          <div className="col-lg-6">
            <h2 className="mb-5">Still here?</h2>
            <p className="lead-lg">Then let's get something straight.</p>
          </div>
          <div className={cn(styles.bottom__content__col2, "col-lg-6")}>
            <div>
              <Parallax className={styles.bottom__content__col2_item1}>
                <div className={styles.bottom__content__col2_item1_inner}></div>
              </Parallax>
              <Parallax className={styles.bottom__content__col2_item2}>
                <StaticImage alt="" src="./footer-img-1.png" />
              </Parallax>
              <Parallax className={styles.bottom__content__col2_item3}>
                <StaticImage alt="" src="./footer-img-2.png" />
              </Parallax>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 pe-lg-0">
            <p
              className={cn(styles.bottom__content__par1, "lead mb-3 mb-lg-5")}
            >
              <br />
              <i>You're in a funnel right now.</i>
              <br />
              <br />
              So if you’re even slightly tempted to see what we can do together,
              leave your details below. <br />
              <br />
              The moment we see it, we’ll come back to you (and remember, we
              live on our laptops).
            </p>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center mt-4 mt-lg-5">
              <ArrowButton to="mailto:pieter@double-agency.com">
                Contact us
              </ArrowButton>
              <div className="ms-0 ms-lg-4 mt-4 mt-lg-0">
                <span className="fw-bold">Email</span>: pieter@double-agency.com{" "}
                <br />
                <span className="fw-bold">WhatsApp</span>: +316 230 555 90
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
