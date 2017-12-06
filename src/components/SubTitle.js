import styled from 'styled-components'
import { colors, fonts, responsive } from '../styles'

const SubTitle = styled.h3`
  font-family: ${fonts.family.title};
  font-weight: ${fonts.fontWeight.title};
  line-height: ${fonts.lineHeight.title};
  font-size: ${fonts.size.h3};
  color: ${({ white }) => (white ? '#fff' : `${colors.black}`)};
  margin-top: 0;
  text-align: ${({ center }) => (center ? 'center' : 'inherit')};

  @media screen and (${responsive.sm.max}) {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: ${fonts.size.h4};
  }
`

export default SubTitle
