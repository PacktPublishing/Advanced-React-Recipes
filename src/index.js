import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './styles/index.css';

const MOUNT_ELEMENT = document.getElementById('root');

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, MOUNT_ELEMENT);
