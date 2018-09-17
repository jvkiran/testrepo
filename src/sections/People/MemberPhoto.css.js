import styled from 'styled-components'
import { colors } from '../../styles'

export const Photo = styled.figure`
    margin: 0;
    border: ${({ actionable }) => (actionable ? `.1rem solid rgb(${colors.pink})` : null)};

    &,
    img {
        border-radius: 50%;
        display: block;
    }

    img {
        margin: 0;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
        min-height: 141px;
        background: rgb(${colors.lightGrey});
    }
`
