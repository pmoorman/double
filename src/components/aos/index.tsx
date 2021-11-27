import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Aos = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return null;
};
