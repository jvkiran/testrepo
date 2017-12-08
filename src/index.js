/* eslint-disable import/first */

import './lib/polyfills'
import React from 'react'
import { render } from 'react-snapshot'
import { injectGlobal } from 'styled-components'
import { globalStyles } from './styles'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`${globalStyles}` // eslint-disable-line

render(<Root />, document.getElementById('root'))
registerServiceWorker()
