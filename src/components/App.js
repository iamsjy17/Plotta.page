import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ApiPage, DemoPage, MainPage, NotFoundPage,
} from 'pages';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/demo" component={DemoPage} />
      <Route exact path="/api" component={ApiPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
