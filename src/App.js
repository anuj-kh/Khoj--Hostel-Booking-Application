import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.css';
import Landing from './components/landing.js'
import Login from './components/login.js'
import Signup from './components/signup.js'
import Dashboard from './components/dashboard.js'

function App() {
  return (
    <BrowserRouter>
    <Helmet>
    	<title> {"KHOJ - A portal for aspirants"} </title>
    </Helmet>
    <div>
    	<Route exact path='/' component = {Landing} />
    	<Route exact path='/login' component = {Login} />
    	<Route exact path='/signup' component = {Signup} />
      <Route exact path="/dashboard" component={Dashboard}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
