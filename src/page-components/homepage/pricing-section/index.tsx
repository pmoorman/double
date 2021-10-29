import React from "react";
import cn from "classnames";

import { ArrowButton } from "@app/components";
import * as styles from "./index.module.scss";

export const PricingSection = () => {
  return (
    <section id="pricing" className={cn(styles.pricing, "py-0")}>
      {/* Background */}
      <div className={styles.pricing__bg}></div>

      {/* Content */}
      <div className="container position-relative">
        {/* Background */}
        <div className={styles.pricing__content__bg}></div>

        <div className="row">
          {/* Column 1 */}
          <div
            className={cn(
              styles.pricing__content__col1,
              "d-flex flex-column col-lg-5 pe-lg-5"
            )}
          >
            <div style={{ flex: 1 }}>
              <h2 className="mb-4">We like simple, transparent pricing</h2>
              <p>
                (This also prevents us engaging with people who can’t afford our
                services quite yet).
              </p>
            </div>
            <hr
              style={{ width: "100%", marginBottom: 0 }}
              className="d-none d-lg-block"
            />
          </div>

          {/* Column 2 */}
          <div className="col-lg-7 position-relative">
            <div className={styles.pricing__content__col2__bg}></div>
            <div className={styles.pricing__content__col2}>
              <div className="d-flex flex-column text-end">
                <h2 className={styles.pricing__content__col2__price}>€90</h2>
                <p className="lead-lg">/hour</p>
              </div>
              <hr />
              <p className="lead mb-0">
                A minimum commitment starts at 10 hours/week
              </p>
              <hr />
              <p className="lead mb-0">
                We’re looking for long-term collaborations (4+ months)
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="row mt-4 mt-lg-0">
          <div className="col-lg-12">
            <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center py-5">
              <div>
                <p className="lead">Not clear enough?</p>
                <p className="lead-lg">See what it looks like in practice.</p>
              </div>
              <div className={cn(styles.pricing__bottom__button, "d-flex")}>
                <ArrowButton to="/clients" variant="2">
                  See Examples
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
