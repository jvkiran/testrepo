import styled from 'styled-components'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Section from '../components/Section'
import { colors } from '../styles'

export const StyledSubTitle = styled(SubTitle)`
    flex: 0 0 100%;
`

export const StyledSection = styled(Section)`
    ${Title} {
        margin-bottom: 1rem;
    }

    ${SubTitle} {
        color: rgb(${colors.lightGrey});
        margin-bottom: 3rem;
    }
`

export const StyledFaqRow = styled.div`
    margin-top: 20px;
    display: flex;
    flex-flow: wrap;

    &:first-child {
        margin-top: 0;
    }

    &:after {
        clear: both;
    }
`

export const StyledQaA = styled.div`
    width: calc(100% - 2rem);
`
