import styled from 'styled-components'
import { responsive } from '../../styles'

export const StyledEventsList = styled.ul`
    margin-top: 4rem;
    padding: 0;
    padding-bottom: 3rem;
    list-style: none;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    margin-right: -1.75rem;
    margin-left: -1.75rem;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    align-items: stretch;

    @media screen and (${responsive.sm.min}) {
        margin-right: -2.5rem;
        margin-left: -2.5rem;
    }

    &::-webkit-scrollbar,
    &::-moz-scrollbar { display: none; }
`

export const Item = styled.li`
    min-width: 20rem;
    display: block;

    &:last-child {
        margin-right: 2.5rem;
    }
`
