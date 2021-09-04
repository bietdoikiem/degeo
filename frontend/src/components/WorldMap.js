import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { actions as WorldMapActions } from '../redux/ducks/worldmap';

function WorldMap({ locations }) {
  // Redux components
  const currentViewport = useSelector((state) => state.worldmap);
  const dispatch = useDispatch();

  // React-router-dom components
  const history = useHistory();

  const onViewportChange = useCallback(
    (viewport) => {
      dispatch(WorldMapActions.moveViewport(viewport));
    },
    [dispatch]
  );

  const navigateToLocationCode = (code) => {
    console.log('Triggered');
    history.push(`/${code}`);
  };

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
            latitude={location.latitude}
            longitude={location.longitude}
            offsetTop={-10}
          >
            <Box
              as="div"
              className="pin bounce"
              onClick={() => console.log(location.code)}
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
