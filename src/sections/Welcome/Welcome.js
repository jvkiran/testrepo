import React, { Component } from 'react'
import SocialHero from '../../components/SocialHero'
import VideoModal from '../../components/VideoModal'
import Waves from './Waves'
import videoThumb from '../../assets/misc/video-thumb.jpg'
import videoThumbRetina from '../../assets/misc/video-thumb@2x.jpg'
import content from '../../data/welcome.json'
import { colors } from '../../styles'
import {
    Hero,
    HeroContent,
    HeroGrid,
    HeroGridCell,
    StyledTagline,
    StyledParagraph,
    StyledVideoThumbnail,
    StyledSocialHero,
    StyledButton,
    Cta
} from './Welcome.css'

export default class Welcome extends Component {
    state = {
        videoUrl: '',
        modalIsOpen: false
    }

    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
            videoUrl: content.video
        })
    }

    render() {
        return (
            <Hero viewport fontColor={colors.white} id="welcome">
                <HeroContent>
                    <HeroGrid>
                        <HeroGridCell>
                            <StyledTagline>{content.title}</StyledTagline>
                            <StyledParagraph>
                                {content.description}
                            </StyledParagraph>
                        </HeroGridCell>
                        <HeroGridCell>
                            <StyledVideoThumbnail
                                onClick={() => this.toggleModal()}
                            >
                                <source
                                    media="(min-resolution: 144dpi),
                                           (-webkit-min-device-pixel-ratio: 1.5)"
                                    srcSet={videoThumbRetina}
                                />
                                <source srcSet={videoThumb} />
                                <img
                                    src={videoThumb}
                                    alt="Ocean Protocol Video"
                                />
                            </StyledVideoThumbnail>
                        </HeroGridCell>
                    </HeroGrid>

                    <Cta>
                        {content.cta.map(action => (
                            <StyledButton
                                key={action.link}
                                to={action.link}
                                smooth
                            >
                                {action.title}
                            </StyledButton>
                        ))}
                    </Cta>

                    <StyledSocialHero>
                        <SocialHero />
                    </StyledSocialHero>
                </HeroContent>

                <Waves />

                <VideoModal
                    modalIsOpen={this.state.modalIsOpen}
                    onCloseModal={this.toggleModal}
                    source={this.state.videoUrl}
                />
            </Hero>
        )
    }
}
