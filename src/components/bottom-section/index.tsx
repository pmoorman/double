import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { ArrowButton } from "..";

import * as styles from "./index.module.scss";

export interface BottomSectionProps {
  title: string;
  subtitle: string;
  body: string;
}

export const BottomSection: FC<BottomSectionProps> = ({
  title,
  subtitle,
  body,
}) => {
  return (
    <section className={styles.bottom_section}>
      <div className="container position-relative">
        {/* Background */}
        <div>
          <div
            className={cn(
              styles.bottom_section__bg_items__item,
              styles.bottom_section__bg_items__item1
            )}
          />
          <div
            className={cn(
              styles.bottom_section__bg_items__item,
              styles.bottom_section__bg_items__item2
            )}
          />
          <div
            className={cn(
              styles.bottom_section__bg_items__item,
              styles.bottom_section__bg_items__item3
            )}
          />
          <StaticImage
            alt=""
            src="./bottom-img-1.jpg"
            className={cn(
              styles.bottom_section__bg_items__item,
              styles.bottom_section__bg_items__item4
            )}
          />
          <StaticImage
            alt=""
            src="./bottom-img-2.jpg"
            className={cn(
              styles.bottom_section__bg_items__item,
              styles.bottom_section__bg_items__item5
            )}
          />
          <StaticImage
            alt=""
            src="./bottom-img-3.jpg"
            className={cn(
              styles.bottom_section__bg_items__item,
              styles.bottom_section__bg_items__item6
            )}
          />
        </div>

        {/* Content */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h3>{subtitle}</h3>
            <h2 className="mb-0 mb-lg-2">{title}</h2>
            <p className="mt-4 pt-2 pt-lg-0 mt-lg-0">{body}</p>
            <div className="d-flex flex-column flex-lg-row justify-content-center mt-5">
              <ArrowButton to="mailto:pieter@double-agency.com">
                Contact us
              </ArrowButton>
            </div>
            <div
              className="mt-5"
              style={{ fontSize: "14px", lineHeight: "21px" }}
            >
              <strong>Email</strong>: pieter@double-agency.com <br />
              <strong>WhatsApp</strong>: +316 230 555 90
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
