import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker'
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

serviceWorker.unregister();

