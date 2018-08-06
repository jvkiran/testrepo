import styled from 'styled-components'

const Paragraph = styled.p`
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: ${({ center }) => (center ? 'center' : null)};
    white-space: pre-line;
`

export default Paragraph
