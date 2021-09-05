import PropTypes from 'prop-types';

export const locationType = {
  location: PropTypes.shape({
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
  }),
};
