import styled from 'styled-components'
import { colors } from '../styles'

const Paragraph = styled.p`
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: ${({ center }) => (center ? 'center' : null)};
    ${({ white }) => white && `color: rgb(${colors.dimmedGrey});`};
    white-space: pre-line;
`

export default Paragraph
