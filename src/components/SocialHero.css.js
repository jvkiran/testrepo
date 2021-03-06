import styled from 'styled-components'
import { colors, fonts } from '../styles'

export const SocialBand = styled.aside`
    margin-top: 2rem;
    margin-left: -1rem;
`

export const SocialLink = styled.a`
    padding: 0.5rem 1rem;
    margin: 1% 0;
    color: rgb(${colors.white});
    font-size: ${fonts.size.mini};
    font-family: ${fonts.family.button};
    font-weight: ${fonts.fontWeight.title};
    background: ${({ light }) =>
        light ? `rgba(${colors.white}, .95)` : `rgba(${colors.black}, .95)`};
    display: inline-block;
    margin-left: 0.5rem;

    &:first-child {
        margin-left: 0;
    }

    &:hover,
    &:focus {
        color: ${({ light }) =>
            light ? `rgba(${colors.black}, 1)` : `rgba(${colors.white}, 1)`};
    }

    & svg {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-top: -0.2rem;
        margin-right: 0.3rem;
    }
`
