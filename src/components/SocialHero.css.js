import styled from 'styled-components'
import { colors, fonts } from '../styles'

export const SocialBand = styled.aside`
    margin-top: 2rem;
`

export const SocialLink = styled.a`
    display: inline-block;
    padding: .5rem 1rem;
    margin: .25rem 0;
    margin-left: .5rem;
    color: rgb(${colors.dimmedGrey});
    font-size: ${fonts.size.small};
    font-family: ${fonts.family.button};
    font-weight: ${fonts.fontWeight.title};
    background: ${({ important }) => important ? `rgba(${colors.purple}, .9)` : `rgba(${colors.darkPurple}, .8)`};

    &:first-child {
        margin-left: 0;
    }

    &:hover,
    &:focus {
        color: rgba(${colors.white}, 1);
    }

    & img {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-top: -.2rem;
        margin-right: .2rem;
    }
`
