import transition from 'styled-transition-group'

export const timeout = 300

export const FadeInAnimation = transition.div`
    &:appear {
        opacity: .01;
    }

    &:appear-active {
        opacity: 1;
        transition: ${timeout}ms ease-in-out;
    }
`
