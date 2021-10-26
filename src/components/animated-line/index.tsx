import React, { FC } from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";

export interface AnimatedLineProps extends React.HTMLAttributes<HTMLElement> {}

export const AnimatedLine: FC<AnimatedLineProps> = ({
  children,
  className,
  ...rest
}) => {
  const _class = cn(className, styles.animatedLine);

  return (
    <div {...rest} className={_class}>
      {children}
    </div>
  );
};
