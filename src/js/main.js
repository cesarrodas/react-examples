import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Hello } from './heyfile';
require('../styles/styles.scss');

const Hey = () => (<div><h1>HEYLLO</h1></div>);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route path="/about" component={Hey} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
