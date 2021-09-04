import axios from 'axios';
import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_REQUEST,
} from './types';

export const fetchLocationsRequest = () => ({
  type: FETCH_LOCATIONS_REQUEST,
});

export const fetchLocationsSuccess = (locations) => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload: locations,
});

export const fetchLocationsFailure = (error) => ({
  type: FETCH_LOCATIONS_FAILURE,
  payload: error,
});

export const fetchLocations = () => async (dispatch) => {
  dispatch(fetchLocationsRequest());
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/locations`
    );
    const locations = result.data;
    dispatch(fetchLocationsSuccess(locations));
  } catch (error) {
    dispatch(fetchLocationsFailure(error.message));
  }
};
