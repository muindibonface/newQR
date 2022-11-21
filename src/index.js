import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import  usersReducer  from './User';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

