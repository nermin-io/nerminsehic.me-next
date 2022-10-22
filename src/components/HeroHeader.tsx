import React from 'react';
import Heading from './Heading';
import TextHighlight from './TextHighlight';
import { styled } from '@stitches/react';

interface Props {}

const Header = styled('header', {
    height: 300,
    fontFamily: 'Space Grotesk, Inter, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: '1px solid #242424'
});

const HeroHeader: React.FC<Props> = () => {
    return (
        <Header>
            <Heading as='h1' weight={700}>Nermin Sehic</Heading>
            <Heading as='h4' weight={400}>
                <TextHighlight>Developer</TextHighlight> based in Melbourne, Australia
            </Heading>
        </Header>
    );
}

export default HeroHeader;