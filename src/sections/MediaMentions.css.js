import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Logo from '../components/Logo'
import { fonts, colors, responsive } from '../styles'

export const StyledSection = styled(Section)`
    > div {
        padding-top: 4rem;
        padding-bottom: 3rem;
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

    /* visual weight tweaks */
    &.cointelegraph {
        transform: scale(1.3);
        transform-origin: center;
    }
`

export const StyledGrid = styled(Grid)`
    margin-bottom: 0;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    width: calc(100% + 1rem);

    > div {
        flex: 1 1 calc(100% / 2 - 3rem);
        margin: 0.5rem;

        @media screen and (${responsive.md.min}) {
            flex-basis: calc(100% / 3 - 4rem);
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2rem 0.5rem;
        border: 1px solid rgb(${colors.dimmedGrey});
        border-radius: 0.1rem;
        transition: border 0.2s ease-out;

        &:hover,
        &:focus {
            transform: none;
            border-color: rgb(${colors.pink});

            ${StyledLogo} {
                fill: rgb(${colors.pink});
            }
        }
    }
`
