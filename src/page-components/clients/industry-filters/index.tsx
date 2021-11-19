import React, { FC, useState } from "react";
import cn from "classnames";

import { useQueryParams } from "@app/hooks";

import * as styles from "./index.module.scss";
import Button from "@restart/ui/esm/Button";
import { StaticImage } from "gatsby-plugin-image";
import { Collapse } from "react-bootstrap";

const industries = ["All", "SaaS", "Mobile", "FinTech", "E-commerce", "B2B"];

export interface IndustryFiltersProps {}

export const IndustryFilters: FC<IndustryFiltersProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { queryParams, update } = useQueryParams<{ industry: string }>();
  const selected = queryParams?.industry || industries[0];

  const handleChange = (industry: string) => {
    update({ industry });
    setIsOpen(false);
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
        <div className="d-block d-lg-none" id="industry_filters">
          <Button
            aria-controls="industry-filters-mobile"
            className={styles.industry_filters_mobile__mainbtn}
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
          >
            Show {selected}
            <StaticImage
              className={cn(
                styles.industry_filters_mobile__mainbtn__arrow,
                "me-2"
              )}
              src="./chevron-down-light.svg"
              alt=""
            />
          </Button>
          <Collapse in={isOpen}>
            <div id="industry-filters-mobile">
              {industries.map((industry, i) => (
                <button
                  key={"mobile" + industry + i}
                  type="button"
                  className={styles.industry_filters_mobile__item}
                  onClick={() => handleChange(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
