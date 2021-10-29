import { StaticImage } from "gatsby-plugin-image";
import React, { FC, useEffect } from "react";

export interface WistiaVideoProps extends React.HTMLAttributes<HTMLElement> {
  videoId: string;
}

export const WistiaVideo: FC<WistiaVideoProps> = ({ videoId, ...rest }) => {
  useEffect(() => {
    const scriptId = `wistia_script_${videoId}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
      script.async = true;
      document.body.appendChild(script);
    }
    if (!document.getElementById("wistia_script")) {
      const script = document.createElement("script");
      script.id = "wistia_script";
      script.type = "text/javascript";
      script.src = "https://fast.wistia.com/assets/external/E-v1.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [videoId]);

  return (
    <div {...rest}>
      <div
        className="wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 200ms",
                width: "100%",
              }}
            >
              <StaticImage
                alt=""
                src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                style={{
                  filter: "blur(5px)",
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
