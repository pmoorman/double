import React, { FC } from "react";
import cn from "classnames";
import { useInView } from "react-intersection-observer";

import * as styles from "./index.module.scss";

export interface ShadowBoxProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "1" | "2";
}

export const ShadowBox: FC<ShadowBoxProps> = ({
  variant = "1",
  children,
  className,
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-40% 0px -40% 0px",
  });

  const _className = cn(
    className,
    styles.shadowbox,
    styles[`variant${variant}`],
    { [styles.active]: inView }
  );

  return (
    <div ref={ref} {...rest} className={_className}>
      {children}
    </div>
  );
};
