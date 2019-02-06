import styled from 'styled-components'
import { layout, fonts } from '../styles'
import Button from '../components/Button'

export const StyledButton = styled(Button)`
    margin: auto;
    min-width: 20rem;
    text-align: center;
    padding: calc(${layout.spacer} / 1.5) ${layout.spacer};
    font-size: ${fonts.size.base};
`
