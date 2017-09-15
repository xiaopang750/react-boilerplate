import React from 'react';
import style from './index.styl';

const info = ({title, enTitle, area, type, duration}) => {
  return (
    <div className={style.info}>
      <h1>{title}</h1>
      <h2>{enTitle}</h2>
      <div className={style.detail}>
        <span>{area}</span>
        <span> | </span>
        <span>{type}</span>
        <span> | </span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default info;
