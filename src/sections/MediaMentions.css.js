import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Logo from '../components/Logo'
import { fonts, colors, responsive } from '../styles'

export const StyledSection = styled(Section)`
    > div {
        padding-top: 4rem;
        padding-bottom: 2rem;
    }
`

export const StyledTitle = styled(Title)`
    margin-bottom: 3rem;
    font-size: ${fonts.size.large} !important;
    color: rgb(${colors.lightGrey});
`

export const StyledLogo = styled(Logo)`
    max-height: 1.5rem;
    fill: rgb(${colors.grey});
    transition: 0.2s ease-out;
`

export const StyledGrid = styled(Grid)`
    margin-bottom: 0;

    > div {
        flex: 1 1 calc(100% / 2 - 3rem);
        margin-bottom: 2rem;

        @media screen and (${responsive.sm.min}) {
            flex-basis: calc(100% / 3 - 3rem);
        }

        @media screen and (${responsive.md.min}) {
            flex-basis: calc(100% / 4 - 3rem);
        }
    }

    a {
        &:hover,
        &:focus {
            ${StyledLogo} {
                fill: rgb(${colors.pink});
            }
        }
    }
`
