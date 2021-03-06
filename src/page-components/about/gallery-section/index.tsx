import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { AnimatedLine, ArrowButton } from "@app/components";

import * as styles from "./index.module.scss";

export const GallerySection = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container position-relative">
        <div className="row" data-aos="fade-in">
          <div className="col-lg-4">
            <h3 className={styles.gallery__title}>
              <span className="text-highlight">Now pause the reading,</span>
              <br /> start the photoshoot
            </h3>
          </div>
        </div>

        {/* Images */}
        <div className={styles.gallery__images}>
          <div className={styles.gallery__images1}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-1.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images2}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-2.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images3}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-3.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images4}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-4.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images5}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-5.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images6}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-6.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images7}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-7.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images8}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-8.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images9}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-9.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images10}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-10.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images11}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-11.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images12}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-12.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images13}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-13.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images14}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-14.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images15}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-15.jpg" />
            </div>
          </div>
          <div className={styles.gallery__images16}>
            <div data-aos="fade-in">
              <StaticImage alt="" src="./gallery-img-16.jpg" />
            </div>
          </div>
        </div>

        <div className={cn(styles.gallery__bottom, "row")}>
          <div className="col-lg-4">
            <h3 style={{ lineHeight: "62px", paddingRight: "5px" }}>
              Want to hire us?
            </h3>
            <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end">
              <ArrowButton to="mailto:pieter@double-agency.com">
                Contact us
              </ArrowButton>
            </div>
            {/* line */}
            <AnimatedLine className={styles.gallery__line}>
              <StaticImage
                alt=""
                className="d-none d-lg-block"
                src="./line2.svg"
              />
              <StaticImage
                alt=""
                className="d-lg-none"
                src="./line2-mobile.svg"
              />
            </AnimatedLine>
          </div>
        </div>
      </div>
    </section>
  );
};
