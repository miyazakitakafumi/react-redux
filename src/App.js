import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import showText from './reducers/index'
import TestContainer from './containers/testcontainer';

const store = createStore(showText);

const App = () => (
    <Provider store={store}>
        <TestContainer />
    </Provider>
);

export default App
