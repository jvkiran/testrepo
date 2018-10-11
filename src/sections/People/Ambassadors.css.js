import styled from 'styled-components'
import { colors, responsive } from '../../styles'

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;

    li {
        display: inline-block;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        flex: 0 0 calc(50% - 2rem);
        padding-left: 1.2rem;

        @media (${responsive.md.min}) {
            flex-basis: calc(33% - 2rem);
        }
    }

    svg {
        fill: rgb(${colors.green});
        width: 1rem;
        height: 1rem;
        margin-right: .5rem;
        margin-left: -1.4rem;
    }
`
