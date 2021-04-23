import React from 'react'
import { BrowserRouter, Redirect, Route, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Dashboard from './components/customer/dashboard'
import Auth from './components/auth/auth'

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
                        ) : (
                            <Dashboard />
                        )
                    }
                />
                <Route exact path='/auth' component={Auth} />
            </div>
        </BrowserRouter>
    )
}

export default App
