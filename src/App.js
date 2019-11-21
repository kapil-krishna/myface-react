import React from 'react';
import './App.scss';
import { AllPosts, NewPostLink } from './pages/allPosts';
import { AllUsers, NewUserLink } from './pages/allUsers';
import { PostForm } from './pages/createPost';
import { UserForm } from './pages/createUser';
import crazy from './resources/images/crazy.png';

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
      <p className="nav-title"><img src={crazy} className ="nav-logo" alt="my-face-logo"/>MyFace</p>
        <nav>
            <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to='/allPosts'>POSTS</Link>
            </li>
            <li>
              <Link to='/allUsers'>USERS</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/allPosts'>
            <NewPostLink /> <AllPosts />
          </Route>
          <Route path='/allUsers'>
            <NewUserLink /> <AllUsers />
          </Route>
          <Route path='/createPost' >
            <PostForm />
          </Route>
          <Route path='/createUser'>
            <UserForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
