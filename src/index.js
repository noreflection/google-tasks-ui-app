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

//import gapi from 'gapi-client';
window.handleGoogleApiLoaded = () => {
  //SessionActions.authorize(true, renderApp);
  stores.sessionStore.authorizeUser();
};

//gapi.load('client:auth2', initClient);
/* console.log('object')
function initClient() {
  gapi.client
    .init({
      discoveryDocs: [
        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
      ],
      clientId:
        '908004947575-7ttokrp4uptnvf5hnr85g2rg622qbmqe.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/tasks.readonly'
    })
    .then(function() {
      // do stuff with loaded APIs
      console.log('it worked');
    });
} */

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
