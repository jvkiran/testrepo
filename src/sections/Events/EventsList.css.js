import styled from 'styled-components'
import { responsive, colors, fonts } from '../../styles'

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
    padding-left: 5rem;
    padding-right: 5rem;
    display: flex;
    align-items: stretch;

    @media screen and (${responsive.sm.min}) {
        margin-right: -2.5rem;
        margin-left: -2.5rem;
    }

    &::-webkit-scrollbar,
    &::-moz-scrollbar {
        display: none;
    }
`

export const Item = styled.li`
    min-width: 17rem;
    display: block;
    transform: translate3d(0, 0, 0);
`

export const LastItem = styled(Item)`
    min-width: 10rem;
    padding: 2rem 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(${colors.dimmedGrey});
    font-family: ${fonts.family.button};
    cursor: pointer;
    margin-top: 2rem;
`
