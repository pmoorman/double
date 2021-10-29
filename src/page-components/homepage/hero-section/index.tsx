import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { Link } from "@app/components";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={cn(styles.hero__bg, "position-absolute w-100")}>
        <StaticImage
          className="w-100 d-none d-lg-block"
          src="./hero-bg.png"
          alt=""
        />
        <StaticImage
          className="w-100 d-block d-lg-none"
          src="./hero-bg-mobile.png"
          alt=""
        />
      </div>

      <div className="container position-relative">
        {/* intro */}
        <div
          className={cn(
            styles.hero__intro,
            "px-3 px-lg-0 text-center text-lg-start"
          )}
          data-aos="fade-in"
        >
          <h1 className="text-primary fw-bold mb-4">
            Growth, <br />
            <span className="text-secondary">baby!</span>
          </h1>
          <p className="lead">
            The name’s Double, and our game is
            <span className="text-highlight"> scaling businesses up. </span>
          </p>
        </div>

        {/* Arrows and images */}
        <div className={styles.hero__bggraphics}>
          <div className={styles.hero__bggraphics__arrows}>
            <StaticImage
              className={cn(
                styles.hero__bggraphics_arrow1,
                "img-fluid position-relative"
              )}
              src="./hero-arrow-light.png"
              alt=""
            />
            <StaticImage
              className={cn(
                styles.hero__bggraphics_arrow2,
                "img-fluid position-absolute"
              )}
              src="./hero-arrow-dark.png"
              alt=""
            />
          </div>
          <StaticImage
            className={cn(
              styles.hero__bggraphics_img1,
              "img-fluid position-absolute"
            )}
            src="./hero-1.png"
            alt=""
          />
          <StaticImage
            className={cn(
              styles.hero__bggraphics_img2,
              "img-fluid position-absolute"
            )}
            src="./hero-2.png"
            alt=""
          />
          <StaticImage
            className={cn(
              styles.hero__bggraphics_img3,
              "img-fluid position-absolute"
            )}
            src="./hero-3.png"
            alt=""
          />
          <StaticImage
            className={cn(
              styles.hero__bggraphics_img4,
              "img-fluid position-absolute"
            )}
            src="./hero-4.png"
            alt=""
          />
          <StaticImage
            className={cn(
              styles.hero__bggraphics_img5,
              "img-fluid position-absolute"
            )}
            src="./hero-5.png"
            alt=""
          />
        </div>

        {/* bottom */}
        <div
          className={cn(
            styles.hero__bottom,
            "text-center text-lg-start px-3 px-lg-0 d-flex justify-content-end"
          )}
          data-aos="fade-in"
        >
          <div className={styles.hero__bottom__inner}>
            <p className="lead">
              We’re marketing
              <span className="text-highlight">super-nerds</span> who can
              <span className="text-highlight">
                build, test, and optimize
              </span>{" "}
              a strategy for sending your sales into
              <span className="text-highlight">orbit</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom arrow */}
      <Link
        to="#clients"
        className={cn(
          styles.hero__bottom_arrow_wrapper,
          "w-100 d-flex d-lg-none justify-content-center"
        )}
      >
        <div className={styles.hero__bottom_arrow}></div>
      </Link>
    </section>
  );
};
