import { useController } from "react-scroll-parallax";
import { useLayoutEffect } from "react";

export const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener("load", handler);

    const resizeObserver = new ResizeObserver(handler);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("load", handler);
      resizeObserver.unobserve(document.body);
    };
  }, [parallaxController]);

  return null;
};

export default ParallaxCache;
