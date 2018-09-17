import React, { Component } from 'react'
import Waves from '../components/Waves'
import ContentRow from '../components/ContentRow'
import SocialHero from '../components/SocialHero'
import VideoModal from '../components/VideoModal'
import bigchainDBLogo from '../assets/logos/bigchain-db.svg'
import dexLogo from '../assets/logos/dex.svg'
import videoThumb from '../assets/misc/video-thumb.jpg'
import videoThumb2x from '../assets/misc/video-thumb@2x.jpg'
import { colors } from '../styles'
import {
    StyledHero,
    StyledHeroContent,
    StyledTagline,
    StyledPoweredBy,
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
            <StyledHero viewport fontColor={colors.white} id="welcome">
                <StyledHeroContent>
                    <ContentRow>
                        <StyledTagline>A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledTagline>
                    </ContentRow>
                    <ContentRow narrow>
                        <StyledPoweredBy>
                            <p>Powered by</p>
                            <a href="https://www.bigchaindb.com/">
                                <img alt="BigchainDB Logo" src={bigchainDBLogo} />
                            </a>
                            <a href="https://www.dex.sg/">
                                <img alt="Dex Logo" src={dexLogo} />
                            </a>
                        </StyledPoweredBy>

                        <StyledVideoThumbnail onClick={() => this.toggleModal()}>
                            <img
                                alt="Ocean Protocol Video"
                                src={videoThumb}
                                srcSet={srcSet} />
                        </StyledVideoThumbnail>

                    </ContentRow>

                    <StyledSocialHero>
                        <SocialHero />
                    </StyledSocialHero>
                </StyledHeroContent>

                <Waves />

                <VideoModal modalIsOpen={this.state.modalIsOpen} onCloseModal={this.toggleModal} source={this.state.videoUrl} />
            </StyledHero>
        )
    }
}

export default Welcome
