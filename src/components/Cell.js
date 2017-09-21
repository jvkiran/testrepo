import styled from 'styled-components';

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width * 100}%`};
`;

export default Cell;
