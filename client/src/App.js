import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.css';
import Dashboard from './components/customer/cus_dashboard'
import Auth from './components/auth/auth'

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title> {"KHOJ - A portal for aspirants"} </title>
      </Helmet>
      <div>
        <Route exact path='/' render={() => {window.location.href="/landingPageFiles/LandingPage.html"}} />
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/auth' component = {Auth} />
      </div>
    </BrowserRouter>
  );
}

export default App;
