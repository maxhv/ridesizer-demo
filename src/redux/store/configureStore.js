import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import BikeReducer from '../reducers/BikeReducer';
import UserReducer from '../reducers/UserReducer';
import FlagReducer from '../reducers/FlagReducer';
import thunk from 'redux-thunk';

// Segment analytics tracker
import { createTracker } from 'redux-segment';
const tracker = createTracker();

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            user: UserReducer,
            bike: BikeReducer,
            flags: FlagReducer
        }),
        composeEnchancers(applyMiddleware(thunk, tracker))
    );

    return store;
};