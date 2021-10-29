import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { AnimatedLine } from "@app/components";

import * as styles from "./index.module.scss";

export const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <AnimatedLine className={cn(styles.about__line, "d-lg-none")}>
          <StaticImage alt="" src="./line1-mobile.svg" />
        </AnimatedLine>
        {/* text 1 */}
        <div className={cn(styles.about__text1, "row")}>
          <div className="col-lg-10 pe-lg-5">
            <h2>
              A bunch of nerds who've mastered marketing and love to try it out
              on the world.
            </h2>
          </div>
          <AnimatedLine className={cn(styles.about__line, "d-none d-lg-block")}>
            <StaticImage alt="" src="./line1.svg" />
          </AnimatedLine>
        </div>

        {/* text 2 */}
        <div className={cn(styles.about__text2, "row")}>
          <div className="col-lg-6">
            <p>
              <span className="text-highlight">On the job</span>, we help our
              clients understand the inner workings of their marketing. Then we
              build systems that acquire, convert and maintain customers. Doing
              everything necessary to find a strategy that works.
            </p>
          </div>
        </div>

        {/* text 3 */}
        <div className={cn(styles.about__text3, "row")}>
          <div className="col-lg-6">
            <p>
              <span className="text-highlight">Off the job</span>, we love to be
              outside our comfort zones. We travel to wonderful places and chase
              our ambitions. People at Double often have side projects and
              they're perpetually curious about everything. In short, we're
              easily bored and can't sit still.
            </p>
          </div>
        </div>

        {/* text 4 */}
        <div className="row text-center">
          <div className="col-lg-12 pe-lg-0">
            <p className="lead-lg">
              <span className="text-highlight">Double,</span> then Double again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
