export const RECEIVE_CITIES = 'RECEIVE_CITIES';

export function receiveCities (cities) {
  return {
    type: RECEIVE_CITIES,
    cities
  }
}
