import React, { useEffect, useRef } from 'react';
import * as mapboxgl from 'mapbox-gl';
import { Box } from '@chakra-ui/react';
// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { actions as locationActions } from '../redux/ducks/location';

// Declare mapboxgl accessibility
mapboxgl.accessToken = process.env.REACT_APP_MAPGL_PUBLIC_TOKEN;

const mockData = {
  loading: false,
  locations: [
    {
      name: 'Tokyo',
      lat: 35.6762,
      long: 139.6503,
    },
  ],
  error: '',
};

function WorldMap() {
  /**
   * loading: bool,
   * locations: []
   * error: error.message
   */
  const data = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    try {
      dispatch(locationActions.fetchLocations());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  // TODO: Continue to do the MapBoxGL
  // Invoke MapBoxGL map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mockData.locations[0].long, mockData.locations[0].lat],
      zoom: 8,
    });
  });

  return (
    <>
      <Box ref={mapContainer} h="100vh" />
    </>
  );
}

export default WorldMap;
