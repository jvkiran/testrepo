import styled from 'styled-components'
import Grid from '../../components/Grid'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { colors, responsive } from '../../styles'

export const StyledGrid = styled(Grid)`
    margin-bottom: 2rem;
`

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
    border-bottom: 1px solid rgba(${colors.white}, 0.25);

    @media screen and (${responsive.sm.max}) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`
