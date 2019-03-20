import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Posts from './stores/Posts';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'mobx-react';

const store = {
  postsStore: new Posts()
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);