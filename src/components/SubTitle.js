import styled from 'styled-components';
import { responsive, fonts } from '../styles';

const SubTitle = styled.h3`
  line-height: 1.38;
  font-size: ${fonts.size.base};
  font-weight: 600;
  @media screen and (${responsive.sm.max}) {
    font-size: ${fonts.size.large};
  }
`;

export default SubTitle;
