import React, { FC } from "react";
import { GatsbyImageProps, GatsbyImage, getImage } from "gatsby-plugin-image";

export interface ClientImageProps extends Omit<GatsbyImageProps, "image"> {
  item: { childImageSharp?: any; publicURL: string };
}

export const ClientImage: FC<ClientImageProps> = ({ item, ...rest }) => {
  if (!item) return null;

  if (item.childImageSharp) {
    return (
      <GatsbyImage
        {...rest}
        image={getImage(item.childImageSharp)}
        objectFit="contain"
        alt=""
      />
    );
  }

  return <img src={item.publicURL} alt="" {...rest} />;
};
