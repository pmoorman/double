import React from "react";
import cn from "classnames";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";
import { ArrowButton } from "@app/components";

export const AcademySection = () => {
  return (
    <section id="academy" className={styles.academy}>
      {/* Hat image */}
      <div className={styles.academy__hat}>
        <StaticImage alt="" src="./academy-hat.png" />
      </div>

      <div className={cn(styles.academy__inner, "container position-relative")}>
        {/* background images */}
        <div className={styles.academy__bg}>
          <StaticImage
            alt=""
            className={styles.academy__bg_img1}
            src="./academy-img-1.png"
          />
          <StaticImage
            alt=""
            className={styles.academy__bg_img2}
            src="./academy-img-2.png"
          />
          <StaticImage
            alt=""
            className={styles.academy__bg_img3}
            src="./academy-img-3.png"
          />
          <StaticImage
            alt=""
            className={styles.academy__bg_img4}
            src="./academy-img-4.png"
          />
        </div>

        {/* Content */}
        <div className="row justify-content-center text-lg-center">
          <div className="col-lg-7 px-lg-5">
            <h2 className="mb-4">Double Academy</h2>
            <p>
              Our course teaches Growth Loops, the marketing methodology
              responsible for our clients’ success. In a way, we're part time
              professors!
            </p>
            <p className="lead-lg">
              Over 25,000 students have used our course to reframe their
              approach to marketing.
            </p>
            <div className="d-flex flex-column flex-lg-row justify-content-center mt-lg-5">
              <hr
                className={cn(styles.academy__divider, "d-block d-lg-none")}
              />
              <ArrowButton to="/academy" variant="3">
                Read more
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
