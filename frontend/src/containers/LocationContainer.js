import React from 'react';
import PropTypes from 'prop-types';

function LocationContainer({ match }) {
  return (
    <>
      <div>Location: {match.params.code}</div>
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
