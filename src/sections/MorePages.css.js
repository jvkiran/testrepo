import styled from 'styled-components'
import Title from '../components/Title'
import Section from '../components/Section'
import { colors, fonts, layout, responsive, transitions } from '../styles'

export const StyledSection = styled(Section)`
    margin-bottom: 0;

    &,
    > div {
        padding: 0;
    }

    > div {
        @media screen and (${responsive.sm.min}) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex-direction: row;
        }
    }
`

export const StyledPage = styled.div`
    flex: 1 1 100%;
    margin-bottom: ${layout.pageFrame};
    position: relative;
    ${({ light }) => light && `border: .2rem solid rgb(${colors.dimmedGrey})`};

    a {
        display: block;
        padding: 3rem 2rem 6rem 2rem;
        background-color: ${({ backgroundColor }) =>
            backgroundColor
                ? `rgb(${backgroundColor})`
                : `rgb(${colors.darkGrey})`};
        background-image: ${({ backgroundImage }) =>
            backgroundImage ? `url(${backgroundImage})` : null};
        background-repeat: no-repeat;
        background-size: center -60%;
        background-size: cover;
        height: 100%;

        @media screen and (${responsive.sm.min}) {
            padding: 5rem 2rem 8rem 2rem;
        }

        /* Overlay to dim the background image */
        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 0;
            transition: ${transitions.base};
            background: ${({ light }) =>
                light
                    ? `rgba(${colors.white}, 0.6)`
                    : `rgba(${colors.black}, 0.45)`};
        }

        &:hover,
        &:focus {
            &:before {
                opacity: 0.2;
            }
        }

        &.active {
            opacity: 0.5;
            pointer-events: none;
        }
    }

    @media screen and (${responsive.sm.min}) {
        flex: 0 0 calc(33% - ${layout.pageFrame} / 2);
    }
`

export const StyledTitle = styled(Title)`
    font-size: ${fonts.size.h3} !important;
    margin: 0;
    position: relative;
    z-index: 1;
`

export const LearnMore = styled.span`
    display: block;
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.small};
    text-transform: uppercase;
    color: rgb(${colors.pink});
    position: absolute;
    left: 2rem;
    right: 2rem;
    bottom: 3rem;

    @media screen and (${responsive.sm.min}) {
        bottom: 5rem;
    }

    svg {
        fill: rgb(${colors.pink});
    }
`
