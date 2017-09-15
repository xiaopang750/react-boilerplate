import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import Item from './item';
import {pbCardShow} from '../../../utils/pb';
import style from './index.styl';

let enhanced = compose(
  lifecycle({
    componentDidUpdate() {
      // send pb
      let {lists, page: {page, pageSize} = {}, isLoading, cardId} = this.props;
      if (lists.length && isLoading === false) {
        let pbList = _.chain(lists)
          .map((item) => {
            item.score = item.rating;
            return item;
          })
          .map(item => _.pick(item, ['id', 'score']))
          .value();
        let nowPbList = _.slice(pbList, (page - 1) * pageSize);
        pbCardShow({list: nowPbList, cardId});
      }
    }
  })
);

const itemLists = ({lists, cardId}) => {
  return (
    <div className={style.listInner}>
      {
        lists.map((item) => {
          let {id} = item;
          return (
            <Link to={`/detail/${id}?cardId=${cardId}`} key={id}>
              <Item {...item} cardId={cardId} />
            </Link>
          );
        })
      }
    </div>
  );
};

export default enhanced(itemLists);
