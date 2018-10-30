import styled from 'styled-components'

export const Links = styled.div`
    text-align: center;

    &:empty {
        display: none;
    }
`

export const IconLink = styled.a`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2px;
    display: inline-block;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    opacity: 0.5;

    &:hover,
    &:focus {
        opacity: 1;
    }

    & svg {
        width: 100%;
        height: 100%;
    }
`
