import _ from 'lodash';
import pb from './firedata';
import {getGuid} from './utils';

const getCommonParams = () => {
  const guid = getGuid();
  return {
    guid,
    from: 'wishing'
  };
};

const pbCardShow = ({list = {}, cardId}) => {
  // list [{id: '', scroe}]
  let commonParams = getCommonParams();
  let params = {
    list,
    cardId,
    pn: '1'
  };
  let data = _.extend(params, commonParams);
  pb.event('listDisplay', 'movieVerticalCard', data);
};

const pbDetailShow = ({cardId, videoInfo}) => {
  let commonParams = getCommonParams();
  let params = {
    cardId,
    videoInfo
  };
  let data = _.extend(params, commonParams);
  pb.event('display', 'detail', data);
};

const pbClick = ({cardId, videoInfo}) => {
  let commonParams = getCommonParams();
  let params = {
    cardId,
    videoInfo
  };
  let data = _.extend(params, commonParams);
  pb.event('listClick', 'movieVerticalCard', data);
};

export {
  pbCardShow,
  pbDetailShow,
  pbClick
};
