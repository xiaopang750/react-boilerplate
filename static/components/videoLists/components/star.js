import React from 'react';
import style from './index.styl';

const Star = ({styleName}) => {
  return (
    <li className={`${style.star} ${style[styleName]}`} />
  );
};

export default Star;
