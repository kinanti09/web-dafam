import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './container/dashboard';
import Hotel from './container/hotel';
import Setting from './container/setting';
import Report from './container/report';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/hotel-list" component={Hotel} />
        <Route path="/setting" component={Setting} />
        <Route path="/report" component={Report} />
      </Switch>
    </div>
  );
}

export default App;
