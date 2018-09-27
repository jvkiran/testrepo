import styled from 'styled-components'

export const Links = styled.div`
    text-align: center;

    &:empty {
        display: none;
    }
`

export const Icon = styled.a`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2px;
    display: inline-block;
    margin-left: .25rem;
    margin-right: .25rem;
    opacity: .5;

    &:hover,
    &:focus {
        opacity: 1;
    }

    & img {
        width: 100%;
        height: 100%;
    }
`
