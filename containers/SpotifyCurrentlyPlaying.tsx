import React from 'react';
import { styled } from '../stitches.config';
import SpotifyIcon from '../components/icons/SpotifyIcon';
import Box from '../components/Box';
import { useQuery } from 'react-query';
import axios from 'axios';

interface Props {}

const Flex = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

const SongContainer = styled(Box, {
  fontSize: 15,
  fontWeight: 450,
});

const SpotifySubtext = styled(Box, {
  fontSize: 15,
  color: '#6b7280',
});

const SpotifyCurrentlyPlaying: React.FC<Props> = () => {
  const { data: track, isLoading } = useQuery('current-song', async () => {
    const response = await axios.get('/api/currently-playing');
    return response.data;
  });

  const getCurrentTrack = () => {
    if(isLoading) return 'Loading player...';
    if(!track.playing) return 'Not Playing';
    return `${track.name} - ${track.artists}`;
  }


  return (
    <Flex>
      <SpotifyIcon height={20} width={20} />
      <SongContainer>{getCurrentTrack()}</SongContainer>
      <SpotifySubtext>— Spotify</SpotifySubtext>
    </Flex>
  );
};

export default SpotifyCurrentlyPlaying;
