import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import * as stores from './stores/Stores';

configure({
  enforceActions: true
});

ReactDOM.render(
  <Router>
    <Provider {...stores}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
