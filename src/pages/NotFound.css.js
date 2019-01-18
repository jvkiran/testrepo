import styled from 'styled-components'
import Section from '../components/Section'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import { colors } from '../styles'
import fishfail from '../assets/misc/fishfail.gif'

export const StyledButton = styled(Button)`
    display: inline-block;
`

export const StyledSection = styled(Section)`
    background: rgb(${colors.lightGrey});
    text-align: center;
    max-height: 900px;
    display: flex;
    align-items: center;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url(${fishfail}) no-repeat center center;
        background-size: cover;
        opacity: 0.5;
    }

    ${SubTitle} {
        /* stylelint-disable-line */
        margin-bottom: 4rem;
    }
`
