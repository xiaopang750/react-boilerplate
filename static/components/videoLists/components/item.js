import React from 'react';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import ItemFaceImg from './itemFaceImg';
import ItemTitle from './itemTitle';
import ItemPlay from './itemPlay';
import ItemRating from './itemRating';
import ItemInfo from './itemInfo';
import {pbClick} from '../../../utils/pb';
import style from './index.styl';

let enhanced = compose(
  withHandlers({
    pb: props => (ev) => {
      let {cardId, id, rating} = props;
      pbClick({
        cardId,
        videoInfo: {
          id,
          score: rating
        }
      });
    }
  }),
  onlyUpdateForKeys(['id'])
);

const Item = ({id, url, title, date, rating, areas, types, duration, actors, pb}) => {
  return (
    <li data-id={id} className={`clearfix ${style.item}`} onClick={pb}>
      <dl>
        <dt>
          <ItemFaceImg
            url={url}
            title={title}
          />
        </dt>
        <dd>
          <div className={`${style.top} rel`}>
            <ItemTitle title={title} />
            <ItemPlay />
          </div>
          <ItemRating rating={rating} />
          <ItemInfo
            date={date}
            areas={areas}
            types={types}
            duration={duration}
            actors={actors}
          />
        </dd>
      </dl>
    </li>
  );
};

export default enhanced(Item);
