import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import { colors } from '../styles';

const StyledLightbox = styled.div`
  background: rgba(${colors.black}, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
`;

const StyledCard = styled.div`
  margin: 1rem;
  padding: 6rem;
  width: 100%;
  max-width: 640px;
  background: rgb(${colors.white});
`;

const Modal = () => (
  <StyledLightbox>
    <StyledCard>
      <Input type="text" placeholder="type@youremail.com" />
    </StyledCard>
  </StyledLightbox>
);

export default Modal;
