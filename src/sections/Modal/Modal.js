import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import ModalForm from './ModalForm'
import { ReactComponent as Cross } from '../../assets/misc/cross.svg'
import forms from '../../data/forms'
import {
    StyledLightbox,
    StyledModal,
    StyledClose
} from './Modal.css'

export default class Modal extends PureComponent {
    static propTypes = {
        modal: PropTypes.string.isRequired,
        toggle: PropTypes.func.isRequired
    }

    componentDidMount() {
        document.querySelectorAll('html')[0].style.overflow = 'hidden'
    }

    componentWillUnmount() {
        document.querySelectorAll('html')[0].style.overflow = 'auto'
    }

    render() {
        const { modal, toggle, ...props } = this.props

        return (
            <StyledLightbox show={!!modal} {...props}>
                <StyledModal>
                    <StyledClose title="close" onClick={() => toggle()}>
                        <Cross />
                    </StyledClose>
                    {modal && (
                        <div>
                            <SubTitle>{forms[modal].title}</SubTitle>
                            {forms[modal].description && (
                                <Paragraph>{forms[modal].description}</Paragraph>
                            )}
                            <ModalForm modal={modal} />
                        </div>
                    )}
                </StyledModal>
            </StyledLightbox>
        )
    }
}
