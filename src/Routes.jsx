import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductScreen from './ProductScreen';
import CompareScreen from './CompareScreen';

const routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ProductScreen} />
            <Route path="/comp" component={CompareScreen} />
        </Switch>
    </Router>
);

export default routes;
