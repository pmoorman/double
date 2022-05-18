import { ArrowButton, ShadowBox } from "@app/components";
import React from "react";

const items = [
  {
    title: "Acquisition",
    body: "If it’s traffic you need, we’ll choose a channel that matches your audience (maybe it’s ads, content marketing, or outbound sales) and iterate content at a high-tempo until you’re pulling in cost-effective leads.",
  },
  {
    title: "Marketing infrastructure",
    body: "Because we geek out on analytics and attribution, we can help you quickly understand what is and isn’t working in your current marketing systems.",
  },
  {
    title: "Story-driven sales funnels",
    body: "Our speciality is converting leads into customers. We do it by sending them on a journey that offers exceptional value for free, whilst pointing out the benefits of your paid offering.",
  },
  {
    title: "Modern growth strategies",
    body: "Companies grow in the internet age when they leave behind the outdated approach of the TV era. We guide our clients to adopt the Growth Loops methodology - a systematic approach that we build, execute and teach.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="services bg-secondary text-white">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-lg-12 d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center">
            <h1>Services</h1>
            <p
              className="lead-lg text-lg-end mb-0"
              style={{ maxWidth: "400px" }}
            >
              We crack our knuckles and take the lead on:
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="row my-4 my-lg-5">
          <div className="col d-none d-lg-flex">
            <hr
              style={{
                opacity: 0.2,
                border: "1px solid #ffffff",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Service Items */}
        <div className="row">
          {items.map((item, i) => (
            <div key={item.title + i} className="col-lg-3 px-lg-4 mb-4 mb-lg-0">
              <ShadowBox variant="2" className="mb-4 mb-lg-5">
                {i + 1}
              </ShadowBox>
              <p className="lead">{item.title}</p>
              <p className="text-small">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Services button */}
        <div className="d-flex flex-column flex-lg-row justify-content-center mt-5 px-3">
          <ArrowButton variant="3" to="/services">
            Services page
          </ArrowButton>
        </div>
      </div>
    </section>
  );
};
