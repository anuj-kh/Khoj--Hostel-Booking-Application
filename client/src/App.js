import React from 'react'
import { BrowserRouter, Redirect, Route, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Dashboard from './components/customer/dashboard'
import Dashboard2 from './components/manager/dashboard'
import Auth from './components/auth/auth.js'

function App() {
    const history = useHistory()
    return (
        <BrowserRouter history={history}>
            <Helmet>
                <title> {'KHOJ - A portal for aspirants'} </title>
            </Helmet>
            <div>
                <Route
                    exact
                    path='/'
                    render={() => {
                        window.location.href =
                            '/landingPageFiles/LandingPage.html'
                    }}
                />
                {/* console.log(localStorage.getItem('profile')) */}
                <Route
                    path='/dashboard'
                    render={() =>
                        !localStorage.getItem('profile') ? (
                            <Redirect to='/auth' />
                        ) : 
                        JSON.parse(localStorage.getItem('profile')).result.user==="Student" ? (
                            <Dashboard />
                        ) : (
                            <Dashboard2 />
                        )
                    }
                />
                <Route exact path='/auth' component={Auth} />
            </div>
        </BrowserRouter>
    )
}

export default App
