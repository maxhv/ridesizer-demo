import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

import App from './components/App';

import './index.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById('app')
);