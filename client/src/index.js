import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


// axios.defaults.baseURL = process.env.REACT_APP_API;


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
