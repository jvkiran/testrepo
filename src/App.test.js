/* global it */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import './lib/polyfills'

import { globalStyles } from './styles'
import App from './App'

injectGlobal`${globalStyles}` // eslint-disable-line

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Router><App /></Router>, div)
    ReactDOM.unmountComponentAtNode(div)
})
