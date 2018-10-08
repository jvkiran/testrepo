import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToRouteTop from './components/ScrollToRouteTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Art from './pages/Art'
import Privacy from './pages/Privacy'
import TermsPrelaunch from './pages/TermsPrelaunch'
import NotFound from './pages/NotFound'
import Newsletter from './pages/Newsletter'

const Routes = () => (
    <Switch>
        {/* <Route exact strict path="/:url*" render={props => <Redirect to={`${props.location.pathname}/`} {...props} />} /> */}
        <Route exact component={Home} path="/" />
        <Route component={Art} path="/art" />
        <Route component={Privacy} path="/privacy" />
        <Route component={TermsPrelaunch} path="/terms-prelaunch" />
        <Route component={Newsletter} path="/newsletter" />
        <Route component={NotFound} path="*" />
    </Switch>
)

const App = () => (
    <Router>
        <ScrollToRouteTop>
            <Routes />
            <Footer />
        </ScrollToRouteTop>
    </Router>
)

export default App
