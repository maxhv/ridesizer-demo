import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App';
import Email from './HTMLEmail';
import Page404 from './Page404';

import Nav from './Nav';

const Routes = () => (
    <BrowserRouter basename={'/guardian-bikes'}>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/email" component={Email} />
                <Route component={Page404} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;