import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";
import { AnimatedLine } from "@app/components";

export const ClientsSection = () => {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="position-relative">
          <div className="clients__logos--desktop d-none d-lg-block">
            {/* Lines */}
            <div className="clients__lines">
              <AnimatedLine className="clients__lines--line1 ">
                <StaticImage src="./explode-line1.svg" alt="" />
              </AnimatedLine>
              <AnimatedLine className="clients__lines--line2 ">
                <StaticImage src="./explode-line2.svg" alt="" />
              </AnimatedLine>
            </div>
            {/* Row 1 */}
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-tiktok.png"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="lead-lg text-center mb-0"
                  style={{ width: "390px" }}
                >
                  Whether you’re a billion-dollar company,
                </p>
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-sendcloud.png"
                  alt=""
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-klooker.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-startlife.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-fulfillment.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-diesel.png"
                  alt=""
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-simplabs.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-elugie.png"
                  alt=""
                />
              </div>
              <div>
                <p
                  className="lead-lg text-center mb-0"
                  style={{ width: "380px" }}
                >
                  ...or a bootstrapped powerhouse,
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-h.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-corelifeanalytics.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-insecto.png"
                  alt=""
                />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="clients__logos--mobile d-block d-lg-none">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-tiktok.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-sendcloud.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-klooker.png"
                  alt=""
                />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <p className="lead-lg text-center mb-0" style={{ width: "65%" }}>
                Whether you’re a billion-dollar company,
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center position-relative">
              <AnimatedLine className="clients__lines--line1 ">
                <StaticImage alt="" src="./explode-line1.svg" />
              </AnimatedLine>

              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-startlife.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-fulfillment.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-diesel.png"
                  alt=""
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-simplabs.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-elugie.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-h.png"
                  alt=""
                />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <p className="lead-lg text-center mb-0" style={{ width: "80%" }}>
                ...or a bootstrapped powerhouse,
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center position-relative">
              <AnimatedLine className="clients__lines--line2">
                <StaticImage
                  className="clients__logoitem"
                  src="./explode-line3.svg"
                  alt=""
                />
              </AnimatedLine>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-corelifeanalytics.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className="clients__logoitem"
                  src="./logo-insecto.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center pt-5 pt-lg-0 pb-4 pb-lg-0">
            <p className="clients__logos__text2 lead-lg text-center mb-0">
              ...chances are that we can <br /> help you <span>scale up</span>
            </p>
          </div>
        </div>

        {/* Explode */}
        <div className="clients__explode d-flex justify-content-center position-relative">
          <h1 className="clients__explode__text text-primary">explode</h1>
          <StaticImage
            alt=""
            className="clients__explode__bg position-absolute"
            src="./explode-stroke.svg"
          />
        </div>

        {/* Circles */}
        <div className="row justify-content-center">
          <div className="clients__circles position-relative">
            <div className="clients__circles--circle1">
              <h3 className="clients__circles--circle1__text">Stories</h3>
            </div>
            <div className="clients__circles--circle2">
              <h3
                className="clients__circles--circle2__text"
                data-animationend-text="Systems & Stories"
              >
                Systems
              </h3>
              <div className="clients__circles__curved-text">
                <div className="clients__circles__curved-text--wrapper">
                  <StaticImage
                    alt=""
                    className="clients__circles__curved-text--mobile d-lg-none d-block"
                    src="./explode-curved-text-mobile.png"
                  />

                  <StaticImage
                    alt=""
                    className="clients__circles__curved-text--desktop d-none d-lg-block"
                    src="./explode-curved-text.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="clients__footer d-flex justify-content-center position-relative text-center mt-4 mt-lg-5">
          <div className="col-lg-7 px-4">
            <p className="lead-lg">
              We build <span className="text-highlight">systems</span>, to tell
              your
              <span className="text-highlight">story</span>
            </p>
            <p className="mb-0">
              The ultimate salesperson happens to be
              <span className="text-highlight">an intoxicating story</span>. The
              key to repeatable outputs is{" "}
              <span className="text-highlight">systems</span>. Combine them both
              and you get (deadly)
              <span className="text-highlight">
                story-powered growth systems.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
