import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './route';
import configureStore from './store';

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
