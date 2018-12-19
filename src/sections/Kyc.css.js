import styled from 'styled-components'
import Button from '../components/Button'
import { gradients, colors, responsive, fonts, layout } from '../styles'

export const ContributionPlatforms = styled.div`
    margin-bottom: calc(${layout.spacer} * 2);

    @media (${responsive.md.min}) {
        display: flex;
        justify-content: space-between;
    }
`

export const PlatformButton = styled(Button)`
    background: rgb(${colors.grey});
    font-size: ${fonts.size.small};
    padding: calc(${layout.spacer} / 2) ${layout.spacer};
    width: auto;
    position: absolute;
    left: ${layout.spacer};
    bottom: ${layout.spacer};
`

export const ContributionPlatform = styled.a`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: ${layout.spacer};
    padding-bottom: 5rem;
    border-radius: 0.1rem;
    background: rgb(${colors.darkGrey});
    margin-bottom: ${layout.spacer};
    color: rgb(${colors.lightGrey});
    position: relative;

    p {
        width: 100%;
    }

    ul {
        margin-bottom: ${layout.spacer};
    }

    @media (${responsive.md.min}) {
        flex: 0 1 48%;
    }

    svg {
        fill: rgb(${colors.lightGrey});
        max-width: 10rem;
        width: auto;
        height: 2.5rem;
        display: block;
        margin-bottom: ${layout.spacer};
    }

    &:first-child {
        background: ${gradients.main};
        color: rgb(${colors.white});

        svg {
            fill: rgb(${colors.darkPurple});
        }

        ${PlatformButton} {
            background: rgb(${colors.darkPurple});
        }
    }
`
