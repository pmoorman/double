import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { MultiCollapse } from "@app/components";
import { Navigation } from "../navigation";

import * as styles from "./index.module.scss";

const marketing = [
  {
    title: "Growth Loops",
    body: "Our passion is to architect your automated growth 'machines' that integrate all aspects of your acquisition, conversion, and retention into a never-ending loop.",
  },
  {
    title: "Onboarding",
    body: "Delight your new users or customers with a world-class onboarding experience. The most crucial step for successful long-term retention.",
  },
  {
    title: "Product-driven growth",
    body: "We help you find ways for your product or service to generate more (user) growth. Let your product do the work for you.",
  },
  {
    title: "Retention",
    body: "Turn new users into loyal customers by finding a strategy for long-term retention.",
  },
  {
    title: "Referral & virality",
    body: "We will unlock the potential of word-of-mouth and virality by giving your customers something worth talking about.",
  },
];

export const MarketingSection = () => {
  return (
    <section id="marketing" className={styles.marketing}>
      <div className="container">
        <div
          className={cn(styles.upper, "d-flex align-items-end px-3 px-lg-0")}
        >
          <div className="col">
            <Navigation index={2} />
          </div>
          <div>
            <StaticImage
              alt=""
              className={cn(styles.image, "img-fluid")}
              src="./marketing.svg"
            />
          </div>
        </div>
        <MultiCollapse items={marketing} />
      </div>
    </section>
  );
};
