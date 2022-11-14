import React from "react";
import { PrismicRichText } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { styled } from '../../stitches.config';

export type HeroHeaderProps = SliceComponentProps<Content.HeroHeaderSlice>;

const Header = styled("header", {
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "1px solid #242424",
  '@large': {
    '& h1': {
      fontSize: '3.5rem'
    },
    '& h4': {
      fontSize: '1.4rem'
    }
  }
});

const HeroHeader: React.FC<HeroHeaderProps> = ({ slice }) => {
  return (
    <Header className="sg">
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </Header>
  );
};

export default HeroHeader;
