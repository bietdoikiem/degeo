import axios from 'axios';
import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATION_DETAILS_REQUEST,
  FETCH_LOCATION_DETAILS_SUCCESS,
  FETCH_LOCATION_DETAILS_FAILURE,
} from './types';

// -------------- FETCH ALL LOCATIONS -------------- //
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

// -------------- FETCH LOCATION DETAILS -------------- //
export const fetchLocationDetailsRequest = () => ({
  type: FETCH_LOCATION_DETAILS_REQUEST,
});

export const fetchLocationDetailsSuccess = (location) => ({
  type: FETCH_LOCATION_DETAILS_SUCCESS,
  payload: location,
});

export const fetchLocationDetailsFailure = (error) => ({
  type: FETCH_LOCATION_DETAILS_FAILURE,
  payload: error,
});

export const fetchLocationDetails = (code) => async (dispatch) => {
  dispatch(fetchLocationDetailsRequest());
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/locations/${code}`
    );
    const location = result.data;
    dispatch(fetchLocationDetailsSuccess(location));
  } catch (error) {
    dispatch(fetchLocationDetailsFailure(error.message));
  }
};
