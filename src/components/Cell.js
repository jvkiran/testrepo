import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Cell.css'

const Cell = ({ children, ...props }) => (
    <Container {...props}>{children}</Container>
)

Cell.propTypes = {
    children: PropTypes.any
}

export default Cell
