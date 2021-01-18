import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';
import { Nav, NavItem, NavLink } from "reactstrap"

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <Link to="/login">Login</Link>
          <Link>Logout</Link>
          <Link>Protected Page</Link>
      </nav>
      <Switch>
      <PrivateRoute exact path="/protected">
        <NewFriend />
        <FriendsList />
      </PrivateRoute>
      <Route exact path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
