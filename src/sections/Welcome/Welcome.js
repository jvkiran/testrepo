import React, { Component } from 'react'
import Waves from './Waves'
import SocialHero from './SocialHero'
import VideoModal from '../../components/VideoModal'
import videoThumb from '../../assets/misc/video-thumb.jpg'
import videoThumb2x from '../../assets/misc/video-thumb@2x.jpg'
import { colors } from '../../styles'
import {
    Hero,
    HeroContent,
    HeroGrid,
    HeroGridCell,
    StyledTagline,
    StyledParagraph,
    StyledVideoThumbnail,
    StyledSocialHero
} from './Welcome.css'

const srcSet = `${videoThumb2x}  2x,  ${videoThumb} 1x`

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videoUrl: '',
            modalIsOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
            videoUrl: 'https://www.youtube.com/watch?v=FEeicvNSyk4'
        })
    }

    render() {
        return (
            <Hero viewport fontColor={colors.white} id="welcome">
                <HeroContent>

                    <HeroGrid>
                        <HeroGridCell>
                            <StyledTagline>A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledTagline>
                            <StyledParagraph>A Decentralized Data Exchange Protocol to Unlock Data for AI A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledParagraph>
                        </HeroGridCell>
                        <HeroGridCell>
                            <StyledVideoThumbnail onClick={() => this.toggleModal()}>
                                <img
                                    alt="Ocean Protocol Video"
                                    src={videoThumb}
                                    srcSet={srcSet} />
                            </StyledVideoThumbnail>
                        </HeroGridCell>
                    </HeroGrid>

                    <StyledSocialHero>
                        <SocialHero />
                    </StyledSocialHero>
                </HeroContent>

                <Waves />

                <VideoModal modalIsOpen={this.state.modalIsOpen} onCloseModal={this.toggleModal} source={this.state.videoUrl} />
            </Hero>
        )
    }
}

export default Welcome
