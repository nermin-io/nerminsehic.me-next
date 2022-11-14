import React from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { styled } from '../../stitches.config';
import Box from "../../components/Box";

export type TextSliderProps = SliceComponentProps<Content.TextSliderSlice>;

const Scrollable = styled(Box, {
  display: "flex",
  justifyContent: "space-between",
  padding: "30px 0",
  borderBottom: '1px solid #242424',
  overflowX: 'auto',
  '@large': {
    gap: 30
  }
});

const ScollableItem = styled(Box, {
  textTransform: "uppercase",
  fontSize: 30,
  fontWeight: 700,
  color: "#2F2F2F",
  cursor: 'default',
  userSelect: 'none',

  "&:hover": {
    color: "#3F3F3F",
  },
});

const TextSlider: React.FC<TextSliderProps> = ({ slice }) => (
  <Scrollable>
    {slice.items.map((item, idx) => (
      <ScollableItem key={`${item.text}-${idx}`}>{item.text}</ScollableItem>
    ))}
  </Scrollable>
);

export default TextSlider;
