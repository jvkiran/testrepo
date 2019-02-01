import styled from 'styled-components'
import { Line } from '../components/SectionHeader.css'
import { layout, fonts, colors } from '../styles'
import Button from '../components/Button'

export const StyledButton = styled(Button)`
    margin: auto;
    min-width: 20rem;
    text-align: center;
    padding: calc(${layout.spacer} / 1.5) ${layout.spacer};
    font-size: ${fonts.size.base};
`

export const Fractal = styled.p`
    color: rgb(${colors.dimmedGrey});
    font-size: ${fonts.size.base};
    text-align: center;

    a {
        font-family: ${fonts.family.button};
        text-transform: uppercase;
        font-size: ${fonts.size.small};
        display: inline-block;
        margin-left: 0.5rem;

        svg {
            fill: currentColor;
        }
    }
`

export const Divider = styled(Line)`
    margin-top: calc(${layout.spacer} * 1.5);
    margin-bottom: calc(${layout.spacer} * 1.5);
`
