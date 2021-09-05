import React from 'react';
import getEmoji from 'get-random-emoji';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

function OverlayButton({ title, width, height, style }) {
  return (
    <>
      <Box
        bgColor="#fff"
        w={240}
        h={54}
        zIndex={60}
        style={{
          margin: 'auto',
          position: 'absolute',
          top: 0,
          left: 50,
          bottom: 850,
          right: 0,
          borderRadius: '28px 28px',
        }}
      >
        <Box margin="0 auto" width="fit-content" pt="15px">
          <Box as="span" color="#1E425E" fontWeight={800}>
            {' '}
            {title} {getEmoji()}{' '}
          </Box>
        </Box>
      </Box>
    </>
  );
}

OverlayButton.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default OverlayButton;
