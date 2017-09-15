import fetch from '../../action';
import {FETCH_PREFIX} from './constants';

const getVideoLists = (opts = {}) => {
  return (dispatch) => {
    opts.keyName = FETCH_PREFIX;
    fetch(dispatch, opts);
  };
};

export default getVideoLists;
