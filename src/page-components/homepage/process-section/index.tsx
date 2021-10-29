import React from "react";
import cn from "classnames";

import { ShadowBox } from "@app/components";

import * as styles from "./index.module.scss";

const items = [
  { title: "Our focus is building systems" },
  { title: "We do that via an iterative approach called high-tempo testing" },
  {
    title:
      "Once the system is running smoothly, we help you operate it in-house",
  },
  {
    title: "As needed, we can engage in parallel workstreams",
    body: "(i.e. simultaneously building your sales funnels + improving branding)",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className={styles.process}>
      <div className="container">
        {/* Intro */}
        <div className="row mb-5">
          <div className="col-lg-11">
            <h1 className="mb-4 mb-lg-5 fw-bold">
              Our <br />
              Process
            </h1>
            <p className="lead-lg">
              You can expect deliverables in the first two weeks, and
              <span className="fw-bold"> impossible-to-ignore</span> results in
              the first two months.
            </p>
          </div>
        </div>

        {/* List items */}
        <div className="row">
          <div className="col-lg-8 pe-lg-0">
            {items.map((item, i) => (
              <div key={item.title + i} className="d-flex mb-5">
                <div>
                  <ShadowBox checkbox className="me-4 me-lg-5" />
                </div>
                <p
                  className={cn(styles.process__items__item__text, "mb-0 lead")}
                >
                  {item.title}
                  {item.body && (
                    <span>
                      <br />
                      {item.body}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
