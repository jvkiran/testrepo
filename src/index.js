import './lib/polyfills'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { globalStyles } from './styles'
import App from './App'

injectGlobal`${globalStyles}`

const rootElement = document.getElementById('root')

const components = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

if (rootElement.hasChildNodes()) {
    hydrate(components, rootElement)
} else {
    render(components, rootElement)
}
