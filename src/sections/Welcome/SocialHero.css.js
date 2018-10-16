import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const SocialBand = styled.aside`
    margin-top: 2rem;
    margin-left: -1rem;
`

export const SocialLink = styled.a`
    padding: .5rem 1rem;
    margin: 1% 0;
    color: rgb(${colors.white});
    font-size: ${fonts.size.mini};
    font-family: ${fonts.family.button};
    font-weight: ${fonts.fontWeight.title};
    background: ${({ important }) => important ? `rgba(${colors.purple}, .95)` : `rgba(${colors.black}, .95)`};
    display: inline-block;
    margin-left: .5rem;

    &:first-child {
        margin-left: 0;
    }

    &:hover,
    &:focus {
        color: rgba(${colors.white}, 1);
    }

    & svg {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-top: -.2rem;
        margin-right: .3rem;
    }
`
