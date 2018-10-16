import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import cross from '../assets/misc/cross.svg'
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
        <Fragment>
            <Helmet>
                <html style={{ overflow: 'hidden' }} />
            </Helmet>
            <ModalOverlay onClick={() => onCloseModal()}>
                <YoutubeModal>
                    <StyledReactPlayer
                        controls
                        config={{ youtube: { playerVars: { color: 'white' } } }}
                        url={source}
                    />
                </YoutubeModal>
                <StyledClose
                    alt="close"
                    onClick={() => onCloseModal()}
                    src={cross}
                />
            </ModalOverlay>
        </Fragment>
    )
}

VideoModal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    source: PropTypes.string.isRequired
}

export default VideoModal
