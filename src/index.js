import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css'

import Routes from './routes';
import store from './redux/store';

import colors from './theme/colors';
import './theme/global.scss';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{
      colors,
    }}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('approot')
);
