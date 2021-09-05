import { MOVE_VIEWPORT } from './types';

const initialState = {
  latitude: 28.6139,
  longitude: 77.209,
  zoom: 1.7,
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
