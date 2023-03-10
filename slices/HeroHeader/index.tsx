import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import type { Content } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';
import { styled } from '../../stitches.config';
import SpotifyCurrentlyPlaying from '../../containers/SpotifyCurrentlyPlaying';
import Box from '../../components/Box';

export type HeroHeaderProps = SliceComponentProps<Content.HeroHeaderSlice>;

const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  '@large': {
    '& h1': {
      fontSize: '3.5rem',
    },
    '& h4': {
      fontSize: '1.4rem',
    },
  },
});

const Wrapper = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 25,
  height: 300,
  borderBottom: '1px solid #242424',
});

const HeroHeader: React.FC<HeroHeaderProps> = ({ slice }) => {
  return (
    <Wrapper>
      <SpotifyCurrentlyPlaying />
      <Header className="sg">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </Header>
    </Wrapper>
  );
};

export default HeroHeader;
