import React from 'react';
import StarLists from './starLists';
import style from './index.styl';
import doubanIcon from '../assets/douban.png';

const ItemRating = ({rating}) => {
  return (
    <div className={`${style.mid} rel clearfix`}>
      <div className={`${style.douban} fl`}>
        <img src={doubanIcon} alt="豆瓣评分" />
      </div>
      <div className={`${style.starLists} fl`}>
        <StarLists rating={rating} />
      </div>
      <span className={style.ratingText}>{rating}</span>
    </div>
  );
};


export default ItemRating;
