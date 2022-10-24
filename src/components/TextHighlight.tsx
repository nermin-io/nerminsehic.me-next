import { styled } from '@stitches/react';

const TextHighlight = styled('span', {
    variants: {
        variant: {
            green: {
                color: '#DFF962'
            },
            subtle: {
                color: '#6A6A6A'
            }
        }
    },
    defaultVariants: {
        variant: 'green'
    }
});

export default TextHighlight;