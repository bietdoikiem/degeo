import React, { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

function OverlayLoading() {
  const [isCover, setIsCover] = useState('block');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCover('none');
    }, 7300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Box
        zIndex={49}
        position="absolute"
        bgColor="#000000"
        width="100vw"
        height="100vh"
        display={isCover}
      />
      <Spinner
        zIndex={50}
        size="xl"
        color="#3798a7"
        style={{
          margin: 'auto',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        display={isCover}
      />
    </>
  );
}

export default OverlayLoading;
