import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.css';
import Landing from './components/landing.js'

import login from './components/login'
import register from './components/register'
import Dashboard from './components/customer/cus_dashboard.js'


function App() {
  return (
    <BrowserRouter>
    <Helmet>
    	<title> {"KHOJ - A portal for aspirants"} </title>
    </Helmet>
    <div>
    	<Route exact path='/' component = {Landing} />
    	<Route exact path='/login' component = {login} />
    	<Route exact path='/register' component = {register} />
      <Route exact path="/dashboard" component={Dashboard}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
