import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import { colors, fonts } from '../styles'

export const StyledSection = styled(Section)`
    &,
    > div {
        padding: 0;
    }

    a {
        display: block;
        padding: 4rem 1rem;

        &:hover,
        &:focus {
            background: rgba(${colors.white}, .05);
        }
    }
`

export const StyledTitle = styled(Title)`
    font-size: ${fonts.size.h2};
    margin-bottom: 1rem;
    margin-top: 0;
`

export const StyledSubTitle = styled(SubTitle)`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.lightGrey});
    margin-bottom: 0;
`
