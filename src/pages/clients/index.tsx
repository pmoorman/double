import React, { useMemo, useEffect } from "react";
import { graphql, PageProps } from "gatsby";
import { Col } from "react-bootstrap";
import sal from "sal.js";

import {
  ClientBox,
  ClientBoxProps,
  HeroSection,
} from "@app/page-components/clients";

import { useQueryParams } from "@app/hooks";
import { SEO } from "@app/components";

interface Client extends Omit<ClientBoxProps, "logo" | "backgroundImage"> {
  logo: string;
  backgroundImage?: string;
}

const clients: Client[] = [
  {
    title: "TikTok",
    logo: "tiktok-logo",
    industry: "Mobile",
    services: ["Webdesign", "Copywriting", "Onboarding"],
    description:
      "Something wasn't adding up. Based on TikTok's unreal success, businesses should have been flooding in to partner up as advertisers...<br> <br>Now things are starting to pick up, and TikTok's success is becoming whole again.",
    testimonialName: null,
    testimonialJobtitle: null,
    backgroundColor: "#000",
    backgroundImage: "tiktok_background",
    backgroundImageMobile: "tiktok_background-mobile",
    arrow: "light",
    size: 3,
  },
  {
    title: "Sendcloud",
    logo: "sendcloud-logo",
    industry: "SaaS",
    services: ["Copywriting", "Training", "Content marketing"],
    description:
      "Read the full story to see how we've led Sendcloud on a copywriting journey that’s impacted their messaging in more than six languages...",
    backgroundColor: "#EEF6FF",
    arrow: "dark",
    size: 1,
  },
  {
    title: "Peg",
    logo: "peg-logo",
    industry: "SaaS",
    services: ["B2B Lead Generation", "Copywriting", "Activation"],
    description:
      "Over in London, we worked with Peg to build a stable sales infrastructure and an outbound lead generation engine. They went on to raise over $1,000,000 in their series A.",
    backgroundColor: "#E94058",
    arrow: "light",
    size: 1,
  },
  {
    title: "InsectoCycle",
    logo: "insecto_cycle-logo",
    industry: "B2B",
    services: [
      "Webdesign",
      "Onboarding",
      "Copywriting",
      "Photo/Video Production",
      "Analytics",
      "Strategy",
    ],
    description:
      "We’ve helped InsectoCycle create their business case, brand identity and website. A full-service job!",
    backgroundColor: "#E4F0EC",
    arrow: "dark",
    size: 1,
  },
  {
    title: "Alpian",
    logo: null,
    industry: "FinTech",
    services: [
      "Copywriting",
      "Content marketing",
      "Paid Ads",
      "Onboarding",
      "Analytics",
      "Activation",
      "Strategy",
    ],
    description:
      "Alpian aims to change banking and investing in the most competitive market in the world... Switzerland. We are building explosive momentum to gain a piece of that market.",
    testimonialName: null,
    testimonialJobtitle: null,
    backgroundImage: "Alpian_background",
    backgroundColor: "#000000",
    arrow: "light",
    size: 2,
  },
  {
    title: "Switch.CM",
    logo: "switchcm-logo",
    industry: "SaaS",
    services: ["B2B Lead Generation", "Onboarding", "Copywriting", "Strategy"],
    description:
      "We built Switch an automated customer acquisition engine. The result? A triple-digit number of leads within three months and Switch being acquired in eight!",
    backgroundColor: "#7197BB",
    arrow: "dark",
    size: 1,
  },
  {
    title: "Klooker",
    logo: "klooker-logo",
    industry: "E-commerce",
    services: [
      "Webdesign",
      "Paid ads",
      "Activation",
      "Photo/Video Production",
      "Analytics",
      "Onboarding",
      "Strategy",
    ],
    description:
      "“Double’s team is extremely forthcoming with ideas to engage our customers further.“",
    testimonialName: "Dennis Kamst",
    testimonialJobtitle: "Founder & CEO at klooker",
    backgroundColor: "#725D87",
    backgroundImage: "klooker_background",
    backgroundImageMobile: "klooker_background-mobile",
    arrow: "light",
    size: 3,
  },
  {
    title: "BABB",
    logo: "babb-logo",
    industry: "FinTech",
    services: ["Strategy", "Copywriting", "Paid Ads"],
    description:
      "Pieter gave BABB a hand in the early days to establish their messaging and market positioning. Their initial coin offering (ICO) raised $25m ;)",
    backgroundColor: "#56204B",
    arrow: "dark",
    size: 1,
  },
  {
    title: "Elugie",
    logo: "elugie-logo",
    industry: "B2B",
    services: [
      "Strategy",
      "Copywriting",
      "Activation",
      "Onboarding",
      "B2B Lead Generation",
    ],
    description:
      "Elugie are set on selling 100,000 of their hydrogen power plants by 2030. Read the case study to see exactly how they got on the path to selling at scale!",
    backgroundImage: "elugie_background",
    backgroundImagePosition: "bottom",
    arrow: "light",
    size: 2,
  },
  {
    title: "Core Life Analytics",
    logo: "core_life_analytics-logo",
    industry: "SaaS",
    services: [
      "Webdesign",
      "Analytics",
      "Copywriting",
      "Photo/Video Production",
      "Onboarding",
    ],
    description:
      "Core Life Analytics dreamed of helping scientists around the world. So we built them sales funnels and a video to get them on the way. Check out the full case!",
    backgroundColor: "#751162",
    arrow: "light",
    size: 1,
  },
  {
    title: "Diesel",
    logo: "diesel-logo",
    industry: "E-commerce",
    services: ["Strategy", "Copywriting", "Analytics"],
    description:
      "Arthur, our conversion optimisation geek, helped Diesel explode their online revenue in Australia by 44% in three months.",
    backgroundColor: "#000000",
    arrow: "light",
    size: 1,
  },
  {
    title: "Sigrow",
    logo: "sigrow-logo",
    industry: "B2B",
    services: [
      "Webdesign",
      "Copywriting",
      "Paid Ads",
      "Activation",
      "Analytics",
    ],
    description:
      "We helped Sigrow from p/m-fit onwards, to scale up their brand and bring in a steady and predictable flow of leads for their business.",
    backgroundColor: "#FFFFFF",
    arrow: "light",
    size: 1,
  },
];

const clientsNormalized = clients.reduce((prev, curr) => {
  prev[curr.title] = curr;
  return prev;
}, {});

export interface ClientsPageProps {
  allFile: {
    edges: {
      node: {
        childImageSharp?: any;
        name: string;
        publicURL: string;
      };
    }[];
  };
}

export const ClientsPage = ({ data }: PageProps<ClientsPageProps>) => {
  const { queryParams } =
    useQueryParams<{ service?: string; industry: string }>();

  useEffect(() => {
    sal();
  }, [queryParams]);

  // Filter instustry and service based on query params
  const filteredItems = useMemo(() => {
    return clients.filter((c) => {
      const hasIndustry =
        !queryParams?.industry || queryParams?.industry === "All"
          ? true
          : c.industry === queryParams?.industry;
      const hasService =
        !queryParams?.service || queryParams?.service === "All"
          ? true
          : c.services.includes(queryParams?.service);
      return hasService && hasIndustry;
    });
  }, [queryParams]);

  // Sort and set width size of columns
  const sortedItems = useMemo(() => {
    return filteredItems.reduce(
      (prev, curr) => {
        const lastIndex = prev.length - 1;
        const lastRow = prev[lastIndex];
        const sum = lastRow.reduce((p, c) => p + c.size, 0);
        if (sum >= 3) {
          prev[lastIndex + 1] = [curr];
        } else {
          prev[lastIndex].push(curr);
        }
        return prev;
      },
      [[]] as Array<Client[]>
    );
  }, [filteredItems]);

  const getLogo = (logo: string) => {
    return data.allFile.edges.find((e) => e.node.name === logo)?.node;
  };

  const getBackgroundImage = (backgroundImage: string) => {
    return data.allFile.edges.find((e) => e.node.name === backgroundImage)
      ?.node;
  };

  const renderContent = () => {
    return sortedItems.map((row, i) => {
      const key = "c" + row[0].title + i;
      if (clientsNormalized[row[0].title].size === 3) {
        const logo = getLogo(row[0].logo);
        const bg = getBackgroundImage(row[0].backgroundImage);
        return (
          <ClientBox
            {...row[0]}
            key={key}
            data-sal="fade"
            logo={logo}
            backgroundImage={bg}
          />
        );
      }

      return (
        <div key={"container" + i} className="container">
          <div className="row">
            {row.map((client, ii) => {
              const width = client.size === 2 ? 8 : 4;
              const logo = getLogo(client.logo);
              const bg = getBackgroundImage(client.backgroundImage);
              return (
                <Col
                  key={"client" + key + client.title + i * ii}
                  lg={width}
                  className="mb-3"
                  data-sal="fade"
                >
                  <ClientBox {...client} logo={logo} backgroundImage={bg} />
                </Col>
              );
            })}
          </div>
        </div>
      );
    });
  };

  const renderNotFound = () => (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">No clients found with this critiria</div>
      </div>
    </div>
  );

  return (
    <>
      <SEO title="Clients" />
      <div id="clients-page">
        <HeroSection />
        <section className="client-boxes pt-0">
          {sortedItems[0].length === 0 ? renderNotFound() : renderContent()}
        </section>
      </div>
    </>
  );
};

export default ClientsPage;

export const query = graphql`
  query ClientsPageQuery {
    allFile(filter: { relativeDirectory: { eq: "clients" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 360)
          }
          name
          publicURL
        }
      }
    }
  }
`;
