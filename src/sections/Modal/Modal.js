import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ModalForm from './ModalForm'
import { ReactComponent as Cross } from '../../assets/misc/cross.svg'
import forms from '../../data/forms'
import {
    StyledLightbox,
    StyledModal,
    StyledTitle,
    StyledClose
} from './Modal.css'

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
                        <StyledTitle left>{forms[modal].title}</StyledTitle>
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
