import React from "react";

import * as styles from "./index.module.scss";

const hiring_positions = [
  {
    title: "All-round Marketing Consultant",
    location: "Amsterdam or Remote",
    url: "https://www.notion.so/All-round-Marketing-Consultant-8430964a121044df8b73e799f12a20ca",
  },
  {
    title: "Senior Growth Strategist",
    location: "Amsterdam or Remote",
    url: "https://www.notion.so/Senior-Growth-Strategist-1addc3fec0a34b57a76d063adbf6ed12",
  },
  {
    title: "Open Application",
    location: "Amsterdam or Remote",
    url: "https://www.notion.so/I-m-Feeling-Lucky-Open-Application-af2073d5142a4c0ea10cb699a5d422d4",
  },
];

export const HiringSection = () => {
  return (
    <section id="hiring" className="hiring">
      <div className="container">
        {/* title */}
        <div className="hiring__intro row mb-5">
          <div className="col-lg-12 text-center text-lg-left">
            <h2 className="hiring__title mb-3 mb-lg-0">
              And guess who’s hiring?
            </h2>
            <h4 className="hiring__subtitle">
              Would you feel at home in an environment where…
            </h4>
          </div>
        </div>

        {/* boxes */}
        <div className="row mb-lg-5 pt-lg-5">
          <div className="col-lg-4 mb-5 mb-lg-0 px-0 px-lg-3">
            <div className="hiring__box">
              <div className="shadowbox variant-1-check mr-4 mr-lg-5 active-in-view"></div>
              <p className="mb-0">
                The group chat is filled with
                <span className="text-highlight">
                  equal parts inspiration and laughs
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 px-0 px-lg-3">
            <div className="hiring__box">
              <div className="shadowbox variant-1-check mr-4 mr-lg-5 active-in-view"></div>
              <p className="mb-0">
                All of your colleagues
                <span className="text-highlight">ferociously learn</span> in
                their spare time{" "}
                <span className="text-muted">
                  (and work on cool side projects)
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 px-0 px-lg-3">
            <div className="hiring__box">
              <div className="shadowbox variant-1-check mr-4 mr-lg-5 active-in-view"></div>
              <p className="mb-0">
                The team works from
                <span className="text-highlight">around the globe</span>
                <span className="text-muted">
                  (and everyone's welcome to visit)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* positions */}
        <div className="row justify-content-center mb-4 pt-lg-5">
          <div
            className="
          col-lg-4
          mb-3 mb-lg-0
          px-0
          pl-lg-3
          pr-lg-5
          text-center text-lg-left
        "
          >
            <p className="lead-lg">
              Then check out the
              <span className="text-highlight">roles we’re looking</span> for:
            </p>
          </div>
          <div className="col-lg-8 px-0 px-lg-3">
            <div className="hiring__positions-box bg-secondary text-white px-4">
              {hiring_positions.map((i) => (
                <a
                  href={i.url}
                  className="
              hiring__positions-box__item
              d-flex
              justify-content-between
              align-items-center
              text-white
              py-4
            "
                >
                  <div>
                    <p className="lead mb-0">{i.title}</p>
                    <p className="hiring__positions-box__item__subtitle mb-0">
                      {i.location}
                    </p>
                  </div>
                  <div>
                    <img src="/assets/images/arrow-right.svg" />
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
