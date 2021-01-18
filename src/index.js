import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Routes from './routes';
import store from './redux/store';

import './theme/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
