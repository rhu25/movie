import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>    
        <App />
    </Provider>,
    document.getElementById("app")
);
