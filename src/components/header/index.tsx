import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { Link } from "../link";
import { DoubleLogo } from "..";
import * as styles from "./index.module.scss";

const ID = "main-nav";

export const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className="container">
        <Navbar.Brand as={Link} to="/" style={{ width: "120px" }}>
          <DoubleLogo />
        </Navbar.Brand>
        <Navbar.Toggle className={styles.navbarToggler} aria-controls={ID}>
          <div className="toggler-menu-text">Menu</div>
          <span className="navbar-toggle">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse className={styles.navbarCollapse} id={ID}>
          <Nav className="ms-auto">
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              as={Link}
              to="/services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              as={Link}
              to="/clients"
            >
              Clients
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              as={Link}
              to="/blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              href="mailto:pieter@double-agency.com"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
