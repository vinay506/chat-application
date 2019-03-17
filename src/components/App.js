import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Dashboard from './dashboard/dashboard'

class Root extends Component {
 
  render() {
    return (
     <Router > 
        <Route exact path={'/'}  render={
          ()=>{
            return (<Login></Login>)
          }
        }></Route>
        
        <Route  exact path={'/login'} component={Login}></Route>
        <Route exact path={'/dashboard'} render={
          ()=>{
            return (<Dashboard></Dashboard>)
          }
        }></Route>
     </Router>

    );
  }
}

export default Root;
