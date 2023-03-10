import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  media: {
    large: '(max-width: 1195px)',
    medium: '(max-width: 800px)',
    small: '(max-width: 550px)',
    extrasmall: '(max-width: 390px)',
  },
});
