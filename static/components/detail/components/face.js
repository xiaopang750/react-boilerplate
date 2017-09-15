import React from 'react';
import style from './index.styl';

const face = ({imgUrl}) => {
  return (
    <div className={style.face}>
      <img src={imgUrl} />
    </div>
  );
};

export default face;
