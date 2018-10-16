import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { fonts, colors } from '../styles'

export const StyledSection = styled(Section)`
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
        margin-bottom: 3rem;
    }
`

export const StyledContent = styled(ContentRow)`
    & h1 {
        font-size: ${fonts.size.h3};
    }

    & h2 {
        font-size: ${fonts.size.h4};
    }

    & h3 {
        font-size: ${fonts.size.h5};
    }
`
