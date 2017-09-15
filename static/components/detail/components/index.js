import React from 'react';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import renderComponent from 'recompose/renderComponent';
import branch from 'recompose/branch';
import Actors from './actors';
import Bg from './bg';
import Face from './face';
import Info from './info';
import Intro from './intro';
import Play from './play';
import {ScrollToTop} from '../../scrollTo';
import {pbDetailShow} from '../../../utils/pb';
import style from './index.styl';

const loadingStyle = {
  color: 'white',
  fontSize: '0.5rem',
  textAlign: 'center',
  padding: '0 0.3rem'
};

const loading = () => {
  return (
    <div style={loadingStyle}>加载中...</div>
  );
};

const fail = () => {
  return (
    <div style={loadingStyle}>加载失败</div>
  );
};

const init = () => {
  return (
    <div />
  );
};

let enhanced = compose(
  lifecycle({
    componentDidUpdate() {
      let {FETCH_RESULT_TYPE, id, score, cardId} = this.props;
      if (FETCH_RESULT_TYPE === 'success') {
        // pb
        pbDetailShow({cardId, videoInfo: {id, score}});
      }
    },
    componentWillUnmount() {
      this.props.clearData();
    }
  }),
  branch((props) => {
    return props.FETCH_RESULT_TYPE === 'fail';
  }, renderComponent(fail)),
  branch((props) => {
    return props.isLoading === true;
  }, renderComponent(loading)),
  branch((props) => {
    return props.isLoading === undefined;
  }, renderComponent(init)),
);

const detail = ({id, score, actor, type, area, duration, imgUrl, intro, title, enTitle, playUrl}) => {
  return (
    <ScrollToTop>
      <div className={`rel ${style.detail}`}>
        <Bg imgUrl={imgUrl} />
        <Play />
        <Face imgUrl={imgUrl} />
        <Info type={type} area={area} duration={duration} title={title} enTitle={enTitle} />
        <Intro intro={intro} />
        <Actors actor={actor} />
      </div>
    </ScrollToTop>
  );
};

export default enhanced(detail);
