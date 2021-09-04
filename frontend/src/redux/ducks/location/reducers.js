import { combineReducers } from 'redux';
import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATION_DETAILS_REQUEST,
  FETCH_LOCATION_DETAILS_SUCCESS,
  FETCH_LOCATION_DETAILS_FAILURE,
} from './types';

const initialState = {
  loading: false,
  locations: [],
  error: '',
};

const initialLocationState = {
  loading: false,
  location: null,
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

const locationDetailsReducer = (state = initialLocationState, action) => {
  switch (action.type) {
    case FETCH_LOCATION_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOCATION_DETAILS_SUCCESS:
      return {
        location: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_LOCATION_DETAILS_FAILURE:
      return {
        loading: false,
        location: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const locationReducers = combineReducers({
  locationDetails: locationReducer,
  locations: locationDetailsReducer,
});

export default locationReducers;
