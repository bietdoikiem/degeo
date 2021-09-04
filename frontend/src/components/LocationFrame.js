import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@chakra-ui/react';
import { locationType } from '../prop-types';

function LocationFrame({ location }) {
  return (
    <>
      <Box>Hello {location.name}</Box>
    </>
  );
}

LocationFrame.propTypes = locationType;

export default LocationFrame;
