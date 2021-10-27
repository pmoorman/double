import React, { FC } from "react";
import cn from "classnames";

import { Link, LinkProps } from "../link";
import * as styles from "./index.module.scss";

export interface ArrowButtonProps extends LinkProps {
  variant?: "1" | "2" | "3" | "4" | "5" | "6";
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  variant = "1",
  children,
  ...rest
}) => {
  const _className = cn(styles.arrowBtn, styles[`variant${variant}`]);

  return (
    <Link {...rest} className={_className}>
      {children}
    </Link>
  );
};
