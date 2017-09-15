import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import mapProps from 'recompose/mapProps';
import {bindActionCreators} from 'redux';
import videoLists from '../../components/videoLists';
import {getGuid} from '../../utils/utils';
import style from './index.styl';

const {
  component: VideoLists,
  actions: getVideoLists,
  selector: videoListsSelector,
  constants: {NAME, GET_LISTS_API}
} = videoLists;

const mapDispatchToProps = dispatch => ({
  getVideoLists: bindActionCreators(getVideoLists, dispatch),
});

let isLoaded = false;
let guid = getGuid();
let enhanced = compose(
  connect(state => state, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if (!isLoaded) {
        isLoaded = true;
        this.props.getVideoLists({
          url: GET_LISTS_API,
          qs: {
            mac: guid
          }
        });
      }
    }
  }),
  mapProps(videoListsSelector)
);

const IndexContainer = (props) => {
  let {getVideoLists: getData, history} = props;
  let listInfo = props[NAME];
  let {cardName} = listInfo;
  return (
    <div>
      <h1 className={style.cardTitle}>
        <span>{cardName}</span>
        <span>{pageInfo.env !== 'production' ? guid : ''}</span>
      </h1>
      <VideoLists
        {...listInfo}
        getData={getData}
        history={history}
      />
    </div>
  );
};

export default enhanced(IndexContainer);
