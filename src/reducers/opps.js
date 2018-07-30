import { RECEIVE_OPPS, SAVE_OPP } from '../actions/opps';

export default function opps (state=[], action) {
  switch(action.type) {
    case RECEIVE_OPPS :
      return state.concat(action.opps)
    case SAVE_OPP :
      return state.concat(action.opp)
    default :
      return state
  }
}
