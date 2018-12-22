import styled from 'styled-components'
import { colors, fonts, responsive } from '../styles'

const SubTitle = styled.h2`
    font-family: ${fonts.family.title};
    font-weight: ${fonts.fontWeight.title};
    line-height: ${fonts.lineHeight.title};
    font-size: ${fonts.size.h5};
    color: ${({ white }) =>
        white ? `rgb(${colors.white})` : `rgb(${colors.black})`};
    margin-top: 0;
    text-align: ${({ left }) => (left ? 'left' : 'center')};

    @media screen and (${responsive.sm.min}) {
        font-size: ${fonts.size.h4};
    }
`

export default SubTitle
