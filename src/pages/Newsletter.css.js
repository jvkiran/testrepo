import styled from 'styled-components'
import Section from '../components/Section'
import FormNewsletter from '../components/FormNewsletter'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'

export const StyledSection = styled(Section)`
    display: flex;
    align-items: center;

    ${ContentRow} {
        /* stylelint-disable-line */
        max-width: 45rem;
    }

    ${Title} {
        /* stylelint-disable-line */
        margin-bottom: 1rem;
    }

    ${SubTitle} {
        /* stylelint-disable-line */
        color: rgb(${colors.lightGrey});
        margin-bottom: 6rem;
        text-align: center;
    }
`

export const StyledFormNewsletter = styled(FormNewsletter)`
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
`
