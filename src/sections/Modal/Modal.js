import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SubTitle from '../../components/SubTitle'
import ModalForm from './ModalForm'
import { ReactComponent as Cross } from '../../assets/misc/cross.svg'
import forms from '../../data/forms'
import { StyledLightbox, StyledModal, StyledClose } from './Modal.css'

const Modal = ({ modal, toggle }) => (
    <>
        <Helmet>
            <style>{'html { overflow: hidden }'}</style>
        </Helmet>
        <StyledLightbox>
            <StyledModal>
                <StyledClose title="close" onClick={() => toggle()}>
                    <Cross />
                </StyledClose>
                {modal && (
                    <div>
                        <SubTitle>{forms[modal].title}</SubTitle>
                        <ModalForm modal={modal} />
                    </div>
                )}
            </StyledModal>
        </StyledLightbox>
    </>
)

export default Modal

Modal.propTypes = {
    modal: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
}
