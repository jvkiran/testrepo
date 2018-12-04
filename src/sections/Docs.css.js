import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { colors, fonts } from '../styles'
import mantaray from '@oceanprotocol/art/mantaray/mantaray-back.svg'

export const StyledSection = styled(Section)`
    background: url(${mantaray}) no-repeat center 4rem;
    background-size: cover;
`

export const StyledTitle = styled(Title)`
    text-align: left;
    margin-bottom: 2rem;
`

export const StyledParagraph = styled(Paragraph)``

export const DocsList = styled.article`
    margin: 0;
    padding: 1.5rem;
    background: rgba(${colors.dimmedGrey}, 0.9);

    h2 {
        font-size: ${fonts.size.h4};
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    ul {
        margin: 0;
        margin-bottom: 1.5rem;
    }

    li {
    }
`
