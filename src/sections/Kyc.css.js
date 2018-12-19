import styled from 'styled-components'
import Button from '../components/Button'
import Grid from '../components/Grid'
import { Line } from '../components/SectionHeader.css'
import { colors, responsive, fonts, layout } from '../styles'

export const ContributionPlatforms = styled.div`
    margin-bottom: calc(${layout.spacer} * 2);

    @media (${responsive.md.min}) {
        display: flex;
        justify-content: space-between;
    }
`

export const PlatformButton = styled(Button)`
    font-size: ${fonts.size.small};
    padding: calc(${layout.spacer} / 2) ${layout.spacer};
    width: auto;
    position: absolute;
    left: ${layout.spacer};
    bottom: ${layout.spacer};
    transition: 0.2s ease-out;

    &:hover,
    &:focus {
        transform: none;
    }
`

export const PlatformIntro = styled.h5`
    width: 100%;
    color: rgb(${colors.black});
    margin-top: 0;
`

export const ContributionPlatform = styled.a`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: ${layout.spacer};
    padding-bottom: 6rem;
    border-radius: 0.2rem;
    background: rgba(${colors.grey}, 0.6);
    margin-bottom: ${layout.spacer};
    color: rgb(${colors.dimmedGrey});
    position: relative;

    p {
        width: 100%;
    }

    ul {
        margin-bottom: ${layout.spacer};
    }

    @media (${responsive.md.min}) {
        flex: 0 1 48%;
        margin-bottom: 0;
    }

    svg {
        fill: rgb(${colors.lightGrey});
        max-width: 12rem;
        width: auto;
        height: 2rem;
        display: block;
        margin-bottom: ${layout.spacer};
    }

    &:first-child {
        background: rgb(${colors.white});
        color: rgb(${colors.darkGrey});

        &:hover,
        &:focus {
            ${PlatformButton} {
                background: rgb(${colors.black});
                color: rgb(${colors.white});
            }
        }

        svg {
            fill: rgb(${colors.lightGrey});
        }

        ${PlatformButton} {
        }
    }

    &:last-child {
        ${PlatformButton} {
            background: rgb(${colors.darkGrey});
        }

        ${PlatformIntro} {
            color: rgb(${colors.dimmedGrey});
        }
    }

    &:hover,
    &:focus {
        ${PlatformButton} {
            background: rgb(${colors.white});
            color: rgb(${colors.black});
        }
    }
`

export const TokenInfo = styled(Grid)``

export const Divider = styled(Line)`
    margin-bottom: calc(${layout.spacer} * 2);
`
