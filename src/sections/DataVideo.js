import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import VideoModal from '../components/VideoModal'
import videoBackground from '../assets/misc/video-full.jpg'
import playIcon from '../assets/misc/play-circle.svg'
import { colors, responsive, fonts } from '../styles'

const PaddingSection = styled.div`
    background-color: #141414;
    padding: 10px;
    margin-bottom: .75rem;
    overflow: hidden;
`

const StyledSection = styled.div`
    padding-top: 0;
    position: relative;
    background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : 'none')};
    background-size: contain;
    background-repeat: no-repeat;

    &:before {
        display: block;
        content: '';
        width: 100%;
        padding-top: 52.87%;
    }
`

const AspectRatio = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const StyledTitle = styled(Title)`
    font-size: ${fonts.size.h1};
    margin: 5% auto 1.5rem;
    text-align: center;
    color: #fff;

    @media screen and (${responsive.md.max}) {
        font-size: ${fonts.size.h2};
    }

    @media screen and (${responsive.sm.max}) {
        font-size: ${fonts.size.h3};
    }

    @media screen and (${responsive.smHeight.max}) {
        font-size: ${fonts.size.h4};
    }
`

const PlayButton = styled.img`
    display: block;
    cursor: pointer;
    width: 8.5%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

class DataVideo extends React.Component {
    state = {
        videoUrl: ''
    }

    openVideo = (link) => this.setState({ videoUrl: link })
    closeModal = () => {
        this.setState({ videoUrl: '' })
    }

    render() {
        return (
            <PaddingSection>
                <StyledSection backgroundImage={videoBackground} fontColor={colors.white} id="data-video">
                    <AspectRatio>
                        <StyledTitle>That&apos;s why we&apos;re building <br /> Ocean Protocol</StyledTitle>
                        <PlayButton onClick={() => this.openVideo('https://www.youtube.com/watch?v=FEeicvNSyk4')} src={playIcon} />
                    </AspectRatio>
                    <VideoModal onCloseModal={this.closeModal} source={this.state.videoUrl} />
                </StyledSection>
            </PaddingSection>
        )
    }
}

export default DataVideo
