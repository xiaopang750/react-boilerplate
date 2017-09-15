import superagent from 'superagent';

const request = (opts) => {
  let {qs = {}, method = 'GET', url, success = () => {}, error = () => {}} = opts;
  superagent(method, url)
    .query(qs)
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        success(res.body);
      }
    });
};

export default request;
