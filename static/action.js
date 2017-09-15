import request from './utils/fetch';
import COMMON from './constants';

const {ING, SUC, FAIL} = COMMON;
const fetchAction = (dispatch, opts = {}) => {
  let {success: selfSuc = () => {}, error: selfError = () => {}, keyName } = opts;
  opts.success = (data) => {
    let result = selfSuc();
    dispatch({
      ...result,
      type: `${keyName}_${SUC}`,
      payload: data,
      status: {
        isLoading: false,
        FETCH_RESULT_TYPE: 'success'
      }
    });
  };
  opts.error = (err) => {
    let result = selfError();
    dispatch({
      ...result,
      type: `${keyName}_${FAIL}`,
      err,
      status: {
        isLoading: false,
        FETCH_RESULT_TYPE: 'fail'
      }
    });
  };
  dispatch({
    type: `${keyName}_${ING}`,
    payload: request(opts),
    status: {
      isLoading: true
    }
  });
};

export default fetchAction;
