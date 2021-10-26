import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";

export const AboutSection = () => {
  return (
    <section id="about" className="about py-0 position-relative">
      {/* Background */}
      <div className="about__bg"></div>

      <div className="container position-relative">
        {/* Background blocks */}
        <div className="about__bgblocks">
          <div className="about__bgblocks--item1"></div>
          <div className="about__bgblocks--item2"></div>
          <div className="about__bgblocks--item3"></div>
          <div className="about__bgblocks--item4"></div>
          <div className="about__bgblocks--item5"></div>
          <div className="about__bgblocks--item6"></div>
          <div className="about__bgblocks--item7"></div>
          <div className="about__bgblocks--item8"></div>
        </div>

        {/* title box */}
        <div className="about__titlebox">
          <p className="lead-lg">Who Is</p>
          <div className="d-flex align-items-center">
            <StaticImage alt="" className="img-fluid" src="./logo-double.png" />
            <p className="lead-lg ml-2 mb-0 d-none d-lg-block">?</p>
          </div>
          <div className="d-flex flex-column flex-lg-row mt-5">
            <a href="/about" className="arrow-btn variant-1">
              About Us
            </a>
          </div>
        </div>

        <div className="about__items">
          {/* Image 1 */}
          <div className="about__items--item1 row justify-content-end">
            <div className="d-flex flex-column align-items-end">
              <StaticImage
                alt=""
                className="about__items--item1__img mb-2 mb-lg-4 img-fluid"
                src="./about-1.png"
              />
              <p className="about__items--item1__text lead-lg px-3 px-lg-0">
                We’re marketing super nerds
              </p>
            </div>
            <div className="about--line1 active-in-view">
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
            </div>
          </div>

          {/* Image 2 */}
          <div className="about__items--item2 row">
            <div className="d-flex flex-column">
              <StaticImage
                alt=""
                className="about__items--item2__img mb-2 mb-lg-4 img-fluid"
                src="./about-2.png"
              />
              <p className="about__items--item2__text lead px-3 px-lg-0">
                In other words, we’re writers with a knack for maths...
              </p>
            </div>
            <div className="about--line2 active-in-view">
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
            </div>
          </div>

          {/* Image 3 */}
          <div className="about__items--item3 row justify-content-lg-end">
            <div className="d-flex flex-column align-items-lg-end">
              <StaticImage
                alt=""
                className="about__items--item3__img mb-4 img-fluid"
                src="./about-3.png"
              />
              <p className="about__items--item3__text lead">
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
