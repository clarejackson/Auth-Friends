import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
      </Router>
      <PrivateRoute exact path="/protected">
        <FriendsList />
      </PrivateRoute>
    </div>
  );
}

export default App;
