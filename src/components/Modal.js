import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Paragraph from '../components/Paragraph'
import { ReactComponent as Cross } from '../assets/misc/cross.svg'
import {
    StyledLightbox,
    StyledModal,
    StyledTitle,
    StyledClose
} from './Modal.css'

const Modal = ({ children, title, description, toggle }) => (
    <>
        <Helmet>
            <style>{'html { overflow: hidden }'}</style>
        </Helmet>
        <StyledLightbox>
            <StyledModal>
                <StyledClose title="close" onClick={() => toggle()}>
                    <Cross />
                </StyledClose>

                <StyledTitle left>{title}</StyledTitle>
                {description && (
                    <Paragraph
                        dangerouslySetInnerHTML={{
                            __html: description
                        }}
                    />
                )}

                {children}
            </StyledModal>
        </StyledLightbox>
    </>
)

export default Modal

Modal.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    toggle: PropTypes.func.isRequired
}
