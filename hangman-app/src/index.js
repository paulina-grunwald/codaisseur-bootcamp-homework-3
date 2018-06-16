import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <App />
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();
