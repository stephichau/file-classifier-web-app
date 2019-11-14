import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import NotFound from '../containers/NotFound/NotFound';
import Error from '../containers/Error/Error';
import {
  Courses,
  Course,
} from '../WebApp/Containers';

import {
  AdminCourses,
} from '../WebApp/Admin';

const routes = ({
  ...restOfProps
}) => (
  <Switch>
    <Route exact path="/" component={Home} {...restOfProps} />
    <Route exact path="/admin/courses" component={AdminCourses} {...restOfProps}  />
    <Route exact path="/courses" component={Courses} {...restOfProps}  />
    <Route path="/courses/:courseId" component={Course} {...restOfProps}  />
    <Route path="/404" component={NotFound} {...restOfProps} />
    <Route path="/500" component={Error} {...restOfProps}  />
    <Redirect from="*" to="/404" {...restOfProps}  />
  </Switch>
);

export default routes;
