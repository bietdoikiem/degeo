import { MOVE_VIEWPORT } from './types';

const initialState = {
  latitude: 10.8231,
  longitude: 106.6297,
  zoom: 2,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_VIEWPORT:
      return action.payload;
    default:
      return state;
  }
};

export default reducers;
