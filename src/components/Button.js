import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../components/Spinner'
import { Container, Children } from './Button.css'

const Button = ({ fetching, children, ...props }) => (
    <Container disabled={fetching} {...props}>
        {fetching && <Spinner />}
        <Children fetching={fetching}>{children}</Children>
    </Container>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    fetching: PropTypes.bool
}

Button.defaultProps = {
    fetching: false
}

export default Button
