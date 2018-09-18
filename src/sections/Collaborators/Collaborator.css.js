import styled from 'styled-components'
import { colors, responsive } from '../../styles'

export const StyledCollaborator = styled.figure`
    flex: 1 1 50%;
    margin: 0;
    display: block;
    padding: 1rem;

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
        background: rgba(${colors.white}, .1);
        border-radius: 50%;
        width: 8rem;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
        border: 1px solid rgba(${colors.black}, .3);

        &:hover,
        &:focus {
            background: rgba(${colors.white}, .95);
            transform: translate3d(0, -.5rem, 0);

            svg {
                fill: rgb(${colors.black});
            }
        }
    }
`
