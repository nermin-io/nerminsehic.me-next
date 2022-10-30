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
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </Header>
  );
};

export default HeroHeader;
