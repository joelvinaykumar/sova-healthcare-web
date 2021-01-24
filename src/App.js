import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
    
  );
}

export default App;
