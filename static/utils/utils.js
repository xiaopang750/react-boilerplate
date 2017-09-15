import crypto from 'crypto';

let md5 = (str) => {
  let hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
};

let getGuid = () => {
  let guid;
  let cookie = document.cookie;
  let matchGuid = cookie.match(/wxguid=([^;]+)/);
  if (matchGuid && matchGuid[1]) {
    guid = matchGuid[1];
  }
  return guid;
};

module.exports = {
  md5,
  getGuid
};
