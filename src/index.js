import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.css';
import About from "./components/About";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Todoitem from "./components/Todoitem";



const App = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/todoitem">Todolist</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todo" component={Todo} />

   
    </div>
  </Router>;

render(<App />, document.getElementById("root"));

