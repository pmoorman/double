import React, { FC } from "react";
import cn from "classnames";

import { useQueryParams } from "@app/hooks";

import * as styles from "./index.module.scss";

const services = [
  "All",
  "Webdesign",
  "Paid ads",
  "Onboarding",
  "Content marketing",
  "Training",
  "Activation",
  "Copywriting",
  "Analytics",
  "Photo/Video Production",
  "B2B Lead Generation",
  "Strategy",
];

export interface ServiceFiltersProps {}

export const ServiceFilters: FC<ServiceFiltersProps> = () => {
  const { queryParams, update } = useQueryParams<{ service: string }>();
  const selected = queryParams?.service || services[0];

  const handleChange = (service: string) => {
    update({ service });
  };

  return (
    <div className="dropdown d-none d-lg-block">
      <button
        className={cn(
          styles.service_filters__btn,
          "btn btn-light dropdown-toggle"
        )}
        type="button"
        id="service_filters"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img className="me-2" src="chevron-down" />#
        <span v-html="selectedServiceLabel()"></span>
      </button>
      <div className="dropdown-menu" aria-labelledby="service_filters">
        {services.map((s, i) => (
          <button
            key={s + i}
            className="dropdown-item"
            onClick={() => handleChange(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};
