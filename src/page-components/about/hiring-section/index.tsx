import React from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { ShadowBox } from "@app/components";

const hiring_positions = [
  {
    title: "All-round Marketing Consultant",
    location: "Amsterdam or Remote",
    url: "https://grape-legal-d11.notion.site/All-round-Marketing-Consultant-8430964a121044df8b73e799f12a20ca",
  },
  {
    title: "Copywriter",
    location: "Amsterdam or Remote",
    url: "https://grape-legal-d11.notion.site/Marketing-Content-Writer-6deb6171c0584d5182f719feecfbf9f5",
  },
  {
    title: "Open Application",
    location: "Amsterdam or Remote",
    url: "https://www.notion.so/I-m-Feeling-Lucky-Open-Application-af2073d5142a4c0ea10cb699a5d422d4",
  },
];

export const HiringSection = () => {
  return (
    <section id="hiring" className={styles.hiring}>
      <div className="container">
        {/* title */}
        <div className={cn(styles.hiring__intro, "row mb-5")}>
          <div className="col-lg-12 text-center text-lg-start">
            <h2 className="mb-3 mb-lg-0">And guess who’s hiring?</h2>
            <h4 className={styles.hiring__subtitle}>
              Would you feel at home in an environment where…
            </h4>
          </div>
        </div>

        {/* boxes */}
        <div className="row mb-lg-5 pt-lg-5">
          <div className="col-lg-4 mb-5 mb-lg-0 position-relative">
            <div className={styles.hiring__box}>
              <ShadowBox
                checkbox
                className={cn(styles.hiring__box_check, "me-4 me-lg-5")}
              />
              <p className="mb-0">
                The group chat is filled with{" "}
                <span className="text-highlight">
                  equal parts inspiration and laughs
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 position-relative">
            <div className={styles.hiring__box}>
              <ShadowBox
                checkbox
                className={cn(styles.hiring__box_check, "me-4 me-lg-5")}
              />
              <p className="mb-0">
                All of your colleagues{" "}
                <span className="text-highlight">ferociously learn</span> in
                their spare time{" "}
                <span className="text-muted">
                  (and work on cool side projects)
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 position-relative">
            <div className={styles.hiring__box}>
              <ShadowBox
                checkbox
                className={cn(styles.hiring__box_check, "me-4 me-lg-5")}
              />
              <p className="mb-0">
                The team works from{" "}
                <span className="text-highlight">around the globe</span>
                <span className="text-muted">
                  {" "}
                  (and everyone's welcome to visit)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* positions */}
        <div className="row justify-content-center mb-4 pt-lg-5">
          <div className="col-lg-4 mb-3 mb-lg-0 px-0 ps-lg-3 pe-lg-5 text-center text-lg-start">
            <p className="lead-lg">
              Then check out the{" "}
              <span className="text-highlight">roles we’re looking</span> for:
            </p>
          </div>
          <div className="col-lg-8">
            <div
              className={cn(
                styles.hiring__positions_box,
                "bg-secondary text-white px-4"
              )}
            >
              {hiring_positions.map((i, ii) => (
                <a
                  key={i.title + ii}
                  href={i.url}
                  className={cn(
                    styles.hiring__positions_box__item,
                    "d-flex justify-content-between align-items-center text-white py-4"
                  )}
                >
                  <div>
                    <p className="lead mb-0">{i.title}</p>
                    <p
                      className={cn(
                        styles.hiring__positions_box__item__subtitle,
                        "mb-0"
                      )}
                    >
                      {i.location}
                    </p>
                  </div>
                  <div className="d-flex">
                    <StaticImage alt="" src="./arrow-right.svg" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
