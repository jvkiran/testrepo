import styled from 'styled-components'
import { colors, fonts, transitions } from '../styles'

export const Container = styled.button`
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: relative;
    display: block;
    width: fit-content;
    padding: 15px 35px;
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.base};
    font-weight: ${fonts.fontWeight.title};
    line-height: 1.38;
    text-transform: uppercase;
    margin: 0;
    border-radius: 5px;
    transition: ${transitions.short};
    color: rgb(${colors.white});
    background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, .1);

    &:hover,
    &:focus {
        background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
        text-decoration: none;
        transform: translate3d(0, -.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(0, 0, 0, .1);
    }

    &:active {
        background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));
        transition: none;
        transform: none;
        box-shadow: 0 5px 18px 0 rgba(0, 0, 0, .1);
    }
`

export const Children = styled.div`
    opacity: ${({ fetching }) => (fetching ? 0 : 1)};
`
