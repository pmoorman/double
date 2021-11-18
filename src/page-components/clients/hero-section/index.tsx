import React, { FC } from "react";

import { ServiceFilters } from "../service-filters";
import { IndustryFilters } from "../industry-filters";

import * as styles from "./index.module.scss";

export interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center justify-content-lg-between align-items-center">
            {/* Title */}
            <h1 className="mb-4 mb-lg-0">Clients</h1>

            {/* Service filters */}
            <ServiceFilters />
          </div>
        </div>

        {/* Industry filters */}
        <IndustryFilters />
      </div>
    </section>
  );
};
