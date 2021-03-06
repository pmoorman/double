import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useSiteMetadata } from "@app/hooks";

type MetaItem = { name: string; content: string };

export interface SEOProps {
  title?: string;
  description?: string;
  isArticle?: boolean;
  meta?: MetaItem[];
}

export const SEO: FC<SEOProps> = ({
  title,
  description,
  isArticle,
  meta = [],
}) => {
  const {
    siteUrl,
    title: siteTitle,
    description: siteDescription,
  } = useSiteMetadata();
  const { pathname } = useLocation();
  const currentUrl = siteUrl + pathname;
  const featuredImageUrl = siteUrl + "/images/double_logo.png";
  const _title = title || siteTitle;
  const _description = description || siteDescription;

  const getOpenGraph = (): MetaItem[] => {
    return [
      { name: "og:type", content: isArticle ? "article" : "website" },
      { name: "og:title", content: _title },
      { name: "og:description", content: _description },
      { name: "og:url", content: currentUrl },
      { name: "og:site_name", content: siteTitle },
      { name: "og:image", content: featuredImageUrl },
      { name: "og:locale", content: "en" },
    ];
  };

  const getTwitterCard = (): MetaItem[] => {
    const result: MetaItem[] = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: _title },
      { name: "twitter:description", content: _description },
      { name: "twitter:image", content: featuredImageUrl },
    ];
    return result;
  };

  const metaItems: MetaItem[] = [
    { name: "description", content: _description },
    ...getOpenGraph(),
    ...getTwitterCard(),
    ...meta,
  ];

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitle}
      titleTemplate={`%s - ${siteTitle}`}
      meta={metaItems}
    />
  );
};
