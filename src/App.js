import React from 'react';
import GithubState from '../src/context/github/GithubState'
import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Home from './components/Pages/Home'
import Alert from '../src/components/Alert/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import User from '../src/components/Users/User'
import About from '../src/components/Pages/About'
import AlertState from './context/Alert/AlertState'
import NotFound from './components/Pages/NotFound'


const App =()=>{

  return (
    <GithubState>
      <AlertState>
        <Router>
            <Navbar/>
              <div className="container">
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/> 
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound}/>
              </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}
export default App;
