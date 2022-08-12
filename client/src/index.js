import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
// import { Provider } from 'react-redux'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker'
import App from './App';
import './index.css'

const domain = process.env.SRF_MIS_DOMAIN;
const clientId = process.env.SRF_MIS_CLIENT_ID

// import rootReducer from './reducers'

// const store = configureStore(rootReducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

serviceWorker.unregister();

