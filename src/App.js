import React from 'react';
import './App.scss';
import AllPosts from './pages/allPosts';
import HomePage from './pages/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/allPosts'>All posts</Link>
            </li>
            <li>
              <Link to='/createPost'>Create a post</Link>
            </li>
            <li>
              <Link to='/allUsers'>All users</Link>
            </li>
            <li>
              <Link to='/createUser'>Create a user</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
          <HomePage />
          </Route>
          <Route path='/allPosts'>
            <AllPosts />
          </Route>
          <Route path='/createPost'>
            
          </Route>
          <Route path='/allUsers'>
            {/* <AllUsers /> */}
          </Route>
          <Route path='/createUser'>
            {/* <CreateUser /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
