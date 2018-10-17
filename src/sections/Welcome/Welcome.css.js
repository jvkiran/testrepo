import styled, { keyframes } from 'styled-components'
import fadeInUp from 'react-animations/lib/fade-in-up'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import ContentRow from '../../components/ContentRow'
import { colors, responsive, fonts, layout, gradients } from '../../styles'

export const Hero = styled(Section)`
    background: rgb(${colors.black});
    padding-top: 0;
    position: relative;
    overflow: hidden;

    @media screen and (${responsive.sm.min}) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        min-height: 42rem;
        height: calc(100vh - (${layout.pageFrame} * 2));
    }

    > div {
        padding-top: 2rem;
        padding-bottom: 2rem;
        min-height: auto;
        position: static;
    }
`

export const HeroContent = styled(ContentRow)`
    position: relative;
    z-index: 2;
    margin-top: 4rem;
    text-align: center;

    @media screen and (${responsive.sm.min}) {
        margin-top: 2rem;
    }

    @media screen and (${responsive.md.min}) {
        text-align: left;
    }
`

export const HeroGrid = styled.div`
    @media screen and (${responsive.md.min}) {
        display: flex;
        justify-content: space-between;
    }
`

export const HeroGridCell = styled.div`
    @media screen and (${responsive.md.min}) {
        &:first-child {
            flex: 0 0 55%;
        }

        &:last-child {
            flex: 0 0 35%;
        }
    }
`

export const animation = keyframes`
    ${fadeInUp}
`

export const StyledTagline = styled(Title)`
    color: rgb(${colors.white});
    animation: ${animation} 1s backwards;
    font-size: ${fonts.size.h3};
    margin-bottom: 2rem;

    @media screen and (${responsive.sm.min}) {
        font-size: ${fonts.size.h2};
    }

    @media screen and (${responsive.md.min}) {
        text-align: left;
    }
`

export const StyledParagraph = styled(Paragraph)`
    animation: ${animation} 1.5s backwards;
`

export const StyledVideoThumbnail = styled.picture`
    display: block;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.6);
    cursor: pointer;
    max-height: 180px;
    background: rgb(${colors.black});
    animation: ${animation} 1.5s 0.5s backwards;

    @media screen and (${responsive.md.min}) {
        max-width: none;
        margin-top: 1rem;
    }

    img {
        opacity: 0.9;
        transition: 0.2s ease-out;
        border: 0.4rem solid rgb(${colors.white});
    }

    &:hover,
    &:focus {
        transform: translate3d(0, -0.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, 0.6);

        img {
            opacity: 1;
        }
    }
`

export const Cta = styled.div`
    margin-bottom: 2rem;

    @media screen and (${responsive.md.min}) {
        margin-bottom: 1rem;
    }
`

export const StyledButton = styled.a`
    padding: 0.5rem 1rem;
    margin: 1% 0;
    color: rgb(${colors.white});
    font-size: ${fonts.size.small};
    text-transform: uppercase;
    font-family: ${fonts.family.button};
    font-weight: ${fonts.fontWeight.button};
    background: ${({ important }) =>
        important ? `${gradients.main}` : `rgba(${colors.grey}, .95)`};
    display: inline-block;
    margin-left: 0.5rem;
    animation: ${animation} 1.5s 0.5s backwards;
    border-radius: 0.1rem;

    &:first-child {
        animation-delay: 0;
        margin-left: 0;
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
