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
  fontSize: 14,
  display: 'flex',
  flexDirection: 'column'
});

const Song = styled(Box, {
  fontWeight: 500
});

const Artists = styled(Box, {
  color: '#6b7280'
});

const SpotifySubtext = styled(Box, {
  fontSize: 14,
  fontWeight: 400,
  color: '#6b7280',
});

const Message = styled(Box, {
  fontWeight: 500,
  display: 'flex',
  gap: 5
});

const SpotifyCurrentlyPlaying: React.FC<Props> = () => {
  const { data: track, isLoading } = useQuery('current-song', async () => {
    const response = await axios.get('/api/currently-playing');
    return response.data;
  });

  const renderCurrentTrack = () => {
    if(isLoading) return <Message>Loading Player...</Message>
    if(!track.playing) return <Message>Not Playing <SpotifySubtext>— Spotify</SpotifySubtext></Message>
    return (
      <SongContainer>
        <Song>{track.name}</Song>
        <Artists>{track.artists}</Artists>
      </SongContainer>
    );
  }


  return (
    <Flex>
      <SpotifyIcon height={30} width={30} />
      { renderCurrentTrack() }
      {/* <SpotifySubtext>— Spotify</SpotifySubtext> */}
    </Flex>
  );
};

export default SpotifyCurrentlyPlaying;
