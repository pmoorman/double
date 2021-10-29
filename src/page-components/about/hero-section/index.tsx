import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { WistiaVideo } from "@app/components";

import * as styles from "./index.module.scss";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="mb-5 pb-4 text-center">
              <h3 className={styles.hero__title}>Hey, we’re</h3>
              <StaticImage
                alt=""
                className="img-fluid"
                width={344}
                src="./logo.svg"
              />
            </div>
          </div>
        </div>
        <div className={cn(styles.hero__content, "row justify-content-center")}>
          {/* Images */}
          <div className={styles.hero__images}>
            <div className={styles.hero__images1} data-aos="fade-in">
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-1.jpg"
              />
              <p>Devoted coffee lovers</p>
            </div>
            <div className={styles.hero__images2} data-aos="fade-in">
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-2.jpg"
              />
              <p>Lunch time jokers</p>
            </div>
            <div className={styles.hero__images3} data-aos="fade-in">
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-3.jpg"
              />
              <p>Philosophical debaters</p>
            </div>
            <div className={styles.hero__images4} data-aos="fade-in">
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-4.jpg"
              />
              <p>Part-time bag designers</p>
            </div>
            <div className={styles.hero__images5} data-aos="fade-in">
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-5.jpg"
              />
              <p>Fair-weather sailors</p>
            </div>
            <div className={styles.hero__images6} data-aos="fade-in">
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-6.jpg"
              />
              <p>Copywriting Kiwis</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="position-relative">
              <div className={styles.hero__imagesmain} data-aos="fade-in">
                <WistiaVideo
                  videoId="eap2y2f006"
                  style={{ boxShadow: "20px 20px 0px var(--bs-secondary)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
