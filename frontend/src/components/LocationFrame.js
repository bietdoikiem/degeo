import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@chakra-ui/react';
import { locationType } from '../prop-types';
import OverlayLoading from './OverlayLoading';
import OverlayButton from './OverlayButton';
import OverlaySpotify from './OverlaySpotify';

function LocationFrame({ location }) {
  return (
    <>
      <OverlayButton title={location.name} />
      <OverlayLoading />
      <OverlaySpotify />
      <Box position="relative" paddingTop="56.25%" pointerEvents="none">
        <ReactPlayer
          url={location.videolink[0]}
          muted
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            resize: 'none',
            minHeight: '100vh',
          }}
          controls={false}
          playing
          loop
          config={{
            youtube: {
              playerVars: {
                autoplay: 0,
                controls: 0,
                autohide: 1,
                rel: 0,
                fs: 0,
                modestbranding: 1,
                disablekb: 1,
                origin: window.location.host,
              },
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(),
                  controlsList: 'nodownload',
                },
              },
              attributes: {
                disablePictureInPicture: true,
                controlsList: 'nodownload',
              },
            },
          }}
        />
      </Box>
    </>
  );
}

LocationFrame.propTypes = locationType;

export default LocationFrame;
