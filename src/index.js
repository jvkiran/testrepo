import './lib/polyfills'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { globalStyles } from './styles'
import App from './App'

injectGlobal`${globalStyles}`

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement)
} else {
    render(<App />, rootElement)
}
