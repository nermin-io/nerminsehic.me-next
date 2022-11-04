import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
    media: {
        large: '(max-width: 1195px)',
        medium: '(max-width: 800px)',
        small: '(max-width: 550px)'
    }
});