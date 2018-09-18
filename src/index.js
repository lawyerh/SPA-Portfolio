import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import './index.css';
import rootReducer from "./reducers/index";

import Nav from "./components/Nav";
import Home from './components/Home';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);





ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

