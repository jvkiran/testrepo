import styled from 'styled-components';
import { responsive, fonts } from '../styles';

const Title = styled.h1`
  font-family: ${fonts.family.title};
  font-weight: ${fonts.fontWeight.title};
  line-height: ${fonts.lineHeight.title};
  font-size: ${fonts.size.h1};
  margin: 0 auto 4rem auto;
  color: inherit;
  max-width: 800px;
  text-align: center;

  @media screen and (${responsive.sm.max}) {
    margin: 0 auto 2rem auto;
  }
`;

export default Title;
