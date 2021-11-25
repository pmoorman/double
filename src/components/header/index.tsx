import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

import { Link } from "../link";
import { DoubleLogo } from "..";
import * as styles from "./index.module.scss";
import cn from "classnames";

const ID = "main-nav";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglerClass = cn(styles.navbarToggler, {
    [styles.navbarTogglerCollapsed]: !isOpen,
  });

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className="container">
        <Navbar.Brand as={Link} to="/" style={{ width: "120px" }}>
          <DoubleLogo />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsOpen((v) => !v)}
          className={togglerClass}
          aria-controls={ID}
        >
          <div className={styles.navbarTogglerText}>Menu</div>
          <span className={styles.navbarToggle}>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse in={isOpen} className={styles.navbarCollapse} id={ID}>
          <Nav className={styles.navbarNav}>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              onClick={() => setIsOpen(false)}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              onClick={() => setIsOpen(false)}
              as={Link}
              to="/services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              onClick={() => setIsOpen(false)}
              as={Link}
              to="/clients"
            >
              Clients
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              onClick={() => setIsOpen(false)}
              as={Link}
              to="/blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
              onClick={() => setIsOpen(false)}
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
