import {FETCH_PREFIX, NAME} from './constants';
import FETCH_FLOW from '../../constants';
let {ING, SUC, FAIL} = FETCH_FLOW;

const initState = {};
const videoDetail = (state = initState, action) => {
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
      result = {
        ...state,
        ...payload,
        ...status
      };
      break;
    case `${FETCH_PREFIX}_${FAIL}`:
      result = {
        ...state,
        err,
        ...status
      };
      break;
    case `${NAME}_CLEAR`:
      result = {};
      break;
    default:
      return state;
  }
  return result;
};

export default videoDetail;
