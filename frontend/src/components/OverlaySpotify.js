import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: 256,
  height: 200,
};
const view = 'list'; // or 'coverart'
const theme = 'white'; // or 'white'

function OverlaySpotify() {
  // eslint-disable-next-line no-underscore-dangle

  return (
    <>
      <Box
        zIndex={50}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: 20,
          marginRight: 10,
        }}
      >
        <SpotifyPlayer
          uri="spotify:album:5meeIKPsm1qLNWTrGMosVp"
          size="compact"
          view={view}
          theme={theme}
        />
      </Box>
    </>
  );
}

export default OverlaySpotify;
