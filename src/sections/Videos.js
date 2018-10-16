import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import fetch from 'isomorphic-fetch'
import Helmet from 'react-helmet'
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills'
import Section from '../components/Section'
import Title from '../components/Title'
import ContentRow from '../components/ContentRow'
import Spinner from '../components/Spinner'
import playIcon from '../assets/misc/play-circle.svg'
import { ReactComponent as Cross } from '../assets/misc/cross.svg'
import jellyfish from '../assets/misc/jellyfish-background.jpg'
import jellyfishVideoMp4 from '../assets/misc/jellyfish-background.mp4'
import jellyfishVideoWebM from '../assets/misc/jellyfish-background.webm'
import { colors } from '../styles'
import { youtube } from '../constants'
import {
    StyledVideos,
    HeightRow,
    RatioContainer,
    AspectRatio,
    VideoTitle,
    VideoDescription,
    PlayButton,
    VideoContainer,
    StyledClose,
    StyledReactPlayer,
    VideoList,
    VideoListItem,
    VideoThumb,
    ThumbTitle,
    CenterParagraph,
    YouTubeButton,
    VideoBackground
} from './Videos.css'

const url = `https://wt-bfc3ae9804422f8a4ea114dc7c403296-0.run.webtask.io/youtube/${youtube.playlist}`

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

        // eslint-disable-next-line no-unused-vars
        const scroll = new SmoothScroll('li[href*="#videoScroll"]', {
            header: '[data-scroll-header]',
            updateURL: true
        })
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
        const { ApiResponse } = this.props

        return (
            <StyledVideos>
                <HeightRow id="videoScroll">
                    <RatioContainer className={this.state.player ? 'hidden' : ''} onClick={() => this.openVideo(this.state.videoUrl)}>
                        <AspectRatio>
                            <VideoTitle>{this.state.title}</VideoTitle>
                            <VideoDescription>{this.state.description}<span /></VideoDescription>
                            <PlayButton src={playIcon} />
                        </AspectRatio>
                    </RatioContainer>
                    <VideoContainer className={this.state.player ? 'active' : ''}>
                        {this.state.player && (
                            <StyledClose title="close" onClick={() => this.stopVideo()}>
                                <Cross />
                            </StyledClose>
                        )}
                        <StyledReactPlayer
                            controls
                            config={{ youtube: { playerVars: { color: 'white', autoplay: 0, start: 0 } } }}
                            playing={this.state.player}
                            url={this.state.videoUrl} />
                    </VideoContainer>
                </HeightRow>
                <VideoList>
                    {ApiResponse.map((properties, index) => (
                        <VideoListItem
                            key={index}
                            onClick={() => this.selectVideo(properties, index)}
                            href="#videoScroll"
                            className={this.state.active === index ? 'active' : ''}
                        >
                            <VideoThumb alt="video thumbnail" src={properties.imageUrl} />
                            <ThumbTitle><span>{properties.title}</span></ThumbTitle>
                        </VideoListItem>
                    ))}
                </VideoList>
            </StyledVideos>
        )
    }
}

SectionContent.propTypes = {
    ApiResponse: PropTypes.array.isRequired
}

class VideoSlider extends PureComponent {
    state = {
        ApiResponse: []
    }

    componentDidMount() {
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
                <Spinner />
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
    <>
        <Helmet>
            <link rel="preconnect" href={url} />
        </Helmet>
        <Section minHeight={1040} background={colors.black} fontColor={colors.white} id="video">
            <LazyLoad once unmountIfInvisible height={1040} offset={100}>
                <Fragment>
                    <ContentRow>
                        <Title white id="videoScroll">Videos</Title>
                    </ContentRow>

                    <VideoSlider />

                    <ContentRow>
                        <a href={youtube.channel}>
                            <YouTubeButton>YouTube Channel</YouTubeButton>
                        </a>
                    </ContentRow>

                    <VideoBackground autoPlay loop muted playsInline poster={jellyfish}>
                        <source src={jellyfishVideoWebM} type="video/webm; codecs=vp9,vorbis" />
                        <source src={jellyfishVideoMp4} type="video/mp4" />
                    </VideoBackground>
                </Fragment>
            </LazyLoad>
        </Section>
    </>
)

export default Videos
