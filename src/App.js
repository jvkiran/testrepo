import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import AppProvider from './store/AppProvider'
import ScrollToRouteTop from './components/ScrollToRouteTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Protocol from './pages/Protocol'
import Community from './pages/Community/'
import Developers from './pages/Developers/'
import Art from './pages/Art'
import Banner from './sections/Banner'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import TermsPrelaunch from './pages/TermsPrelaunch'
import TermsLaunch from './pages/TermsLaunch'
import NotFound from './pages/NotFound'
import Newsletter from './pages/Newsletter'
import { createGlobalStyle } from 'styled-components'
import smoothscroll from 'smoothscroll-polyfill'
import CookieBanner from './components/CookieBanner'
import { globalStyles } from './styles'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

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

const history = createHistory()

history.listen((location, action) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

const App = () => (
    <AppProvider>
        <GlobalStyles />
        <Router history={history}>
            <ScrollToRouteTop>
                <Banner />
                <Routes />
                <Footer />
                <CookieBanner />
            </ScrollToRouteTop>
        </Router>
    </AppProvider>
)

export default App
