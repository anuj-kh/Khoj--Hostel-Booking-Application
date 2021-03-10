import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.css';
import Landing from './components/landing'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/customer/cus_dashboard'

function App() {
  return (
    <BrowserRouter>
    <Helmet>
    	<title> {"KHOJ - A portal for aspirants"} </title>
    </Helmet>
    <div>
    	<Route exact path='/' render={() => {window.location.href="/landingPageFiles/LandingPage.html"}} />
    	<Route exact path='/login' component = {Login} />
    	<Route exact path='/register' component = {Register} />
      <Route exact path="/dashboard" component={Dashboard}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
