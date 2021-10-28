import React from "react";

import { MultiCollapse } from "@app/components";
import { Navigation } from "../navigation";

const performance = [
  {
    title: "SoMe paid ads",
    body: "From Pinterest & Quora to IG or Facebook and LinkedIn, if there's a social medium out there, chances are we run ads there. ",
  },
  {
    title: "Search Ads",
    body: "We create the ad copy, do the targeting and management for your SEM campaigns on Google or Bing.",
  },
  {
    title: "Programmatic ads",
    body: "Let the algorithms do the work, with our help. This less known type of advertisements can be really successful for niche industries.",
  },
  {
    title: "Outbound lead gen (B2B)",
    body: "We help you build a well-oiled machine that finds, reaches and converts leads, all automated and outsources.",
  },
  {
    title: "Affiliate marketing",
    body: "Whether it is complex partnerships or simple referral campaigns, we set you up with the best parties for your target audience.",
  },
  {
    title: "Influencer marketing",
    body: "Wherever your perfect customer is hanging out, we will find their idols and bind them to your brand.",
  },
];

export const PerformanceSection = () => {
  return (
    <section id="performance" className="performance">
      <div className="container">
        <div className="performance__upper row align-items-end px-3 px-lg-0">
          <div className="col">
            <Navigation />
          </div>
          <div>
            <img
              className="img-fluid"
              src="/assets/images/services/performance.svg"
            />
          </div>
        </div>
        <MultiCollapse items={performance} />
      </div>
    </section>
  );
};
