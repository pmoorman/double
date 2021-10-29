import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import cn from "classnames";

import { AnimatedLine } from "@app/components";

import * as styles from "./index.module.scss";

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
              <p className="lead-lg text-center mb-0" style={{ width: "65%" }}>
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
              <p className="lead-lg text-center mb-0" style={{ width: "80%" }}>
                ...or a bootstrapped powerhouse,
              </p>
            </div>

            <div className={cn(styles.logoRow, "position-relative")}>
              <AnimatedLine className={styles.clients__lines_line2}>
                <StaticImage
                  className={styles.clients__logoitem}
                  src="./explode-line3.svg"
                  alt=""
                />
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

          <div className={cn(styles.logoRow, "pt-5 pt-lg-0 pb-4 pb-lg-0")}>
            <p
              className={cn(
                styles.clients__logos__text2,
                "lead-lg text-center mb-0"
              )}
            >
              ...chances are that we can <br /> help you <span>scale up</span>
            </p>
          </div>
        </div>

        <Explode />
        <Circles />
      </div>
    </section>
  );
};

const Explode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      (async () => {
        // const textClass = "clients__logos__text2";
        // const explodeClass = "clients__explode";
        // const sleep = (ms) => {
        //   return new Promise((resolve) => setTimeout(resolve, ms));
        // };
        // document.querySelector(`.${textClass}`).classList.add("active");
        // await sleep(100);
        // document.querySelector(`.${explodeClass}`).classList.add("active");
      })();
    }
  }, [inView]);

  return (
    <>
      {/* Explode */}
      <div
        ref={ref}
        className="clients__explode d-flex justify-content-center position-relative"
      >
        <h1 className="clients__explode__text text-primary">explode</h1>
        <StaticImage
          alt=""
          className="clients__explode__bg position-absolute"
          src="./explode-stroke.svg"
        />
      </div>
    </>
  );
};

const Circles = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      (async () => {
        // const footer = document.querySelector(".clients__footer");
        // const circle1 = document.querySelector(".clients__circles--circle1");
        // const circle2 = document.querySelector(".clients__circles--circle2");
        // const circle1TextEl = document.querySelector(
        //   ".clients__circles--circle1__text"
        // );
        // const circle2TextEl = document.querySelector(
        //   ".clients__circles--circle2__text"
        // );
        // const curvedText = document.querySelector(
        //   ".clients__circles__curved-text--wrapper"
        // );
        // const sleep = (ms) => {
        //   return new Promise((resolve) => setTimeout(resolve, ms));
        // };
        // const animateCircle = (circle, startPoint, duration) => {
        //   circle.animate(
        //     [
        //       { transform: `translateX(${startPoint})`, opacity: 0 },
        //       { transform: "translateX(0%)", opacity: 1 },
        //     ],
        //     { duration, fill: "both" }
        //   );
        // };
        // const animateCircleText = (textEl, duration) => {
        //   textEl.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], {
        //     duration,
        //     fill: "both",
        //   });
        // };
        // const animateCurvedText = async (delayDuration) => {
        //   await sleep(delayDuration);
        //   curvedText.animate(
        //     [
        //       { opacity: 0, transform: "rotate(45deg)" },
        //       { opacity: 1, transform: "rotate(0)" },
        //     ],
        //     { duration: 1000, fill: "both" }
        //   );
        // };
        // const fadeIn = async (el, duration) => {
        //   el.animate([{ opacity: 0 }, { opacity: 1 }], {
        //     duration,
        //     fill: "both",
        //   });
        // };
        // const changeCircle2Text = () => {
        //   circle2TextEl.innerHTML = circle2TextEl.getAttribute(
        //     "data-animationend-text"
        //   );
        // };
        // animateCircle(circle1, "60%", 1500);
        // animateCircle(circle2, "-60%", 1500);
        // fadeIn(footer, 2250);
        // // Should be half of animateCircle anmimation
        // await sleep(750);
        // animateCircleText(circle1TextEl, 750);
        // animateCircleText(circle2TextEl, 750);
        // animateCurvedText(200);
        // // Should be half of animateCircleText anmimation
        // await sleep(375);
        // changeCircle2Text();
      })();
    }
  }, [inView]);
  return (
    <>
      {/* Circles */}
      <div className="row justify-content-center">
        <div ref={ref} className="clients__circles position-relative">
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
    </>
  );
};
