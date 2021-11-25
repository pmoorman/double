import React, { FC } from "react";
import {
  Parallax as ScrollParallax,
  ParallaxProps as ScrollParallaxProps,
} from "react-scroll-parallax";

export interface ParallaxProps extends ScrollParallaxProps {}

export const Parallax: FC<ParallaxProps> = ({ y, children, ...props }) => {
  const _y = y || [30, -30];
  return (
    <ScrollParallax y={_y} {...props}>
      {children}
    </ScrollParallax>
  );
};
