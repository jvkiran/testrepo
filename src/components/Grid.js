import styled from 'styled-components';
import { responsive } from '../styles';

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  margin-left: -1.5rem;

  & > div {
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
    margin-left: 1.5rem;
  }
  & > div:first-child {
    order: ${({ left }) => (left ? 1 : 0)};
  }
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
    margin-left: 0;

    & > div {
      margin-left: 0;
    }

    & > div:first-child {
      order: 0;
    }
    & > div:nth-child(2) {
      order: 1;
    }
    & > div:nth-child(3) {
      order: 2;
    }
    & > div:nth-child(4) {
      order: 3;
    }
  }
`;

export default Grid;
