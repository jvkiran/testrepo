import React from 'react'
import PropTypes from 'prop-types'

import { StyledFormHelp } from './FormHelp.css'

const FormHelp = ({ children }) => <StyledFormHelp>{children}</StyledFormHelp>

FormHelp.propTypes = {
    children: PropTypes.string
}

export default FormHelp
