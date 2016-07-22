import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/App';
import Slides from './containers/Slides';
import ActionDemo from './containers/ActionDemo';


const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ActionDemo} />
      <Route path="slides" component={Slides}></Route>

    </Route>
    <Route path="/**" component={App}></Route>
  </Route>
);

export default routes;
