import React, { FC } from "react";
import cn from "classnames";

import { useQueryParams } from "@app/hooks";

import * as styles from "./index.module.scss";
import { Dropdown } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

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
    <Dropdown className="d-none d-lg-block">
      <Dropdown.Toggle
        className={cn(styles.service_filters__btn, "btn btn-light")}
      >
        <StaticImage alt="" className="me-2" src="./chevron-down.svg" />#
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {services.map((s, i) => (
          <Dropdown.Item key={s + i} onClick={() => handleChange(s)}>
            {s}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
