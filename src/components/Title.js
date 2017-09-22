import styled from 'styled-components';
import { responsive } from '../styles';

const Title = styled.h1`
  font-size: 2.27rem;
  margin: 1rem 0;
  font-weight: 600;

  @media screen and (${responsive.sm.max}) {
    font-size: 1.95rem;
    margin: 0.33rem 0;
  }
`;

export default Title;
