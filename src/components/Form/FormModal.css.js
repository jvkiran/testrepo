import styled from 'styled-components'
import { colors, fonts, layout } from '../../styles'

export const StyledMessage = styled.p`
    margin-top: 3rem;
    color: rgb(${colors.white});
    background: ${({ success }) =>
        success ? `rgb(${colors.green})` : `rgb(${colors.red})`};
    padding: calc(${layout.spacer} / 2);
    border-radius: 0.1rem;
    font-family: ${fonts.family.button};
`

export const Gdpr = styled.div`
    margin-top: 2rem;
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});
`
