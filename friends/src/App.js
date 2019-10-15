import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
// import './App.css';

import { LoginForm } from './components'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Routes go here */}
        <Route path='/' component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
