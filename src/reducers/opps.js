import { RECEIVE_OPPS } from '../actions/opps';

export default function opps (state=[], action) {
  switch(action.type) {
    case RECEIVE_OPPS :
      return state.concat(action.opps)
    default :
      return state
  }
}
