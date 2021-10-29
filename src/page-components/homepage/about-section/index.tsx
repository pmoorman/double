import React from "react";
import cn from "classnames";
import { StaticImage } from "gatsby-plugin-image";

import { AnimatedLine, ArrowButton } from "@app/components";
import * as styles from "./index.module.scss";

export const AboutSection = () => {
  return (
    <section id="about" className={cn(styles.about, "py-0 position-relative")}>
      {/* Background */}
      <div className={styles.about__bg}></div>

      <div className="container position-relative">
        {/* Background blocks */}
        <div className={styles.about__bgblocks}>
          <div className={styles.about__bgblocks_item1}></div>
          <div className={styles.about__bgblocks_item2}></div>
          <div className={styles.about__bgblocks_item3}></div>
          <div className={styles.about__bgblocks_item4}></div>
          <div className={styles.about__bgblocks_item5}></div>
          <div className={styles.about__bgblocks_item6}></div>
          <div className={styles.about__bgblocks_item7}></div>
          <div className={styles.about__bgblocks_item8}></div>
        </div>

        {/* title box */}
        <div className={styles.about__titlebox}>
          <p className="lead-lg">Who Is</p>
          <div className="d-flex align-items-center">
            <StaticImage alt="" className="img-fluid" src="./logo-double.png" />
            <p className="lead-lg ml-2 mb-0 d-none d-lg-block">?</p>
          </div>
          <div className="d-flex flex-column flex-lg-row mt-5">
            <ArrowButton to="/about">About Us</ArrowButton>
          </div>
        </div>

        <div className={styles.about__items}>
          {/* Image 1 */}
          <div
            className={cn(
              styles.about__items_item1,
              "d-flex justify-content-end"
            )}
          >
            <div className="d-flex flex-column align-items-end">
              <StaticImage
                alt=""
                className={cn(
                  styles.about__items_item1__img,
                  "mb-2 mb-lg-4 img-fluid"
                )}
                src="./about-1.png"
              />
              <p
                className={cn(
                  styles.about__items_item1__text,
                  "lead-lg px-3 px-lg-0"
                )}
              >
                We’re marketing super nerds
              </p>
            </div>
            <AnimatedLine className={styles.about_line1}>
              <StaticImage
                alt=""
                className="d-none d-lg-block"
                src="./about-line1.png"
              />
              <StaticImage
                alt=""
                className="d-block d-lg-none"
                src="./about-line1-mobile.png"
              />
            </AnimatedLine>
          </div>

          {/* Image 2 */}
          <div className={cn(styles.about__items_item2, "d-flex")}>
            <div className="d-flex flex-column">
              <StaticImage
                alt=""
                className={cn(
                  styles.about__items_item2__img,
                  "mb-2 mb-lg-4 img-fluid"
                )}
                src="./about-2.png"
              />
              <p
                className={cn(
                  styles.about__items_item2__text,
                  "lead px-3 px-lg-0"
                )}
              >
                In other words, we’re writers with a knack for maths...
              </p>
            </div>
            <AnimatedLine className={styles.about_line2}>
              <StaticImage
                alt=""
                className="d-none d-lg-block"
                src="./about-line2.png"
              />
              <StaticImage
                alt=""
                className="d-block d-lg-none"
                src="./about-line2-mobile.png"
              />
            </AnimatedLine>
          </div>

          {/* Image 3 */}
          <div
            className={cn(
              styles.about__items_item3,
              "row justify-content-lg-end"
            )}
          >
            <div className="d-flex flex-column align-items-lg-end">
              <StaticImage
                alt=""
                className={cn(styles.about__items_item3__img, "mb-4 img-fluid")}
                src="./about-3.png"
              />
              <p className={(cn(styles.about__items_item3__text), "lead")}>
                ... who you can count on to open your Google Analytics and spot
                exactly which part of your marketing funnel is holding up the
                show.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
