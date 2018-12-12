import styled from 'styled-components'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Title from '../components/Title'
import { fonts, colors } from '../styles'

export const StyledSection = styled(Section)``

export const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
    font-size: ${fonts.size.h4};
    color: rgb(${colors.lightGrey});
`

export const StyledGrid = styled(Grid)`
    margin-bottom: 0;
`
