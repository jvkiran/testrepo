import styled from 'styled-components'
import { colors, fonts, responsive } from '../../styles'

export const StyledMember = styled.div`
    position: relative;
    margin-left: 2rem;
    margin-bottom: 2rem;
    width: calc(100% / 2 - 3rem);

    @media screen and (${responsive.xs.min}) {
        width: calc(100% / 3 - 3rem);
    }

    @media screen and (${responsive.md.min}) {
        width: calc(100% / 4 - 3rem);
    }

    @media screen and (${responsive.lg.min}) {
        width: calc(100% / 5 - 3rem);
    }

    & > img {
        margin: 0;
        border-radius: 50%;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
        min-height: 141px;
        background: rgb(${colors.lightGrey});
    }
`

export const Name = styled.h3`
    font-size: ${fonts.size.base};
    color: rgb(${colors.white});
    text-align: center;
    margin-top: .75rem;
    margin-bottom: .35rem;
`

export const Quote = styled.p`
    margin: 0;
    font-size: ${fonts.size.small};
    color: rgb(${colors.white});
    position: absolute;
    top: 50%;
    left: -1rem;
    right: -1rem;
    z-index: 2;
    background: rgb(${colors.darkGrey});
    border: .1rem solid rgb(${colors.pink});
    border-radius: 2px;
    padding: .75rem 1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .2);
    opacity: 0;
    transform: translate(0, -50%) scale(0);
    transform-origin: center;
    transition: .2s ease-out;

    @media (${responsive.sm.min}) {
        font-size: ${fonts.size.base};
    }

    @media (${responsive.md.min}) {
        font-size: ${fonts.size.small};
    }

    &:empty {
        display: none;
    }
`

export const QuoteWrap = styled.div`
    position: relative;

    &:hover,
    &:focus {
        ${Quote} { /* stylelint-disable-line */
            opacity: 1;
            transform: translate(0, -50%) scale(1);
        }
    }
`

export const Position = styled(Name)`
    color: rgb(${colors.lightGrey});
    margin-top: 0;
`
