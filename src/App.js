import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToRouteTop from './components/ScrollToRouteTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Protocol from './pages/Protocol'
import Community from './pages/Community'
import About from './pages/About'
import Art from './pages/Art'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import TermsPrelaunch from './pages/TermsPrelaunch'
import NotFound from './pages/NotFound'
import Newsletter from './pages/Newsletter'
import { createGlobalStyle } from 'styled-components'
import { globalStyles } from './styles'

const GlobalStyles = createGlobalStyle`${globalStyles}`

const Routes = () => (
    <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Protocol} path="/protocol" />
        <Route component={Community} path="/community" />
        <Route component={About} path="/about" />
        <Route component={Art} path="/art" />
        <Route component={Faq} path="/faq" />
        <Route component={Privacy} path="/privacy" />
        <Route component={TermsPrelaunch} path="/terms-prelaunch" />
        <Route component={Newsletter} path="/newsletter" />
        <Route component={NotFound} path="*" />
    </Switch>
)

const App = () => (
    <>
        <GlobalStyles />
        <Router>
            <ScrollToRouteTop>
                <Routes />
                <Footer />
            </ScrollToRouteTop>
        </Router>
    </>
)

export default App
