import PropTypes from 'prop-types';

export const locationType = {
  location: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    region: PropTypes.string,
    theme: PropTypes.string,
  }),
};
