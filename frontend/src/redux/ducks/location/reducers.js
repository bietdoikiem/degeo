import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_REQUEST,
} from './types';

const initialState = {
  loading: false,
  locations: [],
  error: '',
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        locations: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        loading: false,
        locations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
