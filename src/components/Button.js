import React from 'react'
import Spinner from '../components/Spinner'
import { StyledButton } from './Button.css'

const Button = ({ fetching, children, to, href, ...props }) => {
    if (to) {
        return (
            <StyledButton.Link to={to} {...props}>
                {children}
            </StyledButton.Link>
        )
    } else if (href) {
        return (
            <StyledButton.a href={href} {...props}>
                {children}
            </StyledButton.a>
        )
    } else {
        return (
            <StyledButton disabled={fetching} {...props}>
                {fetching ? <Spinner /> : <span>{children}</span>}
            </StyledButton>
        )
    }
}

export default Button
