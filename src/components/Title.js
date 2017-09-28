import styled from 'styled-components';
import { responsive, fonts, layout } from '../styles';

const Title = styled.h1`
  font-family: ${fonts.family.title};
  font-weight: ${fonts.fontWeight.title};
  line-height: ${fonts.lineHeight.title};
  font-size: ${fonts.size.h1};
  margin-top: 0;
  margin-bottom: 4rem;
  color: inherit;
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    margin-bottom: 2rem;
  }
`;

export default Title;
