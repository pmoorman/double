import React, { FC, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Collapse } from "react-bootstrap";

import * as styles from "./index.module.scss";

export interface NavigationMobileProps {}

export const NavigationMobile: FC<NavigationMobileProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.mobile_nav}>
      <button
        className="btn btn-block text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        Jump to
        <StaticImage alt="" src="./icon-chevron_up-light.svg" />
      </button>
      <Collapse in={open}>
        <div id="mobile-nav" className={styles.mobile_nav__content}>
          <a href="#performance">Performance</a>
          <a href="#funnels">Funnels & creative</a>
          <a href="#marketing">Product marketing</a>
          <a href="#infrastructure">Infrastructure</a>
        </div>
      </Collapse>
    </div>
  );
};
