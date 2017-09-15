import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// TODO: 动态加载会让 模块中的 @import 样式失效 由于应用太小
// 暂时关闭code spliting功能
// import Bundle from './components/bundle';
// import loadIndexContainer from 'bundle-loader?lazy!./containers/index';
// import loadDetailContainer from 'bundle-loader?lazy!./containers/detail';

import IndexContainer from './containers/index';
import DetailContainer from './containers/detail';
// import TestContainer from '../containers/index/test';

// const IndexContainer = (props) => {
//   return (
//     <Bundle load={loadIndexContainer}>
//       {(IndexContainer) => <IndexContainer {...props} />}
//     </Bundle>
//   );
// };
//
// const DetailContainer = (props) => {
//   return (
//     <Bundle load={loadDetailContainer}>
//       {(DetailContainer) => <DetailContainer {...props} />}
//     </Bundle>
//   );
// };

const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={IndexContainer} />
          <Route path="/detail/:id" component={DetailContainer} />
        </div>
      </Router>
    );
  }
}

export default Routes;
