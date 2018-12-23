import styled from 'styled-components'
import { colors, fonts, responsive } from '../../styles'

export const StyledMember = styled.div`
    position: relative;
    margin-left: 2rem;
    margin-bottom: 2rem;
    flex: 0 0 calc(100% / 2 - 3rem);

    @media screen and (${responsive.xs.min}) {
        flex-basis: calc(100% / 3 - 3rem);
    }

    @media screen and (${responsive.md.min}) {
        flex-basis: calc(100% / 4 - 3rem);
    }

    /* stylelint-disable-next-line */
    ${({ member }) =>
        member &&
        `@media screen and (${responsive.lg.min}) {
                flex-basis: calc(100% / 5 - 3rem);
        }`};
`

export const Name = styled.h3`
    font-size: ${fonts.size.base};
    color: ${({ empty }) =>
        empty ? `rgb(${colors.grey})` : `rgb(${colors.white})`};
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
`

export const Position = styled(Name)`
    color: rgb(${colors.lightGrey});
    margin-top: 0;
`

export const Quote = styled.div`
    margin: 0;
    font-size: ${fonts.size.mini};
    color: rgb(${colors.white});
    position: absolute;
    top: 50%;
    left: -1rem;
    right: -1rem;
    z-index: 2;
    background: rgb(${colors.darkGrey});
    border: 0.1rem solid rgb(${colors.pink});
    border-radius: 2px;
    padding: 0.75rem 1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.2);
    opacity: 0;
    transform: translate(0, -50%) scale(0);
    transform-origin: center;
    transition: 0.2s ease-out;

    &:empty {
        display: none;
    }
`

export const QuoteWrap = styled.div`
    position: relative;

    &:hover,
    &:focus {
        ${Quote} {
            opacity: 1;
            transform: translate(0, -50%) scale(1);
        }
    }
`

export const QuoteLink = styled.a`
    display: block;
    margin-top: 0.5rem;
`
