import styled from 'styled-components'
import Section from '../components/Section'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import { colors, layout, responsive } from '../styles'
import fishfail from '../assets/misc/fishfail.gif'

export const StyledButton = styled(Button)`
    display: inline-block;
`

export const StyledSection = styled(Section)`
    background: rgb(${colors.lightGrey});
    text-align: center;
    min-height: calc(100vh - (82px + (${layout.pageFrame} * 3)));
    max-height: 900px;
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        margin-top: ${layout.pageFrame};
    }

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
