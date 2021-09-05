import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import LocationFrame from '../components/LocationFrame';
import { actions as locationActions } from '../redux/ducks/location';

function LocationContainer({ match }) {
  const data = useSelector((state) => state.location.locationDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationActions.fetchLocationDetails(match.params.code));
  }, [dispatch, match.params.code]);

  return (
    <>
      {data.loading || data.location === null ? (
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
        <LocationFrame location={data.location}>
          {' '}
          {console.log(data.loading)}
        </LocationFrame>
      )}
    </>
  );
}

LocationContainer.propTypes = {
  match: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default LocationContainer;
