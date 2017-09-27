import styled from 'styled-components';
import { responsive, fonts } from '../styles';

const Paragraph = styled.p`
  line-height: 2.13;
  font-size: ${fonts.size.base};
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 3rem;
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.large};
    margin-bottom: 1.2rem;
  }
`;

export default Paragraph;
