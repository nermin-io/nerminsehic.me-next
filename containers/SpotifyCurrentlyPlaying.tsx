import React from "react";
import { styled } from "../stitches.config";
import SpotifyIcon from "../components/icons/SpotifyIcon";
import Box from "../components/Box";

interface Props {}

const Flex = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

const SongContainer = styled(Box, {
  fontSize: 15,
  fontWeight: 450
});

const SpotifySubtext = styled(Box, {
  fontSize: 15,
  color: '#6b7280'
});

const SpotifyCurrentlyPlaying: React.FC<Props> = () => {
  return (
    <Flex>
      <SpotifyIcon height={20} width={20}/>
      <SongContainer>
        Not Playing
      </SongContainer>
      <SpotifySubtext>
        – Spotify
      </SpotifySubtext>
    </Flex>
  );
};

export default SpotifyCurrentlyPlaying;
