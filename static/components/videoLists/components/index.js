import React from 'react';
import _ from 'lodash';
import Rhammer from 'react-hammerjs';
import ItemLists from './itemLists';
import {GET_LISTS_API} from '../constants';
import {RestoredScroll} from '../../scrollTo';
import Tip from '../../tip';
import {getGuid} from '../../../utils/utils';
import style from './index.styl';

let guid = getGuid();

const shouldWaterFall = (curr, sum, isLoading) => {
  let result = false;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let winH = document.body.clientHeight;
  let sumH = document.body.scrollHeight;
  if (winH + scrollTop >= sumH && curr <= sum && isLoading === false) {
    result = true;
  }
  return result;
};

const panHandler = (e, pageInfo, isLoading, getData) => {
  // TODO: how to limit direction by options
  let {page: {page, pageSize, total}} = pageInfo;
  let sum = Math.ceil(total / pageSize);
  let shouldGetNew = shouldWaterFall(page, sum, isLoading);
  console.log('shouldGetNew', shouldGetNew);
  if (!shouldGetNew) return;
  let newPage = _.parseInt(page) + 1;
  getData({
    url: GET_LISTS_API,
    qs: {
      mac: guid,
      page: newPage
    }
  });
};

const Videolist = ({lists, page, isLoading, cardId, getData}) => {
  return (
    <RestoredScroll>
      <div className={style.listWrap}>
        <Tip isLoading={isLoading} />
        <Rhammer onPan={(e) => { panHandler(e, page, isLoading, getData); }} >
          <ItemLists
            lists={lists}
            {...page}
            cardId={cardId}
            isLoading={isLoading}
          />
        </Rhammer>
      </div>
    </RestoredScroll>
  );
};

export default Videolist;
