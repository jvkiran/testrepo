import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { colors, fonts, transitions, responsive } from '../styles'

export const StyledSection = styled(Section)`
    background-size: cover;
    background-position: center -5rem;
    min-height: 550px;
    margin-left: -2.5rem;
    width: calc(100% + 5rem);
    display: flex;
    align-items: center;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(${colors.white}, 0.75);
    }
`

export const StyledGrid = styled(Grid)`
    align-items: center;
`

export const StyledTitle = styled(Title)`
    text-align: left;
    margin-bottom: 2rem;
`

export const StyledParagraph = styled(Paragraph)`
    background: rgba(${colors.white}, 0.2);

    @media screen and (${responsive.sm.min}) {
        margin-bottom: 0;
    }
`

export const DocsList = styled.article`
    margin: 0;
    padding: 1.5rem;
    background: rgb(${colors.white});
    border-radius: 0.2rem;
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(${colors.black}, 0.07);

    h2 {
        font-size: ${fonts.size.h4};
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    ul {
        margin: 0;
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
        list-style: none;

        li {
            position: relative;
            display: block;

            + li {
                margin-top: 0.2rem;
            }

            &:before {
                content: '▪';
                top: -2px;
                position: absolute;
                left: -1.5rem;
                color: rgb(${colors.lightGrey});
                user-select: none;
            }
        }
    }
`

export const DocsLink = styled.a`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.small};
    font-weight: ${fonts.fontWeight.title};
    line-height: 1.38;
    text-transform: uppercase;
    margin: 0;
    border-radius: 5px;
    transition: ${transitions.short};
    color: rgb(${colors.white});
    background: linear-gradient(
        to right,
        rgb(${colors.purple}),
        rgb(${colors.pink})
    );
    box-shadow: 0 9px 18px 0 rgba(0, 0, 0, 0.1);

    &:hover,
    &:focus {
        background: linear-gradient(
            to right,
            rgb(${colors.purple}),
            rgb(${colors.pink})
        );
        text-decoration: none;
        transform: translate3d(0, -0.05rem, 0);
        box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.1);
    }

    &:active {
        background: linear-gradient(
            to right,
            rgb(${colors.purple}),
            rgb(${colors.pink})
        );
        transition: none;
        transform: none;
        box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.1);
    }
`
