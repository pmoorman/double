import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import cn from "classnames";

import * as styles from "./index.module.scss";

export const DoubleLogo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  const _foreClassName = cn(styles.fore, {
    [styles.activeFore]: inView,
  });

  const _backClassName = cn(styles.back, {
    [styles.activeBack]: inView,
  });

  return (
    <div ref={ref} className={styles.animatedLogo}>
      <StaticImage
        alt=""
        className={_backClassName}
        src="./double_logo_back.png"
        width={120}
      />
      <StaticImage
        alt=""
        className={_foreClassName}
        src="./double_logo_fore.png"
        width={120}
      />
    </div>
  );
};
