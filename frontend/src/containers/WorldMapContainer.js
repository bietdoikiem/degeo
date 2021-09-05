import { useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { actions as locationActions } from '../redux/ducks/location';
import WorldMap from '../components/WorldMap';

function WorldMapContainer() {
  /**
   * loading: bool,
   * locations: []
   * error: error.message
   */
  // FIXME: Remember to switch to real data on PRODUCTION!!!
  const data = useSelector((state) => state.location.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationActions.fetchLocations());
  }, [dispatch]);
  return (
    <>
      {data.loading ? (
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
        />
      ) : (
        // {console.log(data.loading)}
        <WorldMap locations={data.locations} />
      )}
    </>
  );
}

export default WorldMapContainer;
