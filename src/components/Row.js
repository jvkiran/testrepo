import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  margin: 2rem 0;
  & > div {
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  }
  & > div:first-child {
    order: ${({ left }) => (left ? 1 : 0)};
    padding-left: ${({ left }) => (left ? '20px' : 0)};
  }
  & > div:nth-child(2) {
    padding-left: ${({ left }) => (left ? 0 : '20px')};
  }
`;

export default Row;
