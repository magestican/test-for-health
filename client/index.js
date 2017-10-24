import React from 'react';
import ReactDOM from 'react-dom';
require('./index.html');
require('./styles/main.scss');
import App from './components/app';
import { Provider } from 'react-redux'
import { createStore ,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import {initialState} from './reducer/initialState';


let store = createStore(rootReducer,initialState,compose(applyMiddleware(thunk)))

window.onload = ()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
}
