import styled from 'styled-components'
import { responsive, layout } from '../styles'

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
    width: ${({ width }) => `${width * 100}%`};
    max-width: ${({ maxWidth }) => (maxWidth ? `${layout.maxWidth[maxWidth]}` : 'auto')};
    margin: ${({ maxWidth }) => (maxWidth ? '0 auto' : null)};

    & > img {
        width: ${({ center }) => (center ? 'auto' : '100%')};
        height: ${({ center }) => (center ? '100%' : 'auto')};
    }

    @media screen and (${responsive.sm.max}) {
        width: 100%;
    }
`

export default Cell
