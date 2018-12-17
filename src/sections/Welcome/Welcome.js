import React, { Component } from 'react'
import Waves from './Waves'
import SocialHero from './SocialHero'
import VideoModal from '../../components/VideoModal'
import videoThumb from '../../assets/misc/video-thumb.jpg'
import videoThumbRetina from '../../assets/misc/video-thumb@2x.jpg'
import videoThumbWebP from '../../assets/misc/video-thumb.webp'
import videoThumbWebPRetina from '../../assets/misc/video-thumb@2x.webp'
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

const content = {
    title: 'A Decentralized Data Exchange Protocol to Unlock Data for AI',
    description:
        'Ocean Protocol is kickstarting a Data Economy by breaking down data silos and equalizing access to data for all.'
}

export default class Welcome extends Component {
    state = {
        videoUrl: '',
        modalIsOpen: false
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
                            <StyledTagline>{content.title}</StyledTagline>
                            <StyledParagraph>
                                {content.description}
                            </StyledParagraph>

                            <Cta>
                                <StyledButton to="/project" important>
                                    Learn about the project
                                </StyledButton>
                                <StyledButton to="/community">
                                    Become an ambassador
                                </StyledButton>
                            </Cta>
                        </HeroGridCell>
                        <HeroGridCell>
                            <StyledVideoThumbnail
                                onClick={() => this.toggleModal()}
                            >
                                <source
                                    type="image/webp"
                                    media="(min-resolution: 144dpi),
                                                (-webkit-min-device-pixel-ratio: 1.5)"
                                    srcSet={videoThumbWebPRetina}
                                />
                                <source
                                    type="image/webp"
                                    srcSet={videoThumbWebP}
                                />
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
