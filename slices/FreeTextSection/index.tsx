import React from "react";
import { PrismicRichText } from "@prismicio/react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import Section from "../../src/components/Section";
export type FreeTextSectionProps = SliceComponentProps<Content.FreeTextSectionSlice>;


const FreeTextSection: React.FC<FreeTextSectionProps> = ({ slice }) => (
  <Section>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
  </Section>
)

export default FreeTextSection