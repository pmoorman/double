import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { WistiaVideo, Parallax } from "@app/components";

import * as styles from "./index.module.scss";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="mb-5 pb-4 text-center">
              <h3 className={styles.hero__title}>Hey, we’re</h3>
              <StaticImage alt="" src="./logo.svg" />
            </div>
          </div>
        </div>
        <div className={cn(styles.hero__content, "row justify-content-center")}>
          {/* Images */}
          <div className={styles.hero__images}>
            <Parallax className={styles.hero__images__1}>
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-1.jpg"
              />
              <p>Devoted coffee lovers</p>
            </Parallax>
            <Parallax className={styles.hero__images__2}>
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-2.jpg"
              />
              <p>Lunch time jokers</p>
            </Parallax>
            <Parallax className={styles.hero__images__3}>
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-3.jpg"
              />
              <p>Philosophical debaters</p>
            </Parallax>
            <Parallax className={styles.hero__images__4}>
              <StaticImage
                alt=""
                className={cn(styles.hero__images__4_img, "img-fluid")}
                src="./hero-img-4.jpg"
              />
              <p>Part-time bag designers</p>
            </Parallax>
            <Parallax className={styles.hero__images__5}>
              <StaticImage
                alt=""
                className="img-fluid"
                src="./hero-img-5.jpg"
              />
              <p>Fair-weather sailors</p>
            </Parallax>
            <Parallax className={styles.hero__images__6}>
              <StaticImage
                alt=""
                className={cn(styles.hero__images__6_img, "img-fluid")}
                width={270}
                height={179}
                src="./hero-img-6.jpg"
              />
              <p>Copywriting Kiwis</p>
            </Parallax>
          </div>
          <div className="col-lg-8">
            <div className="position-relative">
              <div className={styles.hero__imagesmain}>
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
