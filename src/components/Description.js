import styled from 'styled-components';
import { responsive } from '../styles';

const Description = styled.p`
  line-height: 2;
  font-size: 0.875rem;
  font-weight: 400;
  @media screen and (${responsive.sm.max}) {
    font-size: 1rem;
  }
`;

export default Description;
