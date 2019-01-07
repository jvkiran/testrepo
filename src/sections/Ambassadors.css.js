import styled from 'styled-components'
import { colors, fonts, responsive, layout } from '../styles'

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    color: rgb(${colors.grey});
    font-family: ${fonts.family.button};

    @media (${responsive.sm.min}) {
        margin-left: -3rem;
        max-width: 100%;
    }

    @media (${responsive.lg.min}) {
        margin-left: -4rem;
        max-width: none;
    }

    li {
        display: inline-block;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
        flex: 0 0 100%;
        padding-left: 1.5rem;

        @media (${responsive.lg.min}) {
            flex-basis: calc(50% - 2rem);
            margin-bottom: 2rem;
        }
    }

    svg {
        fill: rgb(${colors.pink});
        width: 1rem;
        height: 1rem;
        margin-right: 0.75rem;
        margin-left: -1.75rem;
    }
`

export const StyledActions = styled.div`
    margin-top: ${layout.spacer};
    text-align: center;

    button {
        margin-bottom: ${layout.spacer};
    }

    @media (${responsive.sm.min}) {
        margin-left: -3rem;

        button {
            margin-top: 0;
        }
    }
`
