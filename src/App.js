import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppProvider from './store/AppProvider'
import ScrollToRouteTop from './components/ScrollToRouteTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Protocol from './pages/Protocol'
import Community from './pages/Community/'
import Developers from './pages/Developers/'
import Art from './pages/Art'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import TermsPrelaunch from './pages/TermsPrelaunch'
import TermsLaunch from './pages/TermsLaunch'
import NotFound from './pages/NotFound'
import Newsletter from './pages/Newsletter'
import { createGlobalStyle } from 'styled-components'
import smoothscroll from 'smoothscroll-polyfill'
import { globalStyles } from './styles'

const GlobalStyles = createGlobalStyle`${globalStyles}`

smoothscroll.polyfill()

const Routes = () => (
    <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Protocol} path="/protocol/" />
        <Route exact component={Community} path="/community/" />
        <Route exact component={Developers} path="/developers/" />
        <Route exact component={Art} path="/art/" />
        <Route exact component={Faq} path="/faq/" />
        <Route exact component={Privacy} path="/privacy/" />
        <Route exact component={TermsPrelaunch} path="/terms-prelaunch/" />
        <Route exact component={TermsLaunch} path="/terms-launch/" />
        <Route exact component={Newsletter} path="/newsletter/" />
        <Route component={NotFound} path="*" />
    </Switch>
)

const App = () => (
    <AppProvider>
        <GlobalStyles />
        <Router>
            <ScrollToRouteTop>
                <Routes />
                <Footer />
            </ScrollToRouteTop>
        </Router>
    </AppProvider>
)

export default App
