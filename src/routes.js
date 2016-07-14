import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/App';
import Slides from './containers/Slides';


const routes = (
  <Route>
    <Route path="/" component={App}>
      {/* <IndexRoute component={Dashboard} /> */}
      <Route path="slides" component={Slides}></Route>

    </Route>
    <Route path="/**" component={App}></Route>
  </Route>
);

export default routes;
