import React from 'react';
import style from './index.styl';

const ItemTitle = ({title}) => {
  return (
    <div className={style.title}>{title}</div>
  );
};

export default ItemTitle;
