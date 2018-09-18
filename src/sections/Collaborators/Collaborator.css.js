import styled from 'styled-components'
import { colors } from '../../styles'

export const StyledCollaborator = styled.figure`
    flex: 1 1 20%;

    svg {
        width: 100px;
        max-height: 100px;
        fill: rgb(${colors.white});
        opacity: .75;
        transition: opacity .2s ease-out;
    }

    a {
        display: block;
        transform: none;
        transition: none;

        &:hover,
        &:focus {
            transform: none;

            svg {
                opacity: 1;
            }
        }
    }
`
