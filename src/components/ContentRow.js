import styled from 'styled-components';
import { layout } from '../styles';

const ContentRow = styled.div`
  width: 100%;
  max-width: ${({ narrow }) => (narrow ? `${layout.maxWidth.small}` : `${layout.maxWidth.base}`)};
  margin: 0 auto;
`;

export default ContentRow;