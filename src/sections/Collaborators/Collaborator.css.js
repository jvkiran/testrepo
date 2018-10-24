import styled from 'styled-components'
import { colors, responsive, fonts } from '../../styles'

export const StyledCollaborator = styled.figure`
    flex: 1 1 50%;
    margin: 0;
    display: block;
    padding: 1rem;
    position: relative;

    @media screen and (${responsive.xs.min}) {
        flex-basis: 33.33333333%;
    }

    @media screen and (${responsive.md.min}) {
        flex-basis: 20%;
    }

    svg {
        width: 120px;
        max-height: 60px;
        fill: rgb(${colors.lightGrey});
        transition: fill 0.4s ease-out;
        position: relative;
        z-index: 1;
    }
`

export const StyledDescription = styled.span`
    margin: 0;
    font-size: ${fonts.size.mini};
    color: rgb(${colors.white});
    position: absolute;
    top: 0;
    left: -1rem;
    right: -1rem;
    z-index: 2;
    background: rgb(${colors.darkGrey});
    border: 0.1rem solid rgb(${colors.pink});
    border-radius: 2px;
    padding: 0.5rem;
    margin-left: -40%;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.2);
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0);
    transform-origin: center;
    transition: 0.25s ease-out;
    width: 200%;

    &:empty {
        display: none;
    }
`

export const StyledCollaboratorWrap = styled.a`
    position: relative;
    background: rgba(${colors.white}, 0.01)
        linear-gradient(
            to bottom right,
            rgba(${colors.white}, 0) 0%,
            rgba(${colors.white}, 0.15) 100%
        );
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: auto;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.5);
    transition-duration: 0.4s;

    &:hover,
    &:focus {
        background: rgba(${colors.white}, 0.95);
        transform: translate3d(0, -0.5rem, 0);
        z-index: 3;

        svg {
            fill: rgb(${colors.black});
        }

        ${StyledDescription} {
            /* stylelint-disable-line */
            opacity: 1;
            transform: translate3d(0, 5rem, 0) scale(1);
        }
    }
`
