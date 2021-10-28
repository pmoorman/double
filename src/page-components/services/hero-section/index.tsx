import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container position-relative">
        <img
          className="bggraphic-item--desktop bggraphic-item--desktop--1"
          src="./hero-graphic-2.png"
        />

        {/* intro */}
        <div
          className="intro row px-3 px-lg-0 text-center text-lg-left"
          data-aos="fade-in"
        >
          <div className="col-lg-5">
            <p className="intro__subtitle lead-lg mb-2">Complete Systematic</p>
            <h1 className="hero__intro__title font-weight-bold mb-lg-4">
              Growth Marketing Services
            </h1>
          </div>
        </div>

        {/* Graphics mobile 1 */}
        <div className="hero__bggraphics-mobile--1 position-relative">
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--1"
            src="./hero-graphic-2.png"
          />
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--2"
            src="./hero-img-2.jpg"
          />
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--3"
            src="./hero-img-4.jpg"
          />
        </div>

        {/* text 1 */}
        <div
          className="hero__text--1 row text-center text-lg-left px-4 px-lg-3"
          data-aos="fade-in"
        >
          <div className="col-lg-6 pr-lg-5">
            <p className="lead">
              If you’ve already dreamed up a marketing plan,
              <span className="text-highlight">we’ll bring it to life</span>.
            </p>
          </div>
          <div className="hero__bggraphic-item--desktop hero__bggraphic-item--desktop--2">
            <StaticImage alt="" src="./hero-graphic-3.png" />
            <StaticImage alt="" src="./hero-img-4.jpg" />
          </div>
          <div className="hero__line--1 animated-line active-in-view">
            <StaticImage alt="" src="./hero-line-1.png" />
          </div>
        </div>

        {/* Graphics mobile 2 */}
        <div className="hero__bggraphics-mobile--2 position-relative">
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--4"
            src="./hero-graphic-3.png"
          />
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--5"
            src="./hero-img-5.jpg"
          />
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--6"
            src="./hero-img-1.jpg"
          />
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--7"
            src="./hero-graphic-1.png"
          />
          <div className="hero__line--1-mobile animated-line active-in-view">
            <StaticImage alt="" src="./hero-line-1-mobile.svg" />
          </div>
        </div>

        {/* text 2 */}
        <div
          className="hero__text--2 row justify-content-end  text-center text-lg-left px-4 px-lg-3"
          data-aos="fade-in"
        >
          <div className="col-lg-6 px-0 px-lg-3">
            <p className="lead">
              And if you’re working with a blank canvas… we’ll design, build and
              maintain a
              <span className="text-highlight">
                complete user acquisition system
              </span>
              for you.
            </p>
          </div>
          <div className="hero__line--2 animated-line active-in-view">
            <StaticImage alt="" src="./hero-line-2.png" />
          </div>
        </div>

        {/* Graphics mobile 3 */}
        <div className="hero__bggraphics-mobile--3 position-relative">
          <div className="hero__line--2-mobile animated-line active-in-view">
            <StaticImage alt="" src="./hero-line-2-mobile.svg" />
          </div>
          <img
            className="hero__bggraphic-item--mobile hero__bggraphic-item--mobile--8"
            src="./hero-img-3.jpg"
          />
        </div>

        {/* images */}
        <div className="hero__desktop-image-section" data-aos="fade-in">
          <div className="hero__bggraphic-item--desktop hero__bggraphic-item--desktop--3">
            <StaticImage alt="" src="./hero-graphic-1.png" />
            <StaticImage alt="" src="./hero-img-1.jpg" />
          </div>
          <div className="hero__bggraphic-item--desktop hero__bggraphic-item--desktop--4">
            <StaticImage alt="" src="./hero-img-2.jpg" />
          </div>
          <div className="hero__bggraphic-item--desktop hero__bggraphic-item--desktop--5">
            <StaticImage alt="" src="./hero-img-5.jpg" />
          </div>
        </div>

        {/* text 3 */}
        <div className="hero__text--3 row" data-aos="fade-in">
          <div className="col-lg-7 pr-lg-5">
            <div className="shadowbox variant-1-check mb-4 active-in-view"></div>
            <h2>
              We help you systematically drive traffic...
              <span>(= performance)</span>
            </h2>
          </div>
          <div className="col">
            <div className="hero__bggraphic-item--desktop hero__bggraphic-item--desktop--6">
              <StaticImage alt="" src="./hero-img-4.jpg" />
            </div>
          </div>
        </div>

        {/* text 4 & 5 */}
        <div
          className="hero__text--4 row justify-content-between"
          data-aos="fade-in"
        >
          <div className="col-lg-6">
            <div className="shadowbox variant-1-check mb-4 active-in-view"></div>
            <p className="lead-lg">
              …and then we help you convert that traffic via funnels, nurturing
              & storytelling…
            </p>
          </div>
          <div className="col-lg-5 pr-lg-0">
            <div className="shadowbox variant-1-check mb-4 active-in-view"></div>
            <p className="lead-lg">…and turn them into active product users.</p>
          </div>
          <div className="hero__line--3 animated-line active-in-view">
            <StaticImage alt="" src="./hero-line-3.png" />
          </div>
        </div>

        {/* Graphics mobile 4 */}
        <div className="hero__bggraphics-mobile--3 position-relative">
          <div className="hero__line--3-mobile animated-line active-in-view">
            <StaticImage alt="" src="./hero-line-3-mobile.svg" />
          </div>
        </div>

        {/* Text 6 */}
        <div
          className="row justify-content-center text-center"
          data-aos="fade-in"
        >
          <div className="col-lg-6 px-0 px-lg-3">
            <p className="lead-lg">
              All while building the
              <span className="text-highlight">
                right systems & infrastructure
              </span>{" "}
              for you, so that{" "}
              <span className="text-highlight">everything works</span> on the
              technical end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
