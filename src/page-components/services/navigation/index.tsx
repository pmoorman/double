import React from "react";

import "./index.scss";

export const Navigation = () => {
  return (
    <div className="services-nav d-none d-lg-block">
      <a
        href="#performance"
        className="services-nav__item {{bg}} {% if index == 0 %}active{% endif %}"
      >
        <img src="/assets/images/services/icon-performance.svg" /> Performance
      </a>
      <a
        href="#funnels"
        className="services-nav__item {{bg}} {% if index == 1 %}active{% endif %}"
      >
        <img src="/assets/images/services/icon-funnels.svg" /> Funnels &
        creative
      </a>
      <a
        href="#marketing"
        className="services-nav__item {{bg}} {% if index == 2 %}active{% endif %}"
      >
        <img src="/assets/images/services/icon-marketing.svg" /> Product
        marketing
      </a>
      <a
        href="#infrastructure"
        className="services-nav__item {{bg}} {% if index == 3 %}active{% endif %}"
      >
        <img src="/assets/images/services/icon-infrastructure.svg" />{" "}
        Infrastructure
      </a>
    </div>
  );
};
