import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { AnimatedLine, ArrowButton } from "@app/components";

import * as styles from "./index.module.scss";

export const CaseStudiesSection = () => {
  return (
    <>
      {/* Case Studies: Intro */}
      <section id="case-studies">
        <div className="container text-center text-lg-start">
          <div className="row">
            <div className="col-lg-7 position-relative order-2 order-lg-1">
              <h2
                className={cn(styles.casestudies__intro__title, "mb-3 mb-lg-5")}
              >
                Curious to see what our work looks like in action?
              </h2>
              <p className="lead">Check out these case studies.</p>
              <AnimatedLine
                className={cn(
                  styles.casestudies__intro__line1,
                  "d-none d-lg-block"
                )}
              >
                <StaticImage alt="" src="./studies-line1.svg" />
              </AnimatedLine>
            </div>
            <div className="col-lg-5 text-center text-lg-end order-1 order-lg-2 mb-4 mb-lg-0">
              <StaticImage
                alt=""
                className={styles.casestudies__intro__warningimg}
                src="./contains-warning.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies: Tiktok */}
      <section
        id="case-studies-tiktok"
        className={cn(styles.casestudies_tiktok, styles.casestudies__item)}
      >
        {/* background */}
        <div className={styles.casestudies__item__bg}>
          <StaticImage
            alt=""
            className="d-none d-lg-block"
            src="./studies-tiktok-bg.png"
          />
          <StaticImage
            alt=""
            className="d-lg-none d-block img-fluid"
            src="./studies-tiktok-bg-mobile.png"
          />
        </div>

        {/* content */}
        <div className={cn(styles.casestudies__item__content, "container")}>
          <div className="row">
            <div className="col-lg-8 px-lg-4">
              <StaticImage
                alt=""
                className={cn(styles.casestudies__item__logo, "img-fluid")}
                src="./studies-tiktok-logo.png"
              />
              <p>
                Ha, don’t get us wrong here - TikTok was already booming! But at
                the same time, new advertisers were hesitating to get on board.
                Long story short…
              </p>
              <p className="lead-lg">
                We help TikTok build stronger lead nurturing via{" "}
                <span
                  className={cn(
                    styles.casestudies_tiktok__text_highlight,
                    "text-highlight"
                  )}
                >
                  eye-catching landing pages, better email marketing and spiffy
                  visual content
                </span>
                .
              </p>
              <hr className={styles.casestudies__item__divider} />
              <div className="d-flex flex-column flex-lg-row">
                <ArrowButton to="/clients" variant="6">
                  Read more
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies: Alpian */}
      <section
        id="case-studies-alpian"
        className={cn(styles.casestudies_alpian, styles.casestudies__item)}
      >
        {/* background */}
        <div className={styles.casestudies__item__bg}>
          <StaticImage
            alt=""
            className="d-none d-lg-block"
            src="./studies-alpian-bg.png"
          />
          <StaticImage
            alt=""
            className="d-lg-none d-block img-fluid"
            src="./studies-alpian-bg-mobile.png"
          />
        </div>

        {/* content */}
        <div className={cn(styles.casestudies__item__content, "container")}>
          <div className="row justify-content-end">
            <div className="col-lg-7 pe-lg-4">
              <StaticImage
                alt=""
                className={cn(styles.casestudies__item__logo, "img-fluid mb-4")}
                src="./studies-alpian-logo.png"
              />
              <p>
                We’ve been Alpian’s end hand since pre-launch, concepting and
                executing on everything that's digital and growth…
              </p>
              <p className="lead-lg">
                and with{" "}
                <span
                  className={cn(
                    styles.casestudies_alpian__text_highlight,
                    "text-highlight"
                  )}
                >
                  $32 million in funding
                </span>
                , Alpian has a serious appetite for growth.
              </p>
              <hr className={styles.casestudies__item__divider} />
              <div className="d-flex flex-column flex-lg-row">
                <ArrowButton to="/clients" variant="5">
                  Read more
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies: Core Life Analytics */}
      <section
        id="case-studies-cla"
        className={cn(styles.casestudies_cla, styles.casestudies__item)}
      >
        {/* background */}
        <div className={styles.casestudies__item__bg}>
          <StaticImage
            alt=""
            className="d-none d-lg-block"
            src="./studies-corelifeanalytics-bg.png"
          />
          <StaticImage
            alt=""
            className="d-lg-none d-block img-fluid"
            src="./studies-corelifeanalytics-bg-mobile.png"
          />
        </div>

        {/* content */}
        <div className={cn(styles.casestudies__item__content, "container")}>
          <div className="row">
            <div className="col-lg-7 px-lg-5 position-relative">
              <StaticImage
                alt=""
                className={cn(styles.casestudies__item__logo, "mb-4 img-fluid")}
                src="./studies-corelifeanalytics-logo.png"
              />
              <p>
                Core Life’s data-crunching service for microbiologists had some
                big, early wins. But before long, they were dreaming of scaled
                growth.
              </p>
              <p className="lead-lg">
                That’s when we came in, built new sales funnels, and delivered
                video content that CEO David described as “
                <span
                  className={cn(
                    styles.casestudies_cla__text_highlight,
                    "text-highlight"
                  )}
                >
                  unparalleled in our space
                </span>
                ”.
              </p>
              <hr className={styles.casestudies__item__divider} />
              <div className="d-flex flex-column flex-lg-row">
                <ArrowButton to="/clients" variant="4">
                  Read more
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
