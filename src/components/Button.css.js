import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { colors, fonts, transitions, layout } from '../styles'

const backgrounds = (primary, white, black) => {
    if (primary) {
        return `linear-gradient(to right, rgb(${colors.purple}), rgb(${
            colors.pink
        }))`
    }

    if (white) {
        return `rgba(${colors.white}, 0.95)`
    }

    if (black) {
        return `rgba(${colors.black}, 0.95)`
    }

    return `rgba(${colors.grey}, 0.95)`
}

export const StyledButton = styled.button`
    border: none;
    font: inherit;
    cursor: pointer;
    outline: none;
    position: relative;
    display: block;
    width: fit-content;
    padding: ${({ small }) =>
        small
            ? `calc(${layout.spacer} / 3) calc(${layout.spacer} / 2)`
            : `calc(${layout.spacer} / 2) ${layout.spacer}`};
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.small};
    font-weight: ${fonts.fontWeight.button};
    line-height: 1;
    text-transform: uppercase;
    margin: ${({ center }) => (center ? `0 auto` : 0)};
    border-radius: ${layout.borderRadius};
    transition: ${transitions.short};
    color: ${({ white }) =>
        white ? `rgb(${colors.black})` : `rgb(${colors.white})`};
    background: ${({ primary, white, black }) =>
        backgrounds(primary, white, black)};
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.1);
    border: ${({ border }) => border && `0.08rem solid rgb(${colors.pink})`};

    &:hover,
    &:focus {
        background: ${({ primary, white, black }) =>
            backgrounds(primary, white, black)};
        text-decoration: none;
        transform: translate3d(0, -0.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, 0.1);
    }

    &:active {
        background: ${({ primary, white, black }) =>
            backgrounds(primary, white, black)};
        transition: none;
        transform: none;
        box-shadow: 0 5px 18px 0 rgba(${colors.black}, 0.1);
    }

    svg {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-top: -0.2rem;
        margin-right: 0.3rem;
    }
`

StyledButton.a = StyledButton.withComponent('a')
StyledButton.Link = StyledButton.withComponent(Link)
