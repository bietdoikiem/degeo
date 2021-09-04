import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { actions as WorldMapActions } from '../redux/ducks/worldmap';

function WorldMap({ locations }) {
  const currentViewport = useSelector((state) => state.worldmap);
  const dispatch = useDispatch();

  const onViewportCHange = (viewport) => {
    dispatch(WorldMapActions.moveViewport(viewport));
  };

  return (
    <>
      <ReactMapGL
								mapboxApiAccessToken="pk.eyJ1IjoiYmlldGRvaWtpZW0iLCJhIjoiY2tzY29hb2FoMGlvYjJvb2FqeWdyd2Y2cyJ9.MozD0qknoMddWPHISkhdXA"
        latitude={currentViewport.latitude}
        longitude={currentViewport.longitude}
        zoom={currentViewport.zoom}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/bietdoikiem/ckt5j3dq908rz17o0zg4jr0fc"
        onViewportChange={onViewportCHange}
        transitionDuration={20}
        transitionInterpolator={new FlyToInterpolator()}
      >
        {locations.map((location) => (
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetTop={-10}
          >
            <Box
              as="div"
              className="pin bounce"
              onClick={() => console.log(`Hello ${location.name}`)}
            />
            <Box as="div" className="pulse" />
          </Marker>
        ))}
      </ReactMapGL>
    </>
  );
}

WorldMap.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      long: PropTypes.number.isRequired,
    })
  ),
};

export default WorldMap;
