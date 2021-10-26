import React from "react";

import "./index.scss";

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
    <section id="process" className="process">
      <div className="container">
        {/* Intro */}
        <div className="row mb-5">
          <div className="col-lg-11">
            <h1 className="mb-4 mb-lg-5 font-weight-bold">
              Our <br />
              Process
            </h1>
            <p className="lead-lg">
              You can expect deliverables in the first two weeks, and
              <span className="font-weight-bold">
                impossible-to-ignore
              </span>{" "}
              results in the first two months.
            </p>
          </div>
        </div>

        {/* List items */}
        <div className="process__items row">
          <div className="col-lg-8 pr-lg-0">
            {items.map((item, i) => (
              <div
                key={item.title + i}
                className="process__items__item d-flex mb-5"
              >
                <div>
                  <div className="shadowbox variant-1-check mr-4 mr-lg-5 active-in-view"></div>
                </div>
                <p className="process__items__item__text mb-0 lead">
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
