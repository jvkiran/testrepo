import styled from 'styled-components';
import { responsive } from '../styles';

const Paragraph = styled.p`
  line-height: 2.13;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 3rem;
  @media screen and (${responsive.sm.max}) {
    font-size: 1.15rem;
    margin-bottom: 1.2rem;
  }
`;

export default Paragraph;
