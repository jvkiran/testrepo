import styled from 'styled-components';
import { responsive, fonts } from '../styles';

const Title = styled.h1`
  font-size: ${fonts.size.h1};
  margin: 1rem 0;
  font-weight: 600;

  @media screen and (${responsive.sm.max}) {
    margin: 1.5rem 0;
  }
`;

export default Title;
