import { MOVE_VIEWPORT } from './types';

/**
 *
 * @param {latitude, longitude, zoom} viewport
 * @returns {type, payload}
 */
export const moveViewport = (viewport) => ({
  type: MOVE_VIEWPORT,
  payload: viewport,
});
