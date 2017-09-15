import fetch from '../../action';
import {FETCH_PREFIX, NAME} from './constants';

const getVideoDetail = (opts = {}) => {
  return (dispatch) => {
    opts.keyName = FETCH_PREFIX;
    fetch(dispatch, opts);
  };
};

const clearDetail = () => {
  return (dispatch) => {
    dispatch({
      type: `${NAME}_CLEAR`
    });
  };
};

export {
  getVideoDetail,
  clearDetail
};
