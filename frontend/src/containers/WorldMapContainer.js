import { useEffect } from 'react';
// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { actions as locationActions } from '../redux/ducks/location';
import WorldMap from '../components/WorldMap';

const mockData = {
  loading: false,
  locations: [
    {
      code: 'HCMC',
      name: 'Ho Chi Minh City',
      latitude: 10.8231,
      longitude: 106.6297,
      region: 'Asia',
      theme: 'Vietnam Culture',
    },
    {
      code: 'TOKYO',
      name: 'Tokyo',
      latitude: 35.6762,
      longitude: 139.6503,
      region: 'Asia',
      theme: 'Anime',
    },
  ],
  error: '',
};

function WorldMapContainer() {
  /**
   * loading: bool,
   * locations: []
   * error: error.message
   */
  // FIXME: Remember to switch to real data on PRODUCTION!!!
  const data = useSelector((state) => state.location);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(locationActions.fetchLocations());
  // }, [dispatch]);
  return (
    <>
      <WorldMap locations={mockData.locations} />
    </>
  );
}

export default WorldMapContainer;
