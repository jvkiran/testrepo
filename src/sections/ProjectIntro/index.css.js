import styled from 'styled-components'
import Grid from '../../components/Grid'
import Cell from '../../components/Cell'
import SubTitle from '../../components/SubTitle'
import { colors, responsive, layout } from '../../styles'

export const StyledGrid = styled(Grid)`
    padding-top: calc(${layout.spacer} * 2);
    padding-bottom: calc(${layout.spacer} * 2);
    align-items: center;
    min-height: 70vh;
    border-bottom: 1px solid rgba(${colors.lightGrey}, 0.3);

    @media screen and (${responsive.sm.min}) {
        max-height: 500px;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }

    p {
        color: rgb(${colors.dimmedGrey});
    }
`

export const StyledCell = styled(Cell)`
    &:first-child {
        order: 2;
    }

    &:last-child {
        order: 1;
        margin-bottom: ${layout.spacer};
    }

    @media screen and (${responsive.sm.min}) {
        &:first-child {
            order: 1;
        }

        &:last-child {
            order: 2;
            margin-bottom: 0;
        }
    }

    p {
        margin-bottom: 0;
    }
`

export const Icon = styled.div`
    background: rgb(${colors.grey});
    width: 8rem;
    min-height: 8rem;
    height: auto;
    max-width: 100%;

    @media screen and (${responsive.sm.min}) {
        width: 15rem;
        min-height: 15rem;
    }
`

export const Actions = styled.aside`
    margin-top: calc(${layout.spacer} / 2);
    margin-bottom: calc(-${layout.spacer} / 3);

    a {
        display: inline-block;
        padding: calc(${layout.spacer} / 3) 0;
        margin-right: 3rem;
    }
`

export const Contact = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-top: calc(${layout.spacer} * 2);
    margin-bottom: 0;

    button {
        margin-top: ${layout.spacer};
    }
`
