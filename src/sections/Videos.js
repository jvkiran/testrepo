import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import LazyLoad from 'react-lazyload'
import fetch from 'isomorphic-fetch'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import smoothScroll from '../lib/smoothScroll'
import Section from '../components/Section'
import Title from '../components/Title'
import Spinner from '../components/Spinner'
import playIcon from '../assets/misc/play-circle.svg'
import cross from '../assets/misc/cross.svg'
import jellyfish from '../assets/misc/jellyfish-background.jpg'
import jellyfishVideoMp4 from '../assets/misc/jellyfish-background.mp4'
import jellyfishVideoWebM from '../assets/misc/jellyfish-background.webm'
import { colors } from '../styles'
import { youtube } from '../constants'
import {
    StyledContentRow,
    HeightRow,
    RatioContainer,
    AspectRatio,
    VideoTitle,
    VideoDescription,
    PlayButton,
    VideoContainer,
    StyledClose,
    StyledReactPlayer,
    VideoListItem,
    ListContainer,
    VideoThumb,
    ThumbTitle,
    CenterParagraph,
    YouTubeButton,
    VideoBackground
} from './Videos.css'

class SectionContent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            active: 0,
            videoUrl: '',
            player: false
        }
    }

    componentDidMount() {
        this.selectVideo(this.props.ApiResponse[0], 0)
    }

    componentWillUnmount() {
        this.stopVideo()
    }

    selectVideo(properties, index) {
        this.setState({
            title: properties.title,
            description: properties.description.length > 400 ? `${properties.description.substring(0, 397)}...` : properties.description,
            active: index,
            videoUrl: properties.videoUrl
        })
        this.stopVideo()
    }

    scrollToVideo() {
        smoothScroll(document.getElementById('videoScroll'))
    }

    openVideo() {
        this.setState({
            player: true
        })
    }

    stopVideo() {
        this.setState({
            player: false
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            SwipeToSlide: true,
            lazyLoad: true,
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [{
                breakpoint: 650,
                settings:
                {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 800,
                settings:
                {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 3
                }
            }]
        }

        const { ApiResponse } = this.props

        return (
            <StyledContentRow>
                <HeightRow id="videoScroll">
                    <RatioContainer className={this.state.player ? 'hidden' : ''} onClick={() => this.openVideo(this.state.videoUrl)}>
                        <AspectRatio>
                            <VideoTitle>{this.state.title}</VideoTitle>
                            <VideoDescription>{this.state.description}<span /></VideoDescription>
                            <PlayButton src={playIcon} />
                        </AspectRatio>
                    </RatioContainer>
                    <VideoContainer className={this.state.player ? 'active' : ''}>
                        {this.state.player &&
                            <StyledClose alt="close" onClick={() => this.stopVideo()} src={cross} />
                        }
                        <StyledReactPlayer
                            controls
                            config={{ youtube: { playerVars: { color: 'white', autoplay: 0, start: 0 } } }}
                            playing={this.state.player}
                            url={this.state.videoUrl} />
                    </VideoContainer>
                </HeightRow>
                <Slider {...settings}>
                    {ApiResponse.map((properties, index) => (
                        <VideoListItem key={index} onClick={() => { this.selectVideo(properties, index); this.scrollToVideo() }}>
                            <ListContainer className={this.state.active === index ? 'active' : ''}>
                                <VideoThumb alt="video thumbnail" src={properties.imageUrl} />
                                <ThumbTitle><span>{properties.title}</span></ThumbTitle>
                            </ListContainer>
                        </VideoListItem>
                    ))}
                </Slider>
            </StyledContentRow>
        )
    }
}

SectionContent.propTypes = {
    ApiResponse: PropTypes.array.isRequired
}

class VideoSlider extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            ApiResponse: []
        }
    }

    componentDidMount() {
        const url = `https://wt-bfc3ae9804422f8a4ea114dc7c403296-0.run.webtask.io/youtube/${youtube.playlist}`
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Problem getting content! Start debugging!')
            })
            .then(data => {
                this.setState({
                    ApiResponse: data
                })
            })
            .catch(() => {
                this.setState({
                    ApiResponse: {
                        error: true
                    }
                })
            })
    }

    render() {
        const { ApiResponse } = this.state

        if (ApiResponse.length === 0) {
            return (
                <Spinner white />
            )
        } else if (ApiResponse.error) {
            return (
                <CenterParagraph>
                    There was a problem getting the list.<br />
                    Please try again later!
                </CenterParagraph>
            )
        } else if (ApiResponse.length > 0) {
            return (
                <SectionContent ApiResponse={ApiResponse} />
            )
        } else {
            return []
        }
    }
}

const Videos = () => (
    <Section minHeight={1040} background={colors.black} fontColor={colors.white} id="video">
        <LazyLoad once unmountIfInvisible height={1040} offset={100}>
            <Fragment>
                <StyledContentRow>
                    <Title white id="videoScroll">Videos</Title>
                </StyledContentRow>

                <VideoSlider />

                <StyledContentRow>
                    <a href={youtube.channel}>
                        <YouTubeButton>YouTube Channel</YouTubeButton>
                    </a>
                </StyledContentRow>

                <VideoBackground autoPlay loop muted playsInline poster={jellyfish}>
                    <source src={jellyfishVideoWebM} type="video/webm; codecs=vp9,vorbis" />
                    <source src={jellyfishVideoMp4} type="video/mp4" />
                </VideoBackground>
            </Fragment>
        </LazyLoad>
    </Section>
)

export default Videos
