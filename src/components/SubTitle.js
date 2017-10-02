import styled from 'styled-components';
import { fonts, responsive } from '../styles';

const SubTitle = styled.h3`
  font-family: ${fonts.family.title};
  font-weight: ${fonts.fontWeight.title};
  line-height: ${fonts.lineHeight.title};
  font-size: ${fonts.size.h3};
  color: inherit;
  margin-top: 0;
  @media screen and (${responsive.sm.max}) {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: ${fonts.size.h4};
  }
`;

export default SubTitle;
