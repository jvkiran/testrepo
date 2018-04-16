/* eslint-disable import/first */

import './lib/polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { globalStyles } from './styles'
import App from './App'

injectGlobal`${globalStyles}` // eslint-disable-line

const rootElement = document.getElementById('root')

ReactDOM.render((
    <Router>
        <App />
    </Router>), rootElement)
