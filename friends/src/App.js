import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { LoginForm, ProtectedRoute, FriendsList } from './components'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Routes go here */}
        <Route exact path='/' component={LoginForm} />
        <ProtectedRoute path='/friends' component={FriendsList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
