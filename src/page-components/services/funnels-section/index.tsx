import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { MultiCollapse } from "@app/components";
import { Navigation } from "../navigation";

import * as styles from "./index.module.scss";

const funnels = [
  {
    title: "Animation",
    body: "From explainer videos to web animations, use engaging motion graphics to make your brand stand out.",
  },
  {
    title: "Sales funnel architecture",
    body: "Reach your company objectives by building a well-oiled sales funnel. This is the moment you will systemize your marketing.",
  },
  {
    title: "Lead nurturing",
    body: "Let us help you close more deals by designing a powerful lead nurture strategy. ",
  },
  {
    title: "Technical writing",
    body: "Let our team dive into the topic of your choice and write on-point, but easy-to-understand content for your audience.",
  },
  {
    title: "Copywriting",
    body: "Our team of copywriters will help you find your brand’s voice and produce out-of-this-world pieces of content.",
  },
  {
    title: "Content creation",
    body: "To complement your marketing campaigns, we help you create the right type of content. Think photos, videos, GIFs, blogposts, social media banners and more. ",
  },
  {
    title: "Brand strategy",
    body: "We help new and existing brands with their brand positioning, voice, and visual style.",
  },
  {
    title: "Story-driven email copywriting",
    body: "Build a list of loyal subscribers through story-telling. Get your readers hooked and convert them into paying customers later.",
  },
  {
    title: "Website design",
    body: "We build anything from simple landing pages to full-blown websites using an array of platforms like Squarespace, Wordpress, and Wix. ",
  },
];

export const FunnelsSection = () => {
  return (
    <section id="funnels" className={styles.funnels}>
      <div className="container">
        <div
          className={cn(styles.upper, "d-flex align-items-end px-3 px-lg-0")}
        >
          <div className="col">
            <Navigation index={1} />
          </div>
          <div>
            <StaticImage alt="" className="img-fluid" src="./funnels.svg" />
          </div>
        </div>
        <MultiCollapse items={funnels} background="dark" />
      </div>
    </section>
  );
};
