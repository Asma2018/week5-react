import React from 'react';
import { Link, Route } from 'react-router-dom';

const Task = ({ match }) => (
  <div>
    <h3>{match.params.taskId}</h3>
  </div>
);

const Tasks = ({ match }) => (
  <div class="container">
    <h2>Todo Tasks</h2>
    <ul>
      <li>
        <Link to={`${match.url}/Getup from Bed`}>
         Task1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Bruch your Teeth`}>
          Task2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Do Breakfast`}>
        Task3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:taskId`} component={Task} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a Task.</h3>}
    />
  </div>
);

export default Tasks;
