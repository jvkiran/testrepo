import styled from 'styled-components';
import { responsive, fonts, colors } from '../styles';

const Title = styled.h1`
  font-family: ${fonts.family.title};
  font-weight: ${fonts.fontWeight.title};
  line-height: ${fonts.lineHeight.title};
  font-size: ${fonts.size.h1};
  margin-top: 0;
  margin-bottom: 4rem;
  text-align: center;
  color: ${({ white }) => (white ? `rgb(${colors.white})` : `rgb(${colors.black})`)};

  @media screen and (${responsive.sm.max}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Title;
