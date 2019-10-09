import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import NotFound from '../containers/NotFound/NotFound';
import Error from '../containers/Error/Error';
import {
  Courses,
} from '../WebApp/Containers';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses" component={Courses} />
    <Route path="/courses/:courseId" component={Courses} />
    <Route path="/404" component={NotFound} />
    <Route path="/500" component={Error} />
    <Redirect from="*" to="/404" />
  </Switch>
);

export default routes;
