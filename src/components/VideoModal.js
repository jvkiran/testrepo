import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import cross from '../assets/misc/cross.svg'
import { colors } from '../styles'

const StyledClose = styled.img`
    position: absolute;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 21;

    &:hover,
    &:focus {
        opacity: .7;
    }
`

const StyledReactPlayer = styled(ReactPlayer)`
    max-width: 100%;
    height: auto !important; /* stylelint-disable-line declaration-no-important */
    width: 100% !important; /* stylelint-disable-line declaration-no-important */

    > div {
        position: relative;
        height: 0 !important; /* stylelint-disable-line declaration-no-important */
        padding-bottom: 56.25%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, .9);
`

const YoutubeModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    border: 0;
    background: rgb(${colors.black});
    overflow: auto;
    border-radius: 0;
    outline: none;
    padding: 0;
    width: 100%;
    height: auto;
    z-index: 2;
    max-width: 1080px;
    max-height: 100vh;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

class VideoModal extends React.Component {
    state = {
        modalIsOpen: false,
        source: ''
    }

    componentWillReceiveProps(newProps) {
        if (newProps.source) {
            this.setState({ source: newProps.source })
            this.openModal()
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false, source: '' })
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
        this.props.onCloseModal()
    }

    openModal() {
        this.setState({ modalIsOpen: true })
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }

    render() {
        return (
            <div>
                {this.state.modalIsOpen === true &&
                    <ModalOverlay onClick={() => this.closeModal()}>
                        <YoutubeModal>
                            <StyledReactPlayer
                                controls
                                config={{ youtube: { playerVars: { color: 'white' } } }}
                                url={this.state.source} />
                        </YoutubeModal>
                        <StyledClose alt="close" onClick={() => this.closeModal()} src={cross} />
                    </ModalOverlay>
                }
            </div>
        )
    }
}

VideoModal.propTypes = {
    onCloseModal: PropTypes.func.isRequired
}

export default VideoModal
