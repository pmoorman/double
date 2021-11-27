import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import cn from "classnames";

import { AnimatedLine } from "@app/components";

import * as styles from "./index.module.scss";
import { Circles } from "../circles";

export const ClientsSection = () => {
  return (
    <section id="clients">
      <div className="container">
        <div className="position-relative">
          <div
            className={cn(styles.clients__logos_desktop, "d-none d-lg-block")}
          >
            {/* Lines */}
            <div>
              <AnimatedLine className={styles.clients__lines_line1}>
                <StaticImage src="./explode-line1.svg" alt="" />
              </AnimatedLine>
              <AnimatedLine className={styles.clients__lines_line2}>
                <StaticImage src="./explode-line2.svg" alt="" />
              </AnimatedLine>
            </div>
            {/* Row 1 */}
            <div className={styles.logoRow}>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
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
                  className={styles.clients__logoitem}
                  src="./logo-sendcloud.png"
                  alt=""
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.logoRow}>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-klooker.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-startlife.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-fulfillment.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-diesel.png"
                  alt=""
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles.logoRow}>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-simplabs.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
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
            <div className={styles.logoRow}>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-h.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-corelifeanalytics.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-insecto.png"
                  alt=""
                />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div
            className={cn(styles.clients__logos_mobile, "d-block d-lg-none")}
          >
            <div className={styles.logoRow}>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-tiktok.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-sendcloud.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-klooker.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.logoRow}>
              <p
                className="lead-lg text-center mb-0 mx-auto"
                style={{ width: "65%" }}
              >
                Whether you’re a billion-dollar company,
              </p>
            </div>

            <div className={cn(styles.logoRow, "position-relative")}>
              <AnimatedLine className={styles.clients__lines_line1}>
                <StaticImage alt="" src="./explode-line1.svg" />
              </AnimatedLine>

              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-startlife.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-fulfillment.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-diesel.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.logoRow}>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-simplabs.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-elugie.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-h.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.logoRow}>
              <p
                className="lead-lg text-center mb-0 mx-auto"
                style={{ width: "80%" }}
              >
                ...or a bootstrapped powerhouse,
              </p>
            </div>

            <div className={cn(styles.logoRow, "position-relative")}>
              <AnimatedLine className={styles.clients__lines_line2}>
                <StaticImage src="./explode-line3.svg" alt="" />
              </AnimatedLine>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-corelifeanalytics.png"
                  alt=""
                />
              </div>
              <div>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./logo-insecto.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Explode />
    </section>
  );
};

const Explode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="container">
        <div className={cn(styles.logoRow, "pt-5 pt-lg-0 pb-4 pb-lg-0")}>
          <p
            className={cn(
              styles.clients__logos__text2,
              "lead-lg justify-content-center text-center mb-0 m-auto",
              { [styles.active]: inView }
            )}
          >
            ...chances are that we can <br /> help you <span>scale up</span>
          </p>
        </div>
      </div>

      {/* Explode */}
      <div
        className={cn(
          styles.clients__explode,
          "d-flex justify-content-center position-relative",
          { [styles.active]: inView }
        )}
      >
        <h1
          ref={ref}
          className={cn(styles.clients__explode__text, "text-primary")}
        >
          explode
        </h1>
        <StaticImage
          alt=""
          objectFit="none"
          className={cn(styles.clients__explode__bg, "position-absolute")}
          src="./explode-stroke.svg"
        />
      </div>

      {/* Circles */}
      <Circles />

      {/* Footer */}
      <div className="container">
        <div
          ref={footerRef}
          className={cn(
            styles.clients__footer,
            { [styles.footerActive]: footerInView },
            "row justify-content-center position-relative text-center mt-4 mt-lg-5"
          )}
        >
          <div className="col-lg-7 px-4">
            <p className="lead-lg">
              We build <span className="text-highlight">systems</span>, to tell
              your <span className="text-highlight">story</span>
            </p>
            <p className="mb-0">
              The ultimate salesperson happens to be{" "}
              <span className="text-highlight">an intoxicating story</span>. The
              key to repeatable outputs is{" "}
              <span className="text-highlight">systems</span>. Combine them both
              and you get (deadly){" "}
              <span className="text-highlight">
                story-powered growth systems.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
