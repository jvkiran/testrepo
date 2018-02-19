import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Footer from './sections/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Meta = () => {
    if (window.location.hostname === 'beta.oceanprotocol.com') {
        return (
            <Helmet>
                <meta content="noindex,nofollow" name="robots" />
            </Helmet>
        )
    } else return []
}

const App = () => (
    <Fragment>
        <Meta />
        <Switch>
            <Route exact component={Home} path='/' />
            <Route component={NotFound} path='*' />
        </Switch>
        <Footer />
    </Fragment>
)

export default App
