import React from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";

const services = [
  "All",
  "Webdesign",
  "Paid ads",
  "Onboarding",
  "Content marketing",
  "Training",
  "Activation",
  "Copywriting",
  "Analytics",
  "Photo/Video Production",
  "B2B Lead Generation",
  "Strategy",
];

const industries = ["All", "SaaS", "Mobile", "FinTech", "E-commerce", "B2B"];

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center justify-content-lg-between align-items-center">
            {/* Title */}
            <h1 className="mb-4 mb-lg-0">Clients</h1>

            {/* Service filters */}
            <div className="dropdown d-none d-lg-block">
              <button
                className={cn(
                  styles.service_filters__btn,
                  "btn btn-light dropdown-toggle"
                )}
                type="button"
                id="service_filters"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="me-2" src="chevron-down" />#
                <span v-html="selectedServiceLabel()"></span>
              </button>
              <div className="dropdown-menu" aria-labelledby="service_filters">
                {services.map((s, i) => (
                  <button key={s + i} className="dropdown-item">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry filters */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className={cn(
                styles.industry_filters,
                "btn-group d-none d-lg-flex"
              )}
              role="group"
            >
              {industries.map((industry, i) => (
                <button
                  key={industry}
                  type="button"
                  className={styles.industry_filters__item}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* Industry filters mobile */}
            <div
              className="accordion industry_filters-mobile d-block d-lg-none"
              id="industry_filters"
            >
              <button
                className="industry_filters-mobile__mainbtn collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Show <span v-html="selectedIndustry"></span>
                <img
                  className="me-2 industry_filters-mobile__mainbtn__arrow"
                  src="chevron-down-light"
                />
              </button>
              <div
                className="collapse"
                id="collapseOne"
                aria-labelledby="headingOne"
                data-parent="#industry_filters"
              >
                {industries.map((industry, i) => (
                  <button
                    type="button"
                    className="industry_filters-mobile__item"
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
