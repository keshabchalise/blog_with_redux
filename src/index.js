import React from 'react';
import ReacDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers,applyMiddleware(thunk));

ReacDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);