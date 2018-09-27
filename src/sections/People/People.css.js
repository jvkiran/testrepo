import styled from 'styled-components'
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import Grid from '../../components/Grid'
import { colors, fonts, responsive } from '../../styles'

export const StyledTitle = styled(Title)`
    margin-bottom: 2rem;
`

export const StyledSubTitle = styled(SubTitle)`
    margin-top: -.5rem;
`

export const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
`

export const SubHeader = styled(Grid)`
    margin-bottom: 4rem;
`

export const Line = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid rgba(${colors.white}, .25);

    @media screen and (${responsive.sm.max}) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export const Actions = styled.div`
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
