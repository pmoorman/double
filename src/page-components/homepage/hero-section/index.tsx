import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";

export const HeroSection = () => {
  return (
    <section id="hero" className="hero position-relative">
      {/* Background */}
      <div className="hero__bg position-absolute w-100">
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
          className="hero__intro px-3 px-lg-0 text-center text-lg-start"
          data-aos="fade-in"
        >
          <h1 className="text-primary font-weight-bold mb-4">
            Growth, <br />
            <span className="text-secondary">baby!</span>
          </h1>
          <p className="lead">
            The name’s Double, and our game is
            <span className="text-highlight"> scaling businesses up. </span>
          </p>
        </div>

        {/* Arrows and images */}
        <div className="hero__bggraphics">
          <div className="hero__bggraphics__arrows">
            <StaticImage
              className="hero__bggraphics--arrow1 img-fluid position-relative"
              src="./hero-arrow-light.png"
              alt=""
            />
            <StaticImage
              className="hero__bggraphics--arrow2 img-fluid position-absolute"
              src="./hero-arrow-dark.png"
              alt=""
            />
          </div>
          <StaticImage
            className="hero__bggraphics--img1 img-fluid position-absolute"
            src="./hero-1.png"
            alt=""
          />
          <StaticImage
            className="hero__bggraphics--img2 img-fluid position-absolute"
            src="./hero-2.png"
            alt=""
          />
          <StaticImage
            className="hero__bggraphics--img3 img-fluid position-absolute"
            src="./hero-3.png"
            alt=""
          />
          <StaticImage
            className="hero__bggraphics--img4 img-fluid position-absolute"
            src="./hero-4.png"
            alt=""
          />
          <StaticImage
            className="hero__bggraphics--img5 img-fluid position-absolute"
            src="./hero-5.png"
            alt=""
          />
        </div>

        {/* bottom */}
        <div
          className="hero__bottom text-center text-lg-start px-3 px-lg-0 d-flex justify-content-end"
          data-aos="fade-in"
        >
          <div className="hero__bottom__inner">
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
      <a
        href="#clients"
        className="hero__bottom-arrow-wrapper w-100 d-flex d-lg-none justify-content-center"
      >
        <div className="hero__bottom-arrow"></div>
      </a>
    </section>
  );
};
