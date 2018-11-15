import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import axios from 'axios'
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills'
import Section from '../components/Section'
import Title from '../components/Title'
import ContentRow from '../components/ContentRow'
import Spinner from '../components/Spinner'
import { ReactComponent as Cross } from '../assets/misc/cross.svg'
import jellyfish from '../assets/misc/jellyfish-background.jpg'
import jellyfishVideoMp4 from '../assets/misc/jellyfish-background.mp4'
import jellyfishVideoWebM from '../assets/misc/jellyfish-background.webm'
import { colors } from '../styles'
import { youtube, webtasks, social } from '../constants'
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

const url = `${webtasks.host}/youtube/playlist/${youtube.playlistId}`

class SectionContent extends PureComponent {
    state = {
        title: '',
        description: '',
        active: 0,
        videoUrl: '',
        player: false
    }

    componentDidMount() {
        const { videos } = this.props

        // select first item from response
        this.selectVideo(videos[0], 0)

        // eslint-disable-next-line no-unused-vars
        const scroll = new SmoothScroll('li[href*="#videoScroll"]', {
            header: '[data-scroll-header]',
            updateURL: false,
            speedAsDuration: true
        })
    }

    componentWillUnmount() {
        this.stopVideo()
    }

    selectVideo(properties, index) {
        this.setState({
            title: properties.title,
            description:
                properties.description.length > 400
                    ? `${properties.description.substring(0, 397)}...`
                    : properties.description,
            active: index,
            videoUrl: properties.videoUrl
        })
        this.stopVideo()
    }

    openVideo() {
        this.setState({ player: true })
    }

    stopVideo() {
        this.setState({ player: false })
    }

    render() {
        const { videos } = this.props

        return (
            <StyledVideos>
                <HeightRow id="videoScroll">
                    <RatioContainer
                        className={this.state.player ? 'hidden' : ''}
                        onClick={() => this.openVideo(this.state.videoUrl)}
                    >
                        <AspectRatio>
                            <VideoTitle>{this.state.title}</VideoTitle>
                            <VideoDescription>
                                {this.state.description}
                                <span />
                            </VideoDescription>
                            <PlayButton />
                        </AspectRatio>
                    </RatioContainer>
                    <VideoContainer
                        className={this.state.player ? 'active' : ''}
                    >
                        {this.state.player && (
                            <StyledClose
                                title="close"
                                onClick={() => this.stopVideo()}
                            >
                                <Cross />
                            </StyledClose>
                        )}
                        <StyledReactPlayer
                            controls
                            config={{
                                youtube: {
                                    playerVars: {
                                        color: 'white',
                                        autoplay: 0,
                                        start: 0
                                    }
                                }
                            }}
                            playing={this.state.player}
                            url={this.state.videoUrl}
                        />
                    </VideoContainer>
                </HeightRow>
                <VideoList>
                    {videos.map((properties, index) => (
                        <VideoListItem
                            key={index}
                            onClick={() => this.selectVideo(properties, index)}
                            href="#videoScroll"
                            className={
                                this.state.active === index ? 'active' : ''
                            }
                        >
                            <VideoThumb
                                alt="video thumbnail"
                                src={properties.imageUrl}
                            />
                            <ThumbTitle>
                                <span>{properties.title}</span>
                            </ThumbTitle>
                        </VideoListItem>
                    ))}
                </VideoList>
            </StyledVideos>
        )
    }
}

SectionContent.propTypes = {
    videos: PropTypes.array.isRequired
}

class VideoSlider extends PureComponent {
    signal = axios.CancelToken.source()

    state = {
        videos: [],
        fetching: false
    }

    componentDidMount() {
        this.fetchVideos()
    }

    componentWillUnmount() {
        this.signal.cancel()
    }

    fetchVideos = async () => {
        try {
            this.setState({ fetching: true })
            const response = await axios.get(url, {
                cancelToken: this.signal.token
            })
            const videos = response.data
            this.setState({ fetching: false, videos })
        } catch (err) {
            if (axios.isCancel(err)) {
                return null
            } else {
                this.setState({ fetching: false, videos: { error: true } })
            }
        }
    }

    render() {
        const { fetching, videos } = this.state

        if (fetching) return <Spinner />

        if (videos.error) {
            return (
                <CenterParagraph>
                    There was a problem getting the videos.
                    <br />
                    Please try again later!
                </CenterParagraph>
            )
        }

        return (
            !fetching && videos.length > 0 && <SectionContent videos={videos} />
        )
    }
}

const Videos = () => (
    <Section
        minHeight={1148}
        background={colors.black}
        fontColor={colors.white}
        id="video"
    >
        <LazyLoad once unmountIfInvisible height={1148} offset={100}>
            <Fragment>
                <ContentRow>
                    <Title white>Videos</Title>
                </ContentRow>

                <VideoSlider id="videoScroll" />

                <VideoBackground
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={jellyfish}
                >
                    <source
                        src={jellyfishVideoWebM}
                        type="video/webm; codecs=vp9,vorbis"
                    />
                    <source src={jellyfishVideoMp4} type="video/mp4" />
                </VideoBackground>
            </Fragment>
        </LazyLoad>

        <ContentRow>
            <a href={social.youtube}>
                <YouTubeButton>YouTube Channel</YouTubeButton>
            </a>
        </ContentRow>
    </Section>
)

export default Videos
