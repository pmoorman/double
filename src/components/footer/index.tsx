import React from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { DoubleLogo, Link } from "..";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr className={styles.divider1} />
        <div className=" d-flex justify-content-between mx-0 mb-4 flex-lg-row flex-column align-items-center align-items-lg-start text-center text-lg-start">
          <div
            style={{ maxWidth: "100px" }}
            className={cn(styles.doubleLogo, "mb3 mb-lg-0")}
          >
            <DoubleLogo />
          </div>
          <div
            className={cn(
              styles.contactDetails,
              "d-flex flex-lg-row flex-column"
            )}
          >
            <span className="me-3">
              <strong>Email</strong>:
              <a href="mailto:pieter@double-agency.com">
                pieter@double-agency.com
              </a>
            </span>
            <span className="me-3">
              <strong>WhatsApp</strong>:
              <a href="tel:+316 230 555 90">+316 230 555 90</a>
            </span>
            <span className="me-3">
              {" "}
              <strong>Telegram</strong>: @doubleagency{" "}
            </span>
          </div>
        </div>
        <hr className={styles.divider2} />
        <div className="  d-flex justify-content-between mx-0 mb-4 flex-lg-row flex-column align-items-center align-items-lg-start text-center text-lg-start ">
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/">
            Home
          </Link>
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/services">
            Services
          </Link>
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/clients">
            Clients
          </Link>
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/#process">
            Process
          </Link>
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/about">
            About
          </Link>
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/blog">
            Blog
          </Link>
          <Link className={cn(styles.navLink, "mb-4 mb-lg-0")} to="/academy">
            Double Academy
          </Link>
          <Link
            className={cn(styles.navLink, "mb-4 mb-lg-0")}
            to="mailto:pieter@double-agency.com"
          >
            Contact
          </Link>
          <Link className={styles.navLink} to="/about#hiring">
            Working at Double
          </Link>
        </div>

        <hr className={cn(styles.divider2, "d-lg-none")} />

        <div className="text-center text-lg-start">
          <span className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Double LLC. All Rights
            Reserved.
            <Link
              to="/privacy-policy"
              target="_blank"
              style={{ color: "#afafbf" }}
            >
              Privacy Policy.
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
