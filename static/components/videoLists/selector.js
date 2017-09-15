import _ from 'lodash';
import {NAME} from './constants';

const selector = (props) => {
  let result;
  let vLists = _.get(props, NAME);
  let isLoading = _.get(vLists, 'isLoading');
  let FETCH_RESULT_TYPE = _.get(vLists, 'FETCH_RESULT_TYPE');
  let defaultVideoLists = {
    page: {},
    lists: [],
    isLoading,
    FETCH_RESULT_TYPE
  };
  if (!_.isEmpty(vLists)) {
    let page = _.pick(vLists, 'page');
    let lists = _.get(vLists, 'lists');
    let cardId = _.get(vLists, 'cardId');
    let cardName = _.get(vLists, 'cardName');
    let filterLists = _.map(lists, (item) => {
      let data = {};
      let {title, date, rating, duration, area, actor, type, id} = item;
      data.id = id;
      data.title = title;
      data.date = date;
      data.rating = _.divide(rating, 10);
      data.duration = `${_.divide(duration, 60)}分钟`;
      data.areas = _.map(area, 'name');
      data.actors = _.map(actor, 'name');
      data.types = _.map(type, 'name');
      data.url = _.get(item, 'imgUrl.url');
      return data;
    });
    result = {
      ...props,
      [NAME]: {
        page,
        cardId,
        cardName,
        lists: filterLists,
        isLoading,
        FETCH_RESULT_TYPE
      }
    };
  } else {
    result = {
      ...props,
      [NAME]: defaultVideoLists
    };
  }
  return result;
};

export default selector;
