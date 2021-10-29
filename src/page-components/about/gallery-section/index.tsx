import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { AnimatedLine, ArrowButton } from "@app/components";

import * as styles from "./index.module.scss";

export const GallerySection = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-4">
            <h3 className={styles.gallery__title}>
              <span className="text-highlight">Now pause the reading,</span>
              <br /> start the photoshoot
            </h3>
          </div>
        </div>

        {/* Images */}
        <div className={styles.gallery__images}>
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images1}
            src="./gallery-img-1.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images2}
            src="./gallery-img-2.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images3}
            src="./gallery-img-3.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images4}
            src="./gallery-img-4.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images5}
            src="./gallery-img-5.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images6}
            src="./gallery-img-6.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images7}
            src="./gallery-img-7.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images8}
            src="./gallery-img-8.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images9}
            src="./gallery-img-9.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images10}
            src="./gallery-img-10.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images11}
            src="./gallery-img-11.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images12}
            src="./gallery-img-12.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images13}
            src="./gallery-img-13.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images14}
            src="./gallery-img-14.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images15}
            src="./gallery-img-15.jpg"
          />
          <StaticImage
            alt=""
            data-aos="fade-in"
            className={styles.gallery__images16}
            src="./gallery-img-16.jpg"
          />
        </div>

        <div className={cn(styles.gallery__bottom, "row")}>
          <div className="col-lg-4">
            <h3 style={{ lineHeight: "62px" }}>Want to hire us?</h3>
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
