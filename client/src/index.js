import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { Provider } from 'react-redux'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import './index.css'


// import rootReducer from './reducers'

// const store = configureStore(rootReducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();