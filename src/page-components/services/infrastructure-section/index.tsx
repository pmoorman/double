import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { MultiCollapse } from "@app/components";
import { Navigation } from "../navigation";

import * as styles from "./index.module.scss";

const infrastructure = [
  {
    title: "Attribution",
    body: "Through precise attribution we determine the ROI for your money spent on each marketing channel.",
  },
  {
    title: "Marketing & automation ",
    body: "Free up time to focus on your business by automating marketing and sales activities.",
  },
  {
    title: "High-tempo testing ",
    body: "Our team will help you put your hypotheses to the test and build a structured (weekly) process to find which ones are true and not.",
  },
  {
    title: "Tooling & infrastructure ",
    body: "We find your ultimate tech stack and integrate everything neatly with your existing infrastructure.",
  },
  {
    title: "Data-driven growth ",
    body: "We design experiments that generate growth using company data. We use past data or help you set up data collection processes.",
  },
  {
    title: "Analytics & dashboarding",
    body: "We make your most important business and marketing insights available to you with customised dashboards.",
  },
];

export const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className={styles.infrastructure}>
      <div className="container">
        <div
          className={cn(styles.upper, "d-flex align-items-end px-3 px-lg-0")}
        >
          <div className="col">
            <Navigation index={3} background="dark" />
          </div>
          <div>
            <StaticImage
              alt=""
              className={cn(styles.image, "img-fluid")}
              src="./infrastructure.svg"
            />
          </div>
        </div>
        <MultiCollapse items={infrastructure} background="dark" />
      </div>
    </section>
  );
};
