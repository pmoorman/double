import React from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";

export const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="mb-5 pb-4 text-center">
              <h3 className="hero__title">Hey, we’re</h3>
              <img
                className="img-fluid"
                width="344"
                src="/assets/images/new-web/logo.svg"
              />
            </div>
          </div>
        </div>
        <div className="hero__content row justify-content-center">
          {/* Images */}
          <div className="hero__images">
            <div className="hero__images--1" data-aos="fade-in">
              <img
                className="img-fluid"
                src="/assets/images/about/hero-img-1.jpg"
              />
              <p>Devoted coffee lovers</p>
            </div>
            <div className="hero__images--2" data-aos="fade-in">
              <img
                className="img-fluid"
                src="/assets/images/about/hero-img-2.jpg"
              />
              <p>Lunch time jokers</p>
            </div>
            <div className="hero__images--3" data-aos="fade-in">
              <img
                className="img-fluid"
                src="/assets/images/about/hero-img-3.jpg"
              />
              <p>Philosophical debaters</p>
            </div>
            <div className="hero__images--4" data-aos="fade-in">
              <img
                className="img-fluid"
                src="/assets/images/about/hero-img-4.jpg"
              />
              <p>Part-time bag designers</p>
            </div>
            <div className="hero__images--5" data-aos="fade-in">
              <img
                className="img-fluid"
                src="/assets/images/about/hero-img-5.jpg"
              />
              <p>Fair-weather sailors</p>
            </div>
            <div className="hero__images--6" data-aos="fade-in">
              <img
                className="img-fluid"
                src="/assets/images/about/hero-img-6.jpg"
              />
              <p>Copywriting Kiwis</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="position-relative">
              <div className="hero__images--main" data-aos="fade-in">
                {/* <div
                  className="video-wrapper shadow-secondary"
                  style="box-shadow: 20px 20px 0px var(--secondary);"
                >
                  <script
                    src="https://fast.wistia.com/embed/medias/eap2y2f006.jsonp"
                    async
                  ></script>
                  <script
                    src="https://fast.wistia.com/assets/external/E-v1.js"
                    async
                  ></script>
                  <div
                    className="wistia_responsive_padding"
                    style="padding:56.25% 0 0 0;position:relative;"
                  >
                    <div
                      className="wistia_responsive_wrapper"
                      style="height:100%;left:0;position:absolute;top:0;width:100%;"
                    >
                      <div
                        className="wistia_embed wistia_async_eap2y2f006 videoFoam=true"
                        style="height:100%;position:relative;width:100%"
                      >
                        <div
                          className="wistia_swatch"
                          style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"
                        >
                          <img
                            src="https://fast.wistia.com/embed/medias/eap2y2f006/swatch"
                            style="filter:blur(5px);height:100%;object-fit:contain;width:100%;"
                            alt=""
                            aria-hidden="true"
                            onload="this.parentNode.style.opacity=1;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
