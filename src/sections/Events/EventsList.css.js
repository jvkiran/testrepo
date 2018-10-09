import styled from 'styled-components'

export const StyledEventsList = styled.div`
    margin-top: 4rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    margin-right: -2.5rem;
    margin-left: -2.5rem;

    &::-webkit-scrollbar,
    &::-moz-scrollbar { display: none; }
`

export const Track = styled.ul`
    padding: 0;
    padding-bottom: 2rem;
    list-style: none;
    display: flex;
`

export const Item = styled.li`
    min-width: 20rem;
    display: block;

    &:last-child {
        margin-right: 2.5rem;
    }
`
