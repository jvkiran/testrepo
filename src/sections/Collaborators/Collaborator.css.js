import styled from 'styled-components'
import { colors, responsive, fonts } from '../../styles'
import { StyledMember, QuoteWrap, Quote, QuoteLink } from '../People/Member.css'

export const StyledCollaborator = styled(StyledMember)`
    margin-left: 0;
    position: relative;
    flex: 0 0 100%;

    @media screen and (${responsive.xs.min}) {
        padding: 1rem;
    }

    @media screen and (${responsive.sm.min}) {
        flex-grow: 0;
    }

    @media screen and (${responsive.md.min}) {
        flex-basis: calc(100% / 4.5 - 3rem);
    }
`

export const StyledDescription = styled(Quote)`
    margin-left: -40%;
    width: 200%;
    text-align: left;

    &:empty {
        display: none;
    }
`

export const StyledDescriptionTitle = styled.h3`
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});
    margin-top: 0;
    margin-bottom: 0.5rem;
`

export const StyledCollaboratorWrap = styled(QuoteWrap)`
    background: rgba(${colors.white}, 0.01)
        linear-gradient(
            to bottom right,
            rgba(${colors.white}, 0) 0%,
            rgba(${colors.white}, 0.15) 100%
        );
    border: 0.1rem solid rgba(${colors.pink}, 0.4);
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: auto;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.5);
    transition: 0.4s ease-out;
    transform: translate3d(0, 0, 0);

    svg {
        width: 120px;
        max-height: 60px;
        fill: rgb(${colors.lightGrey});
        transition: fill 0.4s ease-out;
        position: relative;
        z-index: 1;
    }

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
            transform: translate(0, -50%) scale(1);
        }
    }
`

export const StyledDescriptionLink = styled(QuoteLink)``
