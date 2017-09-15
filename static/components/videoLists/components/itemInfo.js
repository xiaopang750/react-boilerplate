import React from 'react';
import style from './index.styl';

const AreaItem = ({area}) => {
  return (
    <span>{area}</span>
  );
};

const TypesItem = ({type}) => {
  return (
    <span>
      <span>{type}</span>
      <span> </span>
    </span>
  );
};

const ActorItem = ({actor}) => {
  return (
    <span>
      <span>{actor}</span>
      <span> / </span>
    </span>
  );
};

const ItemInfo = ({date, areas, types, duration, actors}) => {
  return (
    <div className={style.bottom}>
      <p className={style.topInfo}>
        <span>{date}</span>
        <span> / </span>
        <span>
          {areas.map((area, index) => (<AreaItem area={area} key={index} />))}
        </span>
        <span> / </span>
        <span>
          {types.map((type, index) => (<TypesItem type={type} key={index} />))}
        </span>
        <span> / </span>
        <span>{duration}</span>
      </p>
      <p>
        <span>演员: </span>
        {actors.map((actor, index) => (<ActorItem actor={actor} key={index} />))}
      </p>
    </div>
  );
};

export default ItemInfo;
