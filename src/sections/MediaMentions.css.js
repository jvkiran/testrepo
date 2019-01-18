import styled from 'styled-components'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Logo from '../components/Logo'
import { fonts, layout, colors, responsive } from '../styles'

export const StyledTitle = styled(Title)`
    margin-bottom: calc(${layout.spacer} / 2);
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
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    width: calc(100% + 1rem);

    > div {
        flex: 1 1 calc(100% / 2 - 3rem);
        margin: 0.5rem;

        @media screen and (${responsive.sm.min}) {
            flex-basis: calc(100% / 3 - 4rem);
        }

        @media screen and (${responsive.md.min}) {
            flex-basis: calc(100% / 6 - 4rem);
        }
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2rem 0.5rem 0 0.5rem;

        &:hover,
        &:focus {
            transform: none;

            ${StyledLogo} {
                fill: rgb(${colors.pink});
            }
        }
    }
`
