import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Cell.css'

const Cell = ({ children, width, ...props }) => (
    <Container cellWidth={width} {...props}>
        {children}
    </Container>
)

Cell.propTypes = {
    children: PropTypes.any,
    width: PropTypes.number
}

export default Cell
