import _ from 'lodash';
import {NAME} from './constants';

const selector = (props) => {
  let matchCardId = location.href.match(/cardId=([^&]+)/);
  let cardId = matchCardId ? matchCardId[1] : '';
  let {match: {params: {id}}} = props;
  // should pick
  // id actor area type duration imgUrl intro title enTitle
  let result;
  let detail = _.get(props, NAME);
  let data = {};
  data.id = id || _.get(detail, 'id');
  data.actor = _.map(_.get(detail, 'actor'), (item) => {
    let newData = _.clone(item);
    newData.imgUrl = _.get(item, 'squareImgUrl.url') || _.get(item, 'imgUrl.url');
    return newData;
  });
  data.type = _.map(detail.type, 'name').join(' ');
  data.area = _.map(detail.area, 'name').join(' ');
  data.duration = `${_.divide(detail.duration, 60)}分钟`;
  data.imgUrl = _.get(detail, 'imgUrl.url');
  data.intro = _.get(detail, 'intro');
  data.title = _.get(detail, 'title');
  data.enTitle = _.get(detail, 'enTitle');
  data.playUrl = _.get(detail, 'sitePerEpisode[1][0].siteLink');
  data.score = _.parseInt(_.get(detail, 'rating')) / 10;
  data.isLoading = _.get(detail, 'isLoading');
  data.FETCH_RESULT_TYPE = _.get(detail, 'FETCH_RESULT_TYPE');
  data.cardId = cardId;
  result = {
    ...props,
    [NAME]: {
      ...data
    },
  };
  return result;
};

export default selector;
