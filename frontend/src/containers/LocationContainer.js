import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LocationFrame from '../components/LocationFrame';
import { actions as locationActions } from '../redux/ducks/location';

const mockLocation = {
  code: 'HCMC',
  name: 'Ho Chi Minh City',
  latitude: 10.8231,
  longitude: 106.6297,
  region: 'Asia',
  theme: 'Vietnam Culture',
  videoURL: 'https://www.youtube.com/watch?v=qYQiCYtOAvo',
};

function LocationContainer({ match }) {
  // FIXME: Remember to SWITCH on production!
  const location = useSelector((state) => state.location.locationDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationActions.fetchLocationDetails);
  }, [dispatch]);

  return (
    <>
      <LocationFrame location={mockLocation} />
    </>
  );
}

LocationContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default LocationContainer;
