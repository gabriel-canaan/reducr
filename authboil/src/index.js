import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import './index.css';
import App from './client/components/App';
import registerServiceWorker from './server/registerServiceWorker';

import store from './client/store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('root')
  )
  registerServiceWorker();
})
