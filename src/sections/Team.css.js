import styled from 'styled-components'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { colors, fonts, responsive, transitions } from '../styles'

export const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
`

export const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
    text-align: center;
`

export const StyledLine = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid rgba(${colors.white}, .25);

    @media screen and (${responsive.sm.max}) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export const StyledTeam = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: -2rem;

    .Collapsible {
        margin-left: 2rem;
        position: relative;
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
        margin-bottom: 1.5rem;
        text-align: center;
        color: rgb(${colors.lightGrey});

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

    .Collapsible__contentInner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left: -2rem;
    }
`

export const StyledMember = styled.div`
    position: relative;
    margin-left: 2rem;
    margin-bottom: 2rem;
    width: calc(100% / 2 - 3rem);

    @media screen and (${responsive.xs.min}) {
        width: calc(100% / 3 - 3rem);
    }

    @media screen and (${responsive.md.min}) {
        width: calc(100% / 4 - 3rem);
    }

    @media screen and (${responsive.lg.min}) {
        width: calc(100% / 5 - 3rem);
    }

    & > img {
        margin: 0;
        border-radius: 50%;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
        min-height: 141px;
        background: rgb(${colors.lightGrey});
    }
`

export const StyledName = styled.h3`
    font-size: ${fonts.size.base};
    color: rgb(${colors.white});
    text-align: center;
    margin-top: .75rem;
    margin-bottom: .35rem;
`

export const StyledLinks = styled.div`
    text-align: center;

    &:empty {
        display: none;
    }
`

export const StyledIcon = styled.a`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2px;
    display: inline-block;
    margin-left: .25rem;
    margin-right: .25rem;
    opacity: .5;

    &:hover,
    &:focus {
        opacity: 1;
    }

    & img {
        width: 100%;
        height: 100%;
    }
`

export const StyledCompanies = styled.div`
    margin: 4rem 0 0 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const StyledCompanyLogo = styled.a`
    display: inline-block;
    margin: 0 2rem;

    img {
        height: 2rem;

        @media screen and (${responsive.sm.max}) {
            height: 1rem;
        }
    }
`

export const StyledActions = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (${responsive.sm.max}) {
        flex-direction: column;
    }
`

export const StyledButton = styled(Button)`
    background: rgb(${colors.white});
    color: rgb(${colors.dark});
    border-radius: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    margin: 1rem;
    font-family: ${fonts.family.button};
    box-shadow: 2px 2px 30px 4px rgba(0, 0, 0, .5);

    &:active,
    &:hover,
    &:focus {
        background: rgb(${colors.white});
    }

    @media screen and (${responsive.sm.max}) {
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
    }
`
