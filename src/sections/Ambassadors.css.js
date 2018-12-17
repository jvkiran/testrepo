import styled from 'styled-components'
import { colors, fonts, responsive, layout } from '../styles'

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 1rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    color: rgb(${colors.lightGrey});
    font-family: ${fonts.family.button};

    li {
        display: inline-block;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1.5rem;
        flex: 0 0 100%;
        padding-left: 1.5rem;

        @media (${responsive.md.min}) {
            flex-basis: calc(50% - 2rem);
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

export const Actions = styled.div`
    button {
        margin-bottom: ${layout.spacer};
    }

    a {
        font-size: ${fonts.size.small};
    }

    @media (${responsive.md.min}) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            flex: 0 0 56%;
            margin-bottom: 0;
        }

        a {
            flex: 0 0 38%;
        }
    }
`
