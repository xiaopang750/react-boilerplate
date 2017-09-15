import React, {Component} from 'react';
import Actor from './actor';
import style from './index.styl';

// TODO: 研究怎么让纯函数组件拿到dom元素

const setWrapWidth = (oWrap, oUnit, sum) => {
  let w = oUnit.offsetWidth;
  let sumWidth = w * sum;
  oWrap.style.width = `${sumWidth}px`;
};

const LI_UNIT = 2.067;
const LI_MR = 0.533;
const UNIT = LI_UNIT + LI_MR;

const liStyle = {
  width: `${LI_UNIT}rem`,
  marginRight: `${LI_MR}rem`
};

const actors = ({actor}) => {
  let sum = actor.length;
  let width = `${UNIT * sum}rem`;
  return (
    <div className={style.actors} >
      <h3>演员人员</h3>
      <div className={style.wrap}>
        <ul className="clearfix" style={{width}}>
          {
            actor.map((item) => {
              return (
                <li key={item.id} style={liStyle}>
                  <Actor
                    {...item}
                    sumItem={actor.length}
                    setWrapWidth={setWrapWidth}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default actors;
