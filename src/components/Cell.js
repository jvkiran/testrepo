import styled from 'styled-components';
import { responsive } from '../styles';

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width * 100}%`};
  @media screen and (${responsive.sm.max}) {
    width: 100%;
  }
`;

export default Cell;
