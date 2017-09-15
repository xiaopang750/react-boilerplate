import React from 'react';
import compose from 'recompose/compose';
import setStatic from 'recompose/setStatic';
import mapProps from 'recompose/mapProps';
import getContext from 'recompose/getContext';
import withHandlers from 'recompose/withHandlers';
import style from './index.styl';

const playBtn = require('../assets/playBtn.png');
let enhanced = compose(
  getContext({store: React.PropTypes.object.isRequired}),
  mapProps((props) => {
    let {store: {videoDetail: {playUrl}}} = props;
    return {playUrl};
  }),
  withHandlers({
    jump: props => (ev) => {
      setTimeout(() => {
        location.href = props.playUrl;
      }, 10);
    }
  })
);

const play = ({playUrl, jump}) => {
  console.log(playUrl);
  return (
    <div className={style.play}>
      <div className={style.tip}>播放源</div>
      <a href={playUrl} className={style.btn} onTouchStart={jump}>
        <img src={playBtn} />
        <div className={style.shadow} />
      </a>
    </div>
  );
};

export default enhanced(play);
