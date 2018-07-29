export const RECEIVE_OPPS = 'RECEIVE_OPPS';

export function receiveOpps (opps) {
  return {
    type: RECEIVE_OPPS,
    opps
  }
}
