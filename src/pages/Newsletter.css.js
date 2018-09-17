import styled from 'styled-components'
import Section from '../components/Section'
import SubscribeForm from '../components/SubscribeForm'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'

export const StyledSection = styled(Section)`
    min-height: 87vh;
    display: flex;
    align-items: center;

    ${ContentRow} { /* stylelint-disable-line */
        max-width: 45rem;
    }

    ${Title} { /* stylelint-disable-line */
        margin-bottom: 1rem;
        margin-top: -4rem;
    }

    ${SubTitle} { /* stylelint-disable-line */
        color: rgb(${colors.lightGrey});
        margin-bottom: 6rem;
        text-align: center;
    }
`

export const StyledSubscribeForm = styled(SubscribeForm)`
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
`
