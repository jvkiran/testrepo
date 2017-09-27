import styled from 'styled-components';
import { responsive } from '../styles';

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
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
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
    & > div:first-child {
      order: 0;
      padding-left: 0;
    }
    & > div:nth-child(2) {
      order: 1;
      padding-left: 0;
    }
  }
`;

export default Row;
