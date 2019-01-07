import styled from 'styled-components'
import { layout } from '../styles'

export const StyledBounties = styled.aside`
    min-height: 33px;
    ${({ center }) => center && `text-align: center`};

    a {
        margin-bottom: calc(${layout.spacer} / 2);
    }
`
