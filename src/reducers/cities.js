import { RECEIVE_CITIES } from '../actions/cities';

export default function cities (state=[], action) {
  switch(action.type) {
    case RECEIVE_CITIES :
      return state.concat(action.cities)
    default :
      return state
  }
}
