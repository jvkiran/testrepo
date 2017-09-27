import styled from 'styled-components';
import { responsive, fonts } from '../styles';

const Description = styled.p`
  line-height: 2;
  font-size: ${fonts.size.small};
  font-weight: 400;
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.base};
  }
`;

export default Description;
