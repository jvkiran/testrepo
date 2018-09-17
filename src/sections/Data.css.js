import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import { responsive, colors, transitions, fonts } from '../styles'

export const StyledSection = styled(Section)`
    p:last-child {
        margin-bottom: 0;
    }

    .Collapsible__contentInner {
        border-top: 1px solid rgba(${colors.lightGrey}, .4);
        padding-top: 1.5rem;
    }

    .Collapsible__trigger {
        cursor: pointer;
        transition: ${transitions.base};
        display: block;
        font-family: ${fonts.family.title};
        font-weight: ${fonts.fontWeight.title};
        line-height: ${fonts.lineHeight.title};
        font-size: ${fonts.size.large};
        padding-bottom: 1.5rem;
        text-align: center;

        @media screen and (${responsive.sm.min}) {
            text-align: left;
        }

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
        }

        &:before {
            content: '+';
            font-size: 2.25rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: .5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
        }

        &.is-open:before {
            content: '-';
            top: -.25rem;
        }
    }
`

export const StyledGrid = styled(Grid)`
    margin-top: 6rem;

    @media screen and (${responsive.sm.min}) {
        margin-top: 10rem;
    }
`

export const StyledFirstGrid = styled(StyledGrid)`
    text-align: center;
    margin-top: 3rem;

    @media screen and (${responsive.sm.min}) {
        margin-top: 6rem;
        text-align: left;

        > div:first-child {
            order: 2;
        }
    }
`

export const StyledLocked = styled.img`
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 300px;
    max-height: 220px;
    height: auto;

    @media screen and (${responsive.sm.min}) {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        transform: scale(1.2);
    }
`

export const StyledSecondGrid = styled(StyledGrid)`
    text-align: center;

    @media screen and (${responsive.sm.min}) {
        text-align: left;
    }
`

export const StyledUnalyzed = styled.img`
    width: auto;
    height: 100%;
    max-height: 220px;
    margin: 0 auto;
    padding: 0 4rem;

    @media screen and (${responsive.sm.min}) {
        padding: 0;
        margin: 0;
        max-height: 260px;
        transform: scale(1.5);
    }
`

export const StyledThirdGrid = styled(StyledGrid)`
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 34rem;

    .Collapsible {
        .Collapsible__contentInner {
            text-align: left;
        }

        .Collapsible__trigger {
            text-align: center;
        }
    }
`

export const StyledUnavailable = styled.img`
    margin-bottom: 2rem;
    margin-left: -10rem;
    margin-right: -10rem;
    max-width: none;
`

export const StyledContentRow = styled(ContentRow)`
    max-width: 50rem;
`
