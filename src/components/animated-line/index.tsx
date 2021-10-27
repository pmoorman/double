import React, { FC } from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";
import { useInView } from "react-intersection-observer";

export interface AnimatedLineProps extends React.HTMLAttributes<HTMLElement> {}

export const AnimatedLine: FC<AnimatedLineProps> = ({
  children,
  className,
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const _class = cn(className, styles.animatedLine, {
    [styles.active]: inView,
  });

  return (
    <div ref={ref} {...rest} className={_class}>
      {children}
    </div>
  );
};
