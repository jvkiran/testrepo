import styled from 'styled-components';
import { responsive } from '../styles';

const SubTitle = styled.h3`
  line-height: 1.38;
  font-size: 1rem;
  font-weight: 600;
  @media screen and (${responsive.sm.max}) {
    font-size: 0.85rem;
  }
`;

export default SubTitle;
