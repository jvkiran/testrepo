import React from 'react'
import { Container } from './Cell.css'

const Cell = ({ children, ...props }) => (
    <Container {...props}>{children}</Container>
)

export default Cell
