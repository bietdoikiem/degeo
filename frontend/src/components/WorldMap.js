import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { actions as WorldMapActions } from '../redux/ducks/worldmap';

function WorldMap({ locations }) {
  // Redux components
  const currentViewport = useSelector((state) => state.worldmap);
  const dispatch = useDispatch();

  const onViewportChange = useCallback(
    (viewport) => {
      dispatch(WorldMapActions.moveViewport(viewport));
    },
    [dispatch]
  );

  return (
    <>
      <ReactMapGL
        latitude={currentViewport.latitude}
        longitude={currentViewport.longitude}
        zoom={currentViewport.zoom}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/bietdoikiem/ckt5j3dq908rz17o0zg4jr0fc"
        onViewportChange={onViewportChange}
        transitionDuration={20}
        transitionInterpolator={new FlyToInterpolator()}
      >
        {locations.map((location) => (
          <Marker
            key={location.name}
            latitude={location.latitude}
            longitude={location.longitude}
            offsetTop={-10}
          >
            <Link to={`/locations/${location.code}`}>
              <Box as="div" className="pin bounce" />
              <Box as="div" className="pulse" />
            </Link>
          </Marker>
        ))}
      </ReactMapGL>
    </>
  );
}

WorldMap.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      subthemes: PropTypes.arrayOf(PropTypes.string.isRequired),
      theme: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      videolink: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
};

export default WorldMap;
