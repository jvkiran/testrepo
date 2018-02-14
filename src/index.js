/* eslint-disable import/first */

import './lib/polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { globalStyles } from './styles'
import Root from './Root'
import { unregister } from './registerServiceWorker'

injectGlobal`${globalStyles}` // eslint-disable-line

ReactDOM.render(<Root />, document.getElementById('root'))

unregister()
