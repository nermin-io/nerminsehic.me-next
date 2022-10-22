import { styled } from '@stitches/react';

const TextHighlight = styled('span', {
    variants: {
        variant: {
            green: {
                color: '#DFF962'
            }
        }
    },
    defaultVariants: {
        variant: 'green'
    }
});

export default TextHighlight;