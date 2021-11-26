import React from "react";
import cn from "classnames";
import { StaticImage } from "gatsby-plugin-image";

import { AnimatedLine, ArrowButton } from "@app/components";

import * as styles from "./index.module.scss";

export const ClientsSection = () => {
  return (
    <section id="clients" className={styles.clients}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 px-0 px-lg-3">
            <h2 className={cn(styles.clients__title, "mb-0 mb-lg-5")}>
              Learn what we did to help our clients grow.
            </h2>
          </div>
          <div className={cn(styles.clients__logos, "col-lg-6")}>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className={styles.clients__logos__item_1}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-sendcloud.png" />
                </div>
              </div>
              <div className={styles.clients__logos__item_2}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-klooker.png" />
                </div>
              </div>
              <div className={styles.clients__logos__item_3}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-cla.png" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.clients__logos__item_4}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-alpian.png" />
                </div>
              </div>
              <div className={styles.clients__logos__item_5}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-tiktok.png" />
                </div>
              </div>
              <div className={styles.clients__logos__item_6}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-h.png" />
                </div>
              </div>
              <div className={styles.clients__logos__item_7}>
                <div data-sal="fade">
                  <StaticImage alt="" quality={60} src="./logo-elugie.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex flex-column flex-lg-row">
            <ArrowButton to="/clients">Case Studies</ArrowButton>
          </div>
        </div>
        <AnimatedLine
          className={cn(styles.clients__line1, "d-none d-lg-block")}
        >
          <StaticImage alt="" src="./clients-line1.svg" />
        </AnimatedLine>
      </div>
    </section>
  );
};
