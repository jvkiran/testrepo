import styled, { keyframes } from 'styled-components'
import fadeInUp from 'react-animations/lib/fade-in-up'
import Section from '../components/Section'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { colors, responsive, fonts, layout } from '../styles'

export const StyledHero = styled(Section)`
    background: rgb(${colors.black});
    padding-top: 0;
    position: relative;
    overflow: hidden;
    min-height: 100vh;

    @media screen and (${responsive.sm.min}) {
        min-height: calc(100vh - (${layout.pageFrame} * 2));
    }

    > div {
        padding-top: 2rem;
        padding-bottom: 2rem;
        min-height: auto;
        position: static;
    }
`

export const StyledHeroContent = styled.div`
    position: relative;
    z-index: 2;

    @media screen and (${responsive.sm.min}) {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - (${layout.pageFrame} * 8));
    }
`

export const animation = keyframes`
    ${fadeInUp}
`

export const StyledTagline = styled(Title)`
    text-align: center;
    color: rgb(${colors.white});
    animation: ${animation} 1s backwards;
    font-size: ${fonts.size.h3};
    margin-bottom: 2rem;

    @media screen and (${responsive.sm.min}) {
        font-size: ${fonts.size.h2};
        text-align: left;
    }
`

export const StyledParagraph = styled(Paragraph)`
    animation: ${animation} 1.5s backwards;
    text-align: center;

    @media screen and (${responsive.sm.min}) {
        text-align: left;
    }
`

export const StyledVideoThumbnail = styled.div`
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .6);
    cursor: pointer;
    max-height: 180px;
    background: rgb(${colors.black});
    animation: ${animation} 1.5s .5s backwards;

    @media screen and (${responsive.sm.min}) {
        margin-top: 3rem;
    }

    img {
        opacity: .9;
        transition: .2s ease-out;
        border: .4rem solid rgb(${colors.white});
    }

    &:hover,
    &:focus {
        transform: translate3d(0, -.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .6);

        img {
            opacity: 1;
        }
    }
`

export const StyledSocialHero = styled.aside`
    margin-top: 1rem;

    & a {
        animation: ${animation} 1.5s 1s backwards;

        &:nth-child(2) {
            animation-delay: 1.25s;
        }

        &:nth-child(3) {
            animation-delay: 1.5s;
        }

        &:nth-child(4) {
            animation-delay: 1.75s;
        }

        &:nth-child(5) {
            animation-delay: 2s;
        }

        &:nth-child(6) {
            animation-delay: 2.25s;
        }
    }
`
