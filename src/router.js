
import React, { Component } from 'react';

import Login from './page/login';
import Index from './page/index';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class RouterTag extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Index} />
                <Route path="/index" component={Index} />
                <Route path="/login" component={Login} />
            </Router>
        )
    }
}