import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { Link } from "@app/components";

export interface NavigationProps {
  index: number;
  background?: "dark" | "light";
}

export const Navigation: FC<NavigationProps> = ({
  index,
  background = "light",
}) => {
  const items = [
    {
      id: "performance",
      title: "Performance",
      icon: (
        <StaticImage
          className={styles.image}
          alt=""
          src="./icon-performance.svg"
        />
      ),
    },
    {
      id: "funnels",
      title: "Funnels & creative",
      icon: (
        <StaticImage className={styles.image} alt="" src="./icon-funnels.svg" />
      ),
    },
    {
      id: "marketing",
      title: "Product marketing",
      icon: (
        <StaticImage
          className={styles.image}
          alt=""
          src="./icon-marketing.svg"
        />
      ),
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      icon: (
        <StaticImage
          className={styles.image}
          alt=""
          src="./icon-infrastructure.svg"
        />
      ),
    },
  ];

  const renderItem = (
    item: { id: string; icon: any; title: string },
    i: number
  ) => {
    const itemClass = cn(styles.navItem, {
      [styles.activeItem]: index === i,
      [styles.dark]: background === "dark",
    });

    return (
      <Link key={"nav" + i} to={`#${item.id}`} className={itemClass}>
        {item.icon} {item.title}
      </Link>
    );
  };

  return (
    <div className="services-nav d-none d-lg-block">
      {items.map(renderItem)}
    </div>
  );
};
