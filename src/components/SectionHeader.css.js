import styled from 'styled-components'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import { colors, responsive } from '../styles'

export const StyledHeader = styled.header`
    margin-bottom: 4rem;
`

export const StyledTitle = styled(Title)`
    margin-bottom: 0;
    z-index: 1;
    position: relative;
`

export const StyledParagraph = styled(Paragraph)`
    margin-top: 2rem;
    margin-bottom: 0;
    color: ${({ white }) =>
        white ? `rgb(${colors.white})` : `rgb(${colors.black})`};
    z-index: 1;
    position: relative;
`

export const Line = styled.div`
    width: 100%;
    margin-top: 2rem;
    border-bottom: 1px solid rgba(${colors.white}, 0.25);

    @media screen and (${responsive.sm.min}) {
        margin-top: 4rem;
    }
`
