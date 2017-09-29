import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import cross from '../assets/misc/cross.svg';
import { colors, transitions, responsive } from '../styles';

const StyledLightbox = styled.div`
  background: rgba(${colors.black}, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  transition: ${transitions.short};
  opacity: ${({ show }) => (show ? '1' : '0')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

const StyledCard = styled.div`
  margin: 1rem;
  padding: 6rem;
  width: 100%;
  max-width: 640px;
  position: relative;
  background: rgb(${colors.white});
  @media screen and (${responsive.sm.max}) {
    padding: 4rem 1rem;
  }
`;

const StyledClose = styled.img`
  position: absolute;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  top: 1.5rem;
  right: 1.5rem;
  &:hover {
    opacity: 0.7;
  }
`;

const forms = {
  buy: [
    'Your Name',
    'type@youremail.com',
    'Company Name',
    'Tell us why you would like to buy data',
    'Join the Data Customers'
  ],
  sell: [
    'Your Name',
    'type@youremail.com',
    'Company Name',
    'Tell us why you would like to sell data',
    'Join the Data Owners'
  ],
  contribute: [
    'Your Name',
    'type@youremail.com',
    'Your Role',
    'Tell us how you would like to contribute',
    'Join the Ocean Community'
  ]
};

const Modal = ({ modal, toggle, ...props }) => (
  <StyledLightbox show={!!modal} {...props}>
    <StyledCard>
      <StyledClose src={cross} alt="close" onClick={() => toggle()} />
      {!!modal && (
        <form>
          <Input type="text" placeholder={forms[modal][0]} />
          <Input type="email" icon placeholder={forms[modal][1]} />
          <Input type="text" placeholder={forms[modal][2]} />
          <Input type="textarea" rows="6" placeholder={forms[modal][3]} />
          <Button type="submit">{forms[modal][4]}</Button>
        </form>
      )}
    </StyledCard>
  </StyledLightbox>
);

Modal.propTypes = {
  modal: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Modal;
