import React from 'react';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';
import NavBar from './components/layouts/NavBar';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />

            <div className='container'>
              <Alert />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route component={User} path='/user/:login' />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
