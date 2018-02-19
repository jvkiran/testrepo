/* eslint-disable import/first */

import './lib/polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { globalStyles } from './styles'
import { unregister } from './registerServiceWorker'
import App from './App'

injectGlobal`${globalStyles}` // eslint-disable-line

ReactDOM.render(
    (
        <Router>
            <App />
        </Router>
    ), document.getElementById('root')
)

unregister()
