import styled from 'styled-components'
import { responsive, fonts, colors } from '../styles'

const Title = styled.h1`
    font-family: ${fonts.family.title};
    font-weight: ${fonts.fontWeight.title};
    line-height: ${fonts.lineHeight.title};
    font-size: ${fonts.size.h2};
    margin-top: 0;
    margin-bottom: 4rem;
    text-align: ${({ left }) => (left ? 'left' : 'center')};
    color: ${({ white }) =>
        white ? `rgb(${colors.white})` : `rgb(${colors.black})`};
    white-space: pre-line;

    @media screen and (${responsive.sm.min}) {
        font-size: ${fonts.size.h1};
    }
`

export default Title
