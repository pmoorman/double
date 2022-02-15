import { StaticImage } from "gatsby-plugin-image";
import React, { FC, ReactNode } from "react";
import { ClientImage } from "../client-image";

import "./index.scss";

export interface ClientBoxProps {
  size?: 1 | 2 | 3;
  title: string;
  logo: { childImageSharp?: any; publicURL: string };
  industry: string;
  services: string[];
  description: string;
  testimonialName?: string;
  testimonialJobtitle?: string;
  backgroundColor?: string;
  backgroundImage?: { childImageSharp?: any; publicURL: string };
  backgroundImageMobile?: ReactNode;
  backgroundImageObjectFit?: "cover" | "contain";
  backgroundImagePosition?: "top" | "bottom";
  arrow: "dark" | "light";
  pageUrl?: string;
}

export const ClientBox: FC<ClientBoxProps> = (props) => {
  const { size } = props;

  switch (size) {
    case 1:
      return <ClientBoxSm {...props} />;
    case 2:
      return <ClientBoxMd {...props} />;
    case 3:
      return <ClientBoxLg {...props} />;
  }
};

const ClientBoxSm: FC<ClientBoxProps> = (props) => {
  const {
    backgroundColor,
    pageUrl,
    logo,
    title,
    industry,
    description,
    services,
  } = props;
  return (
    <>
      <div className="client-box client-box__sm">
        <div className="client-box__logo" style={{ backgroundColor }}>
          {pageUrl && (
            <a
              href="{{client.page_url}}"
              className="client-box__logo__arrow d-lg-flex d-none"
            >
              <img
                className="client-box__logo__arrow--non_hover"
                src="/assets/images/clients/link_arrow-{{client.arrow}}.svg"
              />
              <div className="client-box__logo__arrow--hover">
                <img src="/assets/images/clients/link_arrow-light.svg" />
                <span>See Case Study</span>
              </div>
            </a>
          )}
          <ClientImage
            item={logo}
            alt=""
            style={{ maxHeight: "54px", maxWidth: "270px" }}
          />
        </div>
        <div className="client-box__content">
          <h3 className="client-box__content__title">{title}</h3>
          <p className="client-box__content__industry">{industry}</p>
          <p
            className="client-box__content__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="d-block d-lg-none">
            {pageUrl && (
              <a
                className="client-box__link_mobile btn btn-primary d-flex justify-content-between"
                href="{{client.page_url}}"
              >
                See Case Study
                <img
                  className="client-box__link_mobile__arrow"
                  src="/assets/images/clients/link_arrow-light.svg"
                />
              </a>
            )}
          </div>
        </div>
        <div className="client-box__services d-lg-flex d-none">
          <div className="client-box__services__titlebox">
            <p>We worked on:</p>
          </div>
          <div className="client-box__services__valuebox">
            <p>{services.map((s) => `#${s}`).join(" ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ClientBoxMd: FC<ClientBoxProps> = (props) => {
  const {
    backgroundColor,
    backgroundImage,
    backgroundImageObjectFit = "contain",
    pageUrl,
    logo,
    title,
    industry,
    description,
    services,
    testimonialName,
    testimonialJobtitle,
  } = props;

  return (
    <div className="client-box client-box__md">
      <div
        className="client-box__md__bg"
        style={{ backgroundColor, zIndex: 1 }}
      >
        <ClientImage
          item={backgroundImage}
          objectFit={backgroundImageObjectFit}
          alt=""
          style={{
            width: "100%",
            textAlign: "center",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="client-box__logo" style={{ backgroundColor }}>
        {pageUrl && (
          <a
            href="{{client.page_url}}"
            className="client-box__logo__arrow d-lg-flex d-none"
          >
            <img
              className="client-box__logo__arrow--non_hover"
              src="/assets/images/clients/link_arrow-{{client.arrow}}.svg"
            />
            <div className="client-box__logo__arrow--hover">
              <img src="/assets/images/clients/link_arrow-light.svg" />
              <span>See Case Study</span>
            </div>
          </a>
        )}
        <ClientImage
          item={logo}
          alt=""
          style={{
            maxHeight: "54px",
            maxWidth: "270px",
            zIndex: 2,
          }}
        />
      </div>
      <div className="client-box__content" style={{ zIndex: 2 }}>
        <h3 className="client-box__content__title">{title}</h3>
        <p className="client-box__content__industry">{industry}</p>
        <p
          className="client-box__content__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {testimonialName && (
          <div className="client-box__testimonial">
            <StaticImage
              className="client-box__testimonial__line"
              src="./testimonial_line.svg"
              alt=""
            />
            <p className="client-box__testimonial__name">{testimonialName}</p>
            <p className="client-box__testimonial__jobtitle">
              {testimonialJobtitle}
            </p>
          </div>
        )}

        <div className="d-block d-lg-none">
          {pageUrl && (
            <a
              className="client-box__link_mobile btn btn-primary d-flex justify-content-between"
              href="{{client.page_url}}"
            >
              See Case Study
              <img
                className="client-box__link_mobile__arrow"
                src="/assets/images/clients/link_arrow-light.svg"
              />
            </a>
          )}
        </div>
      </div>
      <div className="client-box__services d-lg-flex d-none">
        <div className="client-box__services__titlebox">
          <p>We worked on:</p>
        </div>
        <div className="client-box__services__valuebox">
          <p>{services.map((s) => `#${s}`).join(" ")}</p>
        </div>
      </div>
    </div>
  );
};

const ClientBoxLg: FC<ClientBoxProps> = (props) => {
  const {
    backgroundColor,
    backgroundImage,
    backgroundImageMobile,
    pageUrl,
    logo,
    title,
    industry,
    description,
    services,
    testimonialName,
    testimonialJobtitle,
  } = props;

  return (
    <div
      className="client-box__lg"
      style={{ backgroundImage: `url('${backgroundImage.publicURL}')` }}
    >
      <div
        className="mobile-bg d-block d-lg-none"
        style={{ backgroundImage: `url('${backgroundImageMobile}')` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 px-0">
            <div className="client-box__logo" style={{ backgroundColor }}>
              <ClientImage
                item={logo}
                alt=""
                style={{
                  maxHeight: "166px",
                  maxWidth: "207px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-8 ps-4 pe-0">
            {pageUrl && (
              <a
                href="{{client.page_url}}"
                className="client-box__logo__arrow d-none d-lg-block d-lg-flex d-none"
              >
                <img
                  className="client-box__logo__arrow--non_hover"
                  src="/assets/images/clients/link_arrow-{{client.arrow}}.svg"
                />
                <div className="client-box__logo__arrow--hover">
                  <img src="/assets/images/clients/link_arrow-light.svg" />
                  <span>See Case Study</span>
                </div>
              </a>
            )}

            <div className="client-box__content">
              <div className="client-box__content__inner">
                <h3 className="client-box__content__title">{title}</h3>
                <p className="client-box__content__industry">{industry}</p>
                <p
                  className="client-box__content__description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              {testimonialName && (
                <div className="client-box__testimonial">
                  <StaticImage
                    className="client-box__testimonial__line"
                    src="./testimonial_line.svg"
                    alt=""
                  />
                  <p className="client-box__testimonial__name">
                    {testimonialName}
                  </p>
                  <p className="client-box__testimonial__jobtitle">
                    {testimonialJobtitle}
                  </p>
                </div>
              )}

              <div className="d-block d-lg-none">
                {pageUrl && (
                  <a
                    className="client-box__link_mobile btn btn-primary d-flex justify-content-between"
                    href="{{client.page_url}}"
                  >
                    See Case Study
                    <img
                      className="client-box__link_mobile__arrow"
                      src="/assets/images/clients/link_arrow-light.svg"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="client-box__services row d-none d-lg-flex">
          <div className="col-lg-4 px-0 client-box__services__titlebox">
            <p>We worked on:</p>
          </div>
          <div className="col-lg-8 px-0 client-box__services__valuebox">
            <p>
              {services.map((s, i) => (
                <span key={s + i} className="me-4">
                  #{s}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
