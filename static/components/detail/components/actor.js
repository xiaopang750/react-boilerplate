import React from 'react';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import compose from 'recompose/compose';
import style from './index.styl';

let enhanced = compose(
  onlyUpdateForKeys(['id'])
);

const actor = ({id, name, imgUrl}) => {
  return (
    <dl data-id={id} className={style.actor} >
      <dt>
        <img src={imgUrl} alt={name} />
      </dt>
      <dd>{name}</dd>
    </dl>
  );
};

export default enhanced(actor);
