import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ReactComponent as Cross } from '../assets/misc/cross.svg'
import {
    StyledClose,
    StyledReactPlayer,
    ModalOverlay,
    YoutubeModal
} from './VideoModal.css'

const VideoModal = ({ onCloseModal, modalIsOpen, source }) => {
    if (!modalIsOpen) {
        return null
    }

    return (
        <>
            <Helmet>
                <style>{'html { overflow: hidden }'}</style>
            </Helmet>
            <ModalOverlay onClick={() => onCloseModal()}>
                <YoutubeModal>
                    <StyledReactPlayer
                        controls
                        config={{ youtube: { playerVars: { color: 'white' } } }}
                        url={source}
                    />
                </YoutubeModal>
                <StyledClose title="close" onClick={() => onCloseModal()}>
                    <Cross />
                </StyledClose>
            </ModalOverlay>
        </>
    )
}

VideoModal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    source: PropTypes.string.isRequired
}

export default VideoModal
