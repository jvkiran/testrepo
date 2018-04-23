import styled from 'styled-components'
import { responsive, layout } from '../styles'

const Cell = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${({ center }) => (center ? 'center' : null)};
    max-width: ${({ maxWidth }) => (maxWidth ? `${layout.maxWidth[maxWidth]}` : null)};
    margin: ${({ maxWidth }) => (maxWidth ? '0 auto' : null)};

    @media screen and (${responsive.sm.min}) {
        width: ${({ width }) => `calc(${width * 100}% - 3rem)`};
        width: ${({ smallGutter, width }) => (smallGutter ? `calc(${width * 100}% - 1rem)` : `calc(${width * 100}% - 3rem)`)};
    }
`

export default Cell
