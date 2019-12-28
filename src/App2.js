import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css'
import { SignIn } from './containers/SignIn'

const App = () => (
  <Router>
    <div>
      <ul>
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/admin">Admin Page</Link>
      </li>
      <li>
        <Link to="/login">Login Page</Link>
      </li>
      </ul>
      <Route exact path="/" component={SignIn} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignIn} />
    </div>
  </Router>
)

export default App
