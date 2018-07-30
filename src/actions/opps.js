export const RECEIVE_OPPS = 'RECEIVE_OPPS';
export const SAVE_OPP = 'SAVE_OPP';

export function receiveOpps (opps) {
  return {
    type: RECEIVE_OPPS,
    opps
  }
}

export function addOpp (opp) {
  return {
    type: SAVE_OPP,
    opp
  }
}
