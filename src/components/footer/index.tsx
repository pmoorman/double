import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <hr className="divider-1" />
        <div
          className="
        row
        justify-content-between
        mx-0
        mb-4
        flex-lg-row flex-column
        align-items-center align-items-lg-start
        text-center text-lg-left
      "
        >
          <div
            style={{ maxWidth: "100px" }}
            className="double_logo mb-3 mb-lg-0"
          >
            Logo
          </div>
          <div className="contact-details d-flex flex-lg-row flex-column">
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
        <hr className="divider-2" />
        <div
          className="
        row
        justify-content-between
        mx-0
        mb-4
        flex-lg-row flex-column
        align-items-center align-items-lg-start
        text-center text-lg-left
      "
        >
          <a className="nav-link mb-4 mb-lg-0" href="/">
            Home
          </a>
          <a className="nav-link mb-4 mb-lg-0" href="/services">
            Services
          </a>
          <a className="nav-link mb-4 mb-lg-0" href="/clients">
            Clients
          </a>
          <a className="nav-link mb-4 mb-lg-0" href="/#process">
            Process
          </a>
          <a className="nav-link mb-4 mb-lg-0" href="/about">
            About
          </a>
          <a className="nav-link mb-4 mb-lg-0" href="/blog">
            Blog
          </a>
          <a className="nav-link mb-4 mb-lg-0" href="/academy">
            Double Academy
          </a>
          <a
            className="nav-link mb-4 mb-lg-0"
            href="mailto:pieter@double-agency.com"
          >
            Contact
          </a>
          <a className="nav-link" href="/about#hiring">
            Working at Double
          </a>
        </div>

        <hr className="divider-2 d-lg-none" />

        <div className="text-center text-lg-left">
          <span className="copyright">
            Copyright © {new Date().getFullYear()} Double LLC. All Rights
            Reserved.
            <a
              href="/privacy-policy"
              target="_blank"
              style={{ color: "#afafbf" }}
            >
              Privacy Policy.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
