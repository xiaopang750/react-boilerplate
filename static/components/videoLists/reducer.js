import {FETCH_PREFIX} from './constants';
import FETCH_FLOW from '../../constants';
let {ING, SUC, FAIL} = FETCH_FLOW;

const initState = {};
const videoLists = (state = initState, action) => {
  // console.log(action.payload.videolist_set);
  let result;
  let {status = {}} = action;
  let {payload = {}, err} = action;
  switch (action.type) {
    case `${FETCH_PREFIX}_${ING}`:
      result = {
        ...state,
        ...status
      };
      break;
    case `${FETCH_PREFIX}_${SUC}`:
      state.lists = state.lists || [];
      action.payload.lists = state.lists.concat(action.payload.lists);
      result = {
        ...state,
        ...payload,
        ...status
      };
      break;
    case `${FETCH_PREFIX}_${FAIL}`:
      result = {
        ...state,
        ...status,
        err
      };
      break;
    default:
      return state;
  }
  return result;
};

export default videoLists;
