import styled from 'styled-components'
import { colors, fonts, responsive } from '../../styles'

export const StyledMessage = styled.p`
    position: absolute;
    text-align: center;
    margin-top: 1rem;
    font-size: ${fonts.size.small};
    width: calc(100% - 12rem);
    color: rgb(${colors.red});

    @media screen and (${responsive.sm.max}) {
        width: calc(100% - 2rem);
    }
`

export const Gdpr = styled.div`
    margin-top: 2rem;
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});
`
