import styled from 'styled-components'
import { colors, layout } from '../styles'

export const Ul = styled.ul`
    margin-top: 0;
    margin-bottom: ${layout.spacer};
    padding-left: 1.5rem;
    list-style: none;
`

export const Li = styled.li`
    position: relative;
    display: block;

    &:before {
        content: '▪';
        top: -1px;
        position: absolute;
        left: -1.5rem;
        color: rgb(${colors.lightGrey});
        user-select: none;
    }

    + li {
        margin-top: calc(${layout.spacer} / 8);
    }

    ul,
    ol,
    p {
        margin-bottom: 0;
        margin-top: calc(${layout.spacer} / 8);
    }
`
