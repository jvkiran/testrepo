import styled from 'styled-components'
import { colors, responsive } from '../../styles'

export const StyledCollaborator = styled.figure`
    flex: 1 1 50%;
    margin: 0;
    display: block;
    padding: .5rem 1rem;

    @media screen and (${responsive.xs.min}) {
        flex-basis: 33.33333333%;
    }

    @media screen and (${responsive.md.min}) {
        flex-basis: 16.66666667%;
    }

    svg {
        width: 100px;
        max-height: 60px;
        fill: rgb(${colors.lightGrey});
        transition: fill .2s ease-out;
    }

    a {
        display: block;

        &:hover,
        &:focus {
            transform: none;

            svg {
                fill: rgb(${colors.white});
            }
        }
    }
`
