import React from 'react';
import ReacDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app';
import reducers from './reducers';

ReacDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);