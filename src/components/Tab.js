import styled from 'styled-components';

import Button from '../components/Button';

import { colors } from '../styles';

const Tab = styled(Button)`
  border-radius: 5px;
  margin: 0;
  margin-bottom: 1rem;
  color: ${({ active }) => (active ? `rgb(${colors.grey})` : `rgb(${colors.white})`)};
  background: ${({ active }) => (active ? `rgb(${colors.white})` : `rgba(${colors.white}, 0.1)`)};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export default Tab;
