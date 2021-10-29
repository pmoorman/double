import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { AnimatedLine, ArrowButton } from "@app/components";

import "./index.scss";

export const ClientsSection = () => {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 px-0 px-lg-3">
            <h2 className="clients__title mb-0 mb-lg-5">
              Learn what we did to help our clients grow.
            </h2>
          </div>
          <div className="clients__logos col-lg-6">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div>
                <StaticImage
                  alt=""
                  data-aos="fade-in"
                  className="clients__logos__item--1"
                  src="./logo-sendcloud.png"
                />
              </div>
              <div>
                <StaticImage
                  alt=""
                  data-aos="fade-in"
                  className="clients__logos__item--2"
                  src="./logo-klooker.png"
                />
              </div>
              <div>
                <StaticImage
                  alt=""
                  data-aos="fade-in"
                  className="clients__logos__item--3"
                  src="./logo-cla.png"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <StaticImage
                alt=""
                data-aos="fade-in"
                className="clients__logos__item--4"
                src="./logo-alpian.png"
              />
              <StaticImage
                alt=""
                data-aos="fade-in"
                className="clients__logos__item--5"
                src="./logo-tiktok.png"
              />
              <StaticImage
                alt=""
                data-aos="fade-in"
                className="clients__logos__item--6"
                src="./logo-h.png"
              />
              <StaticImage
                alt=""
                data-aos="fade-in"
                className="clients__logos__item--7"
                src="./logo-elugie.png"
              />
            </div>
          </div>
          <div className="col-12 d-flex flex-column flex-lg-row">
            <ArrowButton to="/clients">Case Studies</ArrowButton>
          </div>
        </div>
        <AnimatedLine className="clients__line1 d-none d-lg-block">
          <StaticImage alt="" src="./clients-line1.svg" />
        </AnimatedLine>
      </div>
    </section>
  );
};
