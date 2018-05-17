import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Head from './components/Head'
import Footer from './components/Footer'
import Home from './pages/Home'
import Art from './pages/Art'
import Privacy from './pages/Privacy'
import TermsPrelaunch from './pages/TermsPrelaunch'
import NotFound from './pages/NotFound'

const App = () => (
    <Fragment>
        <Head />
        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Art} path="/art" />
            <Route exact component={Privacy} path="/privacy" />
            <Route exact component={TermsPrelaunch} path="/terms-prelaunch" />
            <Route component={NotFound} path="*" />
        </Switch>
        <Footer />
    </Fragment>
)

export default App
