import styled from 'styled-components'
import Section from '../components/Section'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { fonts, colors } from '../styles'

export const StyledSection = styled(Section)`
    ${ContentRow} { /* stylelint-disable-line */
        max-width: 45rem;
    }

    ${SubTitle} { /* stylelint-disable-line */
        margin-bottom: 3rem;
    }

    h1 {
        font-size: ${fonts.size.h2};
    }

    h2 {
        font-size: ${fonts.size.h4};
    }
`

export const Line = styled.div`
    border-top: 2px solid rgba(${colors.lightGrey}, .5);
    margin-bottom: 2rem;
    margin-top: 2rem;
`
