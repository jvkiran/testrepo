import styled from 'styled-components'
import { responsive, layout } from '../styles'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${({ center }) => (center ? 'center' : null)};
    max-width: ${({ maxWidth }) =>
        maxWidth ? `${layout.maxWidth[maxWidth]}` : null};
    margin: ${({ maxWidth }) => (maxWidth ? '0 auto' : null)};

    @media screen and (${responsive.sm.min}) {
        width: ${({ smallGutter, cellWidth }) =>
            smallGutter
                ? `calc(${cellWidth * 100}% - 1rem)`
                : `calc(${cellWidth * 100}% - 3rem)`};
    }
`
