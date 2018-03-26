import React from 'react'
import transition from 'styled-transition-group'

const timeout = 300

const FadeInAnimation = transition.div`
    &:appear {
        opacity: .01;
    }

    &:appear-active {
        opacity: 1;
        transition: ${timeout}ms ease-in-out;
    }
`

const FadeIn = (props) => (
    <FadeInAnimation
        {...props}
        appear
        in
        offset={100}
        timeout={timeout} />
)

export default FadeIn
