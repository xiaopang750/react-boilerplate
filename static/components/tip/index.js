import React from 'react';
import style from './index.styl';

const Tip = ({isLoading}) => {
  let status = isLoading === true ? 'block' : 'none';
  return (
    <div style={{display: status}} className={style.tip}>
      <span>加载中...</span>
    </div>
  );
};

export default Tip;
