import { MultiCollapse } from "@app/components";
import { PerformanceSection } from "@app/page-components/services";
import React from "react";

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
const funnels = [
  {
    title: "Animation",
    body: "From explainer videos to web animations, use engaging motion graphics to make your brand stand out.",
  },
  {
    title: "Technical writing",
    body: "Let our team dive into the topic of your choice and write on-point, but easy-to-understand content for your audience.",
  },
  {
    title: "Brand strategy",
    body: "We help new and existing brands with their brand positioning, voice, and visual style.",
  },
  {
    title: "Sales funnel architecture",
    body: "Reach your company objectives by building a well-oiled sales funnel. This is the moment you will systemize your marketing.",
  },
  {
    title: "Copywriting",
    body: "Our team of copywriters will help you find your brand’s voice and produce out-of-this-world pieces of content.",
  },
  {
    title: "Story-driven email copywriting",
    body: "Build a list of loyal subscribers through story-telling. Get your readers hooked and convert them into paying customers later.",
  },
  {
    title: "Lead nurturing",
    body: "Let us help you close more deals by designing a powerful lead nurture strategy. ",
  },
  {
    title: "Content creation",
    body: "To complement your marketing campaigns, we help you create the right type of content. Think photos, videos, GIFs, blogposts, social media banners and more. ",
  },
  {
    title: "Website design",
    body: "We build anything from simple landing pages to full-blown websites using an array of platforms like Squarespace, Wordpress, and Wix. ",
  },
];
const marketing = [
  {
    title: "Growth Loops",
    body: "Our passion is to architect your automated growth 'machines' that integrate all aspects of your acquisition, conversion, and retention into a never-ending loop.",
  },
  {
    title: "Onboarding",
    body: "Delight your new users or customers with a world-class onboarding experience. The most crucial step for successful long-term retention.",
  },
  {
    title: "Product-driven growth",
    body: "We help you find ways for your product or service to generate more (user) growth. Let your product do the work for you.",
  },
  {
    title: "Retention",
    body: "Turn new users into loyal customers by finding a strategy for long-term retention.",
  },
  {
    title: "Referral & virality",
    body: "We will unlock the potential of word-of-mouth and virality by giving your customers something worth talking about.",
  },
];
const infrastructure = [
  {
    title: "Attribution",
    body: "Through precise attribution we determine the ROI for your money spent on each marketing channel.",
  },
  {
    title: "Tooling & infrastructure ",
    body: "We find your ultimate tech stack and integrate everything neatly with your existing infrastructure.",
  },
  {
    title: "Marketing & automation ",
    body: "Free up time to focus on your business by automating marketing and sales activities.",
  },
  {
    title: "Data-driven growth ",
    body: "We design experiments that generate growth using company data. We use past data or help you set up data collection processes.",
  },
  {
    title: "High-tempo testing ",
    body: "Our team will help you put your hypotheses to the test and build a structured (weekly) process to find which ones are true and not.",
  },
  {
    title: "Analytics & dashboarding",
    body: "We make your most important business and marketing insights available to you with customised dashboards.",
  },
];

export const ServicesPage = () => {
  return <PerformanceSection />;
};

export default ServicesPage;
