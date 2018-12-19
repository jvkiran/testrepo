import styled from 'styled-components'
import Button from '../components/Button'
import { gradients, colors, responsive, fonts } from '../styles'

export const ContributionPlatforms = styled.div`
    margin-bottom: 4rem;

    @media (${responsive.md.min}) {
        display: flex;
        justify-content: space-between;
    }
`

export const PlatformButton = styled(Button)`
    background: rgb(${colors.grey});
    font-size: ${fonts.size.small};
    padding: 1rem 2rem;
    width: auto;
`

export const Actions = styled.footer`
    width: calc(100% - 4rem);
    border-top: 1px solid rgb(${colors.grey});
    padding-top: 2rem;
    position: absolute;
    left: 2rem;
    bottom: 2rem;
`

export const ContributionPlatform = styled.a`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 2rem;
    padding-bottom: 7rem;
    border-radius: 0.1rem;
    background: rgb(${colors.black});
    margin-bottom: 2rem;
    color: rgb(${colors.lightGrey});
    position: relative;

    p {
        width: 100%;
    }

    ul {
        margin-bottom: 2rem;
    }

    @media (${responsive.md.min}) {
        flex: 0 1 48%;
    }

    svg {
        fill: rgb(${colors.grey});
        max-width: 10rem;
        width: auto;
        height: 4rem;
        display: block;
        margin-bottom: 1rem;
    }

    &:first-child {
        background: ${gradients.main};
        color: rgb(${colors.white});

        svg {
            fill: rgb(${colors.darkPurple});
        }

        ${Actions} {
            border-top-color: rgb(${colors.darkPurple});
        }

        ${PlatformButton} {
            background: rgb(${colors.darkPurple});
        }
    }
`
