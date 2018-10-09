import './lib/polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import { globalStyles } from './styles'
import App from './App'

injectGlobal`${globalStyles}`

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})
