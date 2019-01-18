import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { colors, responsive } from '../styles'

export const StyledSection = styled(Section)`
    background-size: cover;
    background-position: center -5rem;
    min-height: 550px;
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
        margin-bottom: 1.5rem;
    }
`
