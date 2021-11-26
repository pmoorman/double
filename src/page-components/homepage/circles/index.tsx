import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { sleep } from "@app/utils";

export const Circles = () => {
  const circle1Ref = useRef<HTMLDivElement>();
  const circle2Ref = useRef<HTMLDivElement>();
  const circle1TextElRef = useRef<HTMLHeadingElement>();
  const circle2TextElRef = useRef<HTMLHeadingElement>();
  const curvedTextRef = useRef<HTMLDivElement>();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      (async () => {
        const circle1 = circle1Ref.current;
        const circle2 = circle2Ref.current;
        const circle1TextEl = circle1TextElRef.current;
        const circle2TextEl = circle2TextElRef.current;
        const curvedText = curvedTextRef.current;

        const animateCircle = (circle, startPoint, duration) => {
          circle.animate(
            [
              { transform: `translateX(${startPoint})`, opacity: 0 },
              { transform: "translateX(0%)", opacity: 1 },
            ],
            { duration, fill: "both" }
          );
        };
        const animateCircleText = (textEl, duration) => {
          textEl.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], {
            duration,
            fill: "both",
          });
        };
        const animateCurvedText = async (delayDuration) => {
          await sleep(delayDuration);
          curvedText.animate(
            [
              { opacity: 0, transform: "rotate(45deg)" },
              { opacity: 1, transform: "rotate(0)" },
            ],
            { duration: 1000, fill: "both" }
          );
        };
        const changeCircle2Text = () => {
          circle2TextEl.innerHTML = circle2TextEl.getAttribute(
            "data-animationend-text"
          );
        };
        animateCircle(circle1, "60%", 1500);
        animateCircle(circle2, "-60%", 1500);
        // Should be half of animateCircle anmimation
        await sleep(750);
        animateCircleText(circle1TextEl, 750);
        animateCircleText(circle2TextEl, 750);
        animateCurvedText(200);
        // Should be half of animateCircleText anmimation
        await sleep(375);
        changeCircle2Text();
      })();
    }
  }, [inView]);

  return (
    <div className="d-flex justify-content-center">
      <div ref={ref} className={cn(styles.circles, "position-relative")}>
        <div ref={circle1Ref} className={styles.circles_circle1}>
          <h3 ref={circle1TextElRef}>Stories</h3>
        </div>
        <div ref={circle2Ref} className={styles.circles_circle2}>
          <h3 ref={circle2TextElRef} data-animationend-text="Systems & Stories">
            Systems
          </h3>
          <div>
            <div
              ref={curvedTextRef}
              className={styles.circles__curved_text_wrapper}
            >
              <div>
                <div
                  className={cn(
                    styles.circles__curved_text_mobile,
                    "d-lg-none d-block"
                  )}
                >
                  <StaticImage alt="" src="./explode-curved-text-mobile.png" />
                </div>
                <div
                  className={cn(
                    styles.circles__curved_text_desktop,
                    "d-none d-lg-block"
                  )}
                >
                  <StaticImage
                    alt=""
                    objectFit="contain"
                    src="./explode-curved-text.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
