import React from "react";
import { PrismicRichText } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { styled } from "@stitches/react";

export type HeroHeaderProps = SliceComponentProps<Content.HeroHeaderSlice>;

const Header = styled("header", {
  height: 300,
  fontFamily: "Space Grotesk, Inter, sans-serif",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "1px solid #242424",
  
});
const HeroHeader: React.FC<HeroHeaderProps> = ({ slice }) => {
  return (
    <Header>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </Header>
  );
};

export default HeroHeader;
