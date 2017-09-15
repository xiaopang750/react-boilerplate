import React from 'react';
import style from './index.styl';

const bg = ({imgUrl}) => {
  return (
    <div className={style.bg}>
      <div className={style.cover} />
      <img src={imgUrl} />
    </div>
  );
};

export default bg;
