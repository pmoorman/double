import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./index.scss";

export const BottomSection = () => {
  return (
    <section id="bottom" className="bottom">
      <div className="container position-relative">
        {/* Background block */}
        <div className="bottom__bg--item1"></div>

        {/* Content */}
        <div className="bottom__content row position-relative position-relative">
          <div className="bottom__content__col1 col-lg-6">
            <h2 className="mb-5">Still here?</h2>
            <p className="lead-lg">Then let's get something straight.</p>
          </div>
          <div className="bottom__content__col2 col-lg-6">
            <div>
              <div className="bottom__content__col2--item1"></div>
              <StaticImage
                alt=""
                className="bottom__content__col2--item2"
                src="./footer-img-1.png"
              />
              <StaticImage
                alt=""
                className="bottom__content__col2--item3"
                src="./footer-img-2.png"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 pr-lg-0">
            <p className="bottom__content__par1 lead mb-3 mb-lg-5">
              <br />
              <i>You're in a funnel right now.</i>
              <br />
              <br />
              So if you’re even slightly tempted to see what we can do together,
              leave your details below. <br />
              <br />
              The moment we see it, we’ll come back to you (and remember, we
              live on our laptops).
            </p>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center mt-4 mt-lg-5">
              <a
                href="mailto:pieter@double-agency.com"
                className="arrow-btn variant-1"
              >
                Contact us
              </a>
              <div className="ml-0 ml-lg-4 mt-4 mt-lg-0">
                <span className="font-weight-bold">Email</span>:
                pieter@double-agency.com <br />
                <span className="font-weight-bold">WhatsApp</span>: +316 230 555
                90
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
