import React, { Component } from 'react'
import Waves from '../components/Waves'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import ContentRow from '../components/ContentRow'
import SocialHero from '../components/SocialHero'
import VideoModal from '../components/VideoModal'
import videoThumb from '../assets/misc/video-thumb.jpg'
import videoThumb2x from '../assets/misc/video-thumb@2x.jpg'
import { colors } from '../styles'
import {
    StyledHero,
    StyledHeroContent,
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
            <StyledHero viewport fontColor={colors.white} id="welcome">
                <StyledHeroContent>

                    <ContentRow>
                        <Grid>
                            <Cell width={1 / 2}>
                                <StyledTagline>A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledTagline>
                                <StyledParagraph>A Decentralized Data Exchange Protocol to Unlock Data for AI A Decentralized Data Exchange Protocol to Unlock Data for AI</StyledParagraph>
                            </Cell>
                            <Cell width={1 / 2}>
                                <StyledVideoThumbnail onClick={() => this.toggleModal()}>
                                    <img
                                        alt="Ocean Protocol Video"
                                        src={videoThumb}
                                        srcSet={srcSet} />
                                </StyledVideoThumbnail>
                            </Cell>
                        </Grid>

                        <StyledSocialHero>
                            <SocialHero />
                        </StyledSocialHero>
                    </ContentRow>

                </StyledHeroContent>

                <Waves />

                <VideoModal modalIsOpen={this.state.modalIsOpen} onCloseModal={this.toggleModal} source={this.state.videoUrl} />
            </StyledHero>
        )
    }
}

export default Welcome
