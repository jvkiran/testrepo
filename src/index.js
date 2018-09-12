import './lib/polyfills'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import ScrollToRouteTop from './components/ScrollToRouteTop'
import { globalStyles } from './styles'
import App from './App'

injectGlobal`${globalStyles}`

const rootElement = document.getElementById('root')

const components = (
    <Router>
        <ScrollToRouteTop>
            <App />
        </ScrollToRouteTop>
    </Router>
)

if (rootElement.hasChildNodes()) {
    hydrate(components, rootElement)
} else {
    render(components, rootElement)
}
