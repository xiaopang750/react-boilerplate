import React from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withContext from 'recompose/withContext';
import mapProps from 'recompose/mapProps';
import lifecycle from 'recompose/lifecycle';
import {bindActionCreators} from 'redux';
import detail from '../../components/detail';
import videoLists from '../../components/videoLists';

const {
  component: Detail,
  actions: {getVideoDetail, clearDetail},
  selector: detailSelector,
  constants: {NAME, GET_DETAIL_API}
} = detail;

const {
  component: VideoLists,
  actions: getVideoLists,
  selector: videoListsSelector,
  constants: {GET_LISTS_API}
} = videoLists;

const mapDispatchToProps = dispatch => ({
  getVideoLists: bindActionCreators(getVideoLists, dispatch),
  getVideoDetail: bindActionCreators(getVideoDetail, dispatch),
  clearDetail: bindActionCreators(clearDetail, dispatch)
});

let enhanced = compose(
  connect(state => state, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      let {match: {params: {id}}} = this.props;
      this.props.getVideoDetail({
        url: `${GET_DETAIL_API}${id}`
      });
      this.props.getVideoLists({
        url: GET_LISTS_API
      });
      // setTimeout(() => {
      //   this.props.getVideoDetail({
      //     url: `${GET_DETAIL_API}5762d5dcd8176b312df10d68e97dd5cd`
      //   });
      // }, 5000);
    }
  }),
  mapProps(detailSelector),
  mapProps(videoListsSelector),
  withContext({store: React.PropTypes.object.isRequired}, (props) => {
    console.log(props);
    return {store: props};
  }),
);

const DetailContainer = (props) => {
  let {getVideoDetail: getData, clearDetail: clearData} = props;
  return (
    <div>
      <Detail
        {...props[NAME]}
        getData={getData}
        clearData={clearData}
      />
    </div>
  );
};

export default enhanced(DetailContainer);
