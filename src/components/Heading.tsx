import React from 'react';
import { styled } from '@stitches/react';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
    as: HeadingType;
    weight?: number;
    children: React.ReactNode | React.ReactNode[];
}

const H1 = styled('h1', {
    all: 'unset',
    fontSize: '4.209rem'
});

const H2 = styled('h2', {
    all: 'unset',
    fontSize: '3.157rem'
});

const H3 = styled('h3', {
    all: 'unset',
    fontSize: '2.369rem'
});

const H4 = styled('h4', {
    all: 'unset',
    fontSize: '1.666rem'
});

const H5 = styled('h5', {
    all: 'unset',
    fontSize: '1.333rem'
});

const H6 = styled('h6', {
    all: 'unset',
    fontSize: '1rem'
});

const Heading: React.FC<Props> = ({ as, children, weight = 500 }) => {
    switch(as) {
        case 'h1': return <H1 css={{fontWeight: weight}}>{children}</H1>;
        case 'h2': return <H2 css={{fontWeight: weight}}>{children}</H2>;
        case 'h3': return <H3 css={{fontWeight: weight}}>{children}</H3>;
        case 'h4': return <H4 css={{fontWeight: weight}}>{children}</H4>;
        case 'h5': return <H5 css={{fontWeight: weight}}>{children}</H5>;
        case 'h6': return <H6 css={{fontWeight: weight}}>{children}</H6>;
    }
};

export default Heading;

