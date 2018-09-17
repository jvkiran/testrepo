import React from 'react'
import PropTypes from 'prop-types'
import { StyledSpinnnerWrapper, StyledSpinner } from './Spinner.css'

const Spinner = ({ white, ...props }) => (
    <StyledSpinnnerWrapper {...props}>
        <StyledSpinner white={white} />
    </StyledSpinnnerWrapper>
)

Spinner.propTypes = {
    white: PropTypes.bool
}

Spinner.defaultProps = {
    white: false
}

export default Spinner
