import React from "react";
import cn from "classnames";
import { StaticImage } from "gatsby-plugin-image";

import { AnimatedLine, Parallax, ShadowBox } from "@app/components";
import * as styles from "./index.module.scss";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container position-relative">
        <Parallax>
          <StaticImage
            alt=""
            width={141}
            className={cn(
              styles.hero__bggraphic_item__desktop,
              styles.hero__bggraphic_item__desktop_1
            )}
            src="./hero-graphic-2.png"
          />
        </Parallax>

        {/* intro */}
        <div
          className={cn(
            styles.hero__intro,
            "d-flex px-3 px-lg-0 text-center text-lg-start"
          )}
          data-aos="fade-in"
        >
          <div className="col-lg-5">
            <p className={cn(styles.hero__intro__subtitle, "lead-lg mb-2")}>
              Complete Systematic
            </p>
            <h1 className="fw-bold mb-lg-4">Growth Marketing Services</h1>
          </div>
        </div>

        {/* Graphics mobile 1 */}
        <div
          className={cn(styles.hero__bggraphics_mobile_1, "position-relative")}
        >
          <Parallax>
            <StaticImage
              alt=""
              className={cn(
                styles.hero__bggraphic_item_mobile,
                styles.hero__bggraphic_item_mobile_1
              )}
              src="./hero-graphic-2.png"
            />
          </Parallax>
          <Parallax>
            <StaticImage
              alt=""
              className={cn(
                styles.hero__bggraphic_item_mobile,
                styles.hero__bggraphic_item_mobile_2
              )}
              src="./hero-img-2.jpg"
            />
          </Parallax>
          <Parallax>
            <StaticImage
              alt=""
              className={cn(
                styles.hero__bggraphic_item_mobile,
                styles.hero__bggraphic_item_mobile_3
              )}
              src="./hero-img-4.jpg"
            />
          </Parallax>
        </div>

        {/* text 1 */}
        <div
          className={cn(
            styles.hero__text_1,
            "d-flex text-center text-lg-start px-4 px-lg-3"
          )}
          data-aos="fade-in"
        >
          <div className="col-lg-6 px-3 px-lg-5">
            <p className="lead">
              If you’ve already dreamed up a marketing plan,{" "}
              <span className="text-highlight">we’ll bring it to life</span>.
            </p>
          </div>
          <div
            className={cn(
              styles.hero__bggraphic_item__desktop,
              styles.hero__bggraphic_item__desktop_2
            )}
          >
            <Parallax>
              <StaticImage
                className={styles.hero__bggraphic_item__desktop_2_img_1}
                alt=""
                src="./hero-graphic-3.png"
              />
              <StaticImage
                className={styles.hero__bggraphic_item__desktop_2_img_2}
                alt=""
                src="./hero-img-4.jpg"
              />
            </Parallax>
          </div>
          <AnimatedLine className={styles.hero__line_1}>
            <StaticImage alt="" src="./hero-line-1.png" />
          </AnimatedLine>
        </div>

        {/* Graphics mobile 2 */}
        <div
          className={cn(styles.hero__bggraphics_mobile_2, "position-relative")}
        >
          <Parallax
            className={cn(
              styles.hero__bggraphic_item_mobile,
              styles.hero__bggraphic_item_mobile_4
            )}
          >
            <StaticImage alt="" src="./hero-graphic-3.png" />
          </Parallax>
          <Parallax
            className={cn(
              styles.hero__bggraphic_item_mobile,
              styles.hero__bggraphic_item_mobile_5
            )}
          >
            <StaticImage alt="" src="./hero-img-5.jpg" />
          </Parallax>
          <Parallax
            className={cn(
              styles.hero__bggraphic_item_mobile,
              styles.hero__bggraphic_item_mobile_6
            )}
          >
            <StaticImage alt="" src="./hero-img-1.jpg" />
          </Parallax>
          <Parallax>
            <StaticImage
              alt=""
              className={cn(
                styles.hero__bggraphic_item_mobile,
                styles.hero__bggraphic_item_mobile_7
              )}
              src="./hero-graphic-1.png"
            />
          </Parallax>
          <AnimatedLine className={styles.hero__line_1_mobile}>
            <StaticImage alt="" src="./hero-line-1-mobile.svg" />
          </AnimatedLine>
        </div>

        {/* text 2 */}
        <div
          className={cn(
            styles.hero__text_2,
            "d-flex justify-content-end  text-center text-lg-start px-4 px-lg-3"
          )}
          data-aos="fade-in"
        >
          <div className="col-lg-6 px-0 px-lg-3">
            <p className="lead">
              And if you’re working with a blank canvas… we’ll design, build and
              maintain a{" "}
              <span className="text-highlight">
                complete user acquisition system
              </span>{" "}
              for you.
            </p>
          </div>
          <AnimatedLine className={styles.hero__line_2}>
            <StaticImage alt="" src="./hero-line-2.png" />
          </AnimatedLine>
        </div>

        {/* Graphics mobile 3 */}
        <div
          className={cn(styles.hero__bggraphics_mobile_3, "position-relative")}
        >
          <AnimatedLine className={styles.hero__line_2_mobile}>
            <StaticImage alt="" src="./hero-line-2-mobile.svg" />
          </AnimatedLine>

          <Parallax
            className={cn(
              styles.hero__bggraphic_item_mobile,
              styles.hero__bggraphic_item_mobile_8
            )}
          >
            <StaticImage alt="" src="./hero-img-3.jpg" />
          </Parallax>
        </div>

        {/* images */}
        <div className={styles.hero__desktop_image_section} data-aos="fade-in">
          <Parallax
            className={cn(
              styles.hero__bggraphic_item__desktop,
              styles.hero__bggraphic_item__desktop_3
            )}
          >
            <StaticImage
              className={styles.hero__bggraphic_item__desktop_3_img_1}
              alt=""
              src="./hero-graphic-1.png"
            />
            <StaticImage
              className={styles.hero__bggraphic_item__desktop_3_img_2}
              alt=""
              src="./hero-img-1.jpg"
            />
          </Parallax>

          <Parallax
            className={cn(
              styles.hero__bggraphic_item__desktop,
              styles.hero__bggraphic_item__desktop_4
            )}
          >
            <StaticImage
              className={styles.hero__bggraphic_item__desktop_4_img_1}
              alt=""
              src="./hero-img-2.jpg"
            />
          </Parallax>

          <div
            className={cn(
              styles.hero__bggraphic_item__desktop,
              styles.hero__bggraphic_item__desktop_5
            )}
          >
            <Parallax>
              <StaticImage
                className={styles.hero__bggraphic_item__desktop_5_img_1}
                alt=""
                src="./hero-img-5.jpg"
              />
            </Parallax>
          </div>
        </div>

        {/* text 3 */}
        <div className={cn(styles.hero__text_3, "row")} data-aos="fade-in">
          <div className="col-lg-7 px-5 ps-lg-0 pe-lg-5">
            <ShadowBox checkbox className="mb-4 mx-auto mx-lg-0" />
            <h2>
              We help you systematically drive traffic...{" "}
              <span>(= performance)</span>
            </h2>
          </div>
          <div className="col">
            <div
              className={cn(
                styles.hero__bggraphic_item__desktop,
                styles.hero__bggraphic_item__desktop_6
              )}
            >
              <Parallax>
                <StaticImage
                  className={styles.hero__bggraphic_item__desktop_6_img_1}
                  alt=""
                  src="./hero-img-4.jpg"
                />
              </Parallax>
            </div>
          </div>
        </div>

        {/* text 4 & 5 */}
        <div
          className={cn(styles.hero__text_4, "row justify-content-between")}
          data-aos="fade-in"
        >
          <div className="col-lg-6">
            <ShadowBox checkbox className="mb-4 mx-auto mx-lg-0" />
            <p className="lead-lg">
              …and then we help you convert that traffic via funnels, nurturing
              & storytelling…
            </p>
          </div>
          <div className="col-lg-5 px-5 ps-lg-3 pe-lg-0">
            <ShadowBox checkbox className="mb-4 mx-auto mx-lg-0" />
            <p className="lead-lg">…and turn them into active product users.</p>
          </div>
          <AnimatedLine className={styles.hero__line_3}>
            <StaticImage alt="" src="./hero-line-3.png" />
          </AnimatedLine>
        </div>

        {/* Graphics mobile 4 */}
        <div
          className={cn(styles.hero__bggraphics_mobile_3, "position-relative")}
        >
          <AnimatedLine className={styles.hero__line_3_mobile}>
            <StaticImage alt="" src="./hero-line-3-mobile.svg" />
          </AnimatedLine>
        </div>

        {/* Text 6 */}
        <div
          className="row justify-content-center text-center"
          data-aos="fade-in"
        >
          <div className="col-lg-6">
            <p className="lead-lg">
              All while building the{" "}
              <span className="text-highlight">
                right systems & infrastructure
              </span>{" "}
              for you, so that{" "}
              <span className="text-highlight">everything works</span> on the
              technical end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
