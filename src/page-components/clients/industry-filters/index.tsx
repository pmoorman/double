import React, { FC } from "react";
import cn from "classnames";

import { useQueryParams } from "@app/hooks";

import * as styles from "./index.module.scss";

const industries = ["All", "SaaS", "Mobile", "FinTech", "E-commerce", "B2B"];

export interface IndustryFiltersProps {}

export const IndustryFilters: FC<IndustryFiltersProps> = () => {
  const { queryParams, update } = useQueryParams<{ industry: string }>();
  const selected = queryParams?.industry || industries[0];

  const handleChange = (industry: string) => {
    update({ industry });
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div
          className={cn(styles.industry_filters, "btn-group d-none d-lg-flex")}
          role="group"
        >
          {industries.map((industry, i) => (
            <button
              key={industry + i}
              type="button"
              onClick={() => handleChange(industry)}
              className={cn(styles.industry_filters__item, {
                [styles.industry_filters__item__active]: selected === industry,
              })}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Industry filters mobile */}
        <div
          className="accordion industry_filters_mobile d-block d-lg-none"
          id="industry_filters"
        >
          <button
            className="industry_filters_mobile__mainbtn collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Show <span v-html="selectedIndustry"></span>
            <img
              className="me-2 industry_filters_mobile__mainbtn__arrow"
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
                key={"mobile" + industry + i}
                type="button"
                className="industry_filters_mobile__item"
                onClick={() => handleChange(industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
