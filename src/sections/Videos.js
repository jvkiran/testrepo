import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import Section from '../components/Section'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import videos from '../data/videos'
import playIcon from '../assets/misc/play-circle.svg'
import cross from '../assets/misc/cross.svg'
import { colors, fonts, transitions } from '../styles'

const Background = styled.div`
    position: absolute;
    top: 0;
    right: -1rem;
    bottom: 0;
    left: -1rem;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .2;
    z-index: 0;
`

const StyledTitle = styled(Title)`
    margin-bottom: 0;
`

const StyledContentRow = styled(ContentRow)`
    max-width: 60rem;
    z-index: 1;

    .slick-dots {
        bottom: -3rem;

        button:before {
            font-size: ${fonts.size.small};
            opacity: .25;
            color: rgb(${colors.white});
        }

        .slick-active button:before { /* stylelint-disable-line selector-max-compound-selectors */
            color: rgb(${colors.white});
        }

        .slick-active:only-child {
            display: none;
        }
    }

    .slick-prev,
    .slick-next {
        z-index: 2;
        width: 1.5rem;
        height: 1.5rem;

        &.slick-disabled {
            visibility: hidden;
        }

        &:before {
            color: #fff;
            font-size: 1.5rem;
        }
    }
`

const VideoTitle = styled.h1`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.white});
    text-align: center;
    margin-bottom: 2rem;
`

const VideoDescription = styled(Paragraph)`
    text-align: center;
    height: calc(6rem + 6px);
    margin-bottom: 3rem;
    overflow: hidden;
    position: relative;
`

const PlayButton = styled.img`
    display: block;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin: 0 auto 4rem;
`

const VideoContainer = styled.div`
    position: relative;
    margin: 10px;
    border: .4rem solid rgb(${colors.white});
    background: rgb(${colors.black});
`

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

const VideoListItem = styled.div`
    cursor: pointer;
`

const ListContainer = styled.div`
    margin: 0 .5rem;
    color: rgb(${colors.lightGrey});
    background: rgb(${colors.black});
    border-radius: 2px;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    transition: ${transitions.short};
    border: .08rem solid rgb(${colors.grey});

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
        transform: translate3d(0, -.05rem, 0);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
        transition: none;
        transform: none;
    }

    &.active {
        background: rgb(${colors.white});
        color: rgb(${colors.black});
    }
`

const VideoThumb = styled.img`
    padding: .4rem;
    background: rgb(${colors.black});

    .active & {
        background: rgb(${colors.white});
    }
`

const ThumbTitle = styled(Paragraph)`
    padding: .5rem 1.25rem 1rem 1.25rem;
    margin: 0;
    text-align: center;
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.small};

    span {
        overflow: hidden;
        display: block;
        height: 3.3rem;
    }
`

class SectionContent extends Component {
    state = {
        title: this.props.items[0].snippet.title,
        description: this.props.items[0].snippet.description,
        active: 0,
        id: `https://www.youtube.com/watch?v=${this.props.items[0].id}`,
        player: false
    }

    componentWillMount() {
        this.props.changeBackground(this.props.items[0].snippet.thumbnails.maxres.url)
    }

    selectVideo(properties, index) {
        this.setState({
            title: properties.snippet.title,
            description: properties.snippet.description,
            active: index,
            id: `https://www.youtube.com/watch?v=${properties.id}`
        })
        this.props.changeBackground(properties.snippet.thumbnails.maxres.url)
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
            slidesToShow: 4,
            slidesToScroll: 1,
            SwipeToSlide: true,
            lazyLoad: true
        }
        return (
            <StyledContentRow>
                {!this.state.player ? (
                    <ContentRow>
                        <VideoTitle>{this.state.title}</VideoTitle>
                        <VideoDescription>{this.state.description}<span /></VideoDescription>
                        <PlayButton onClick={() => this.openVideo(this.state.id)} src={playIcon} />
                    </ContentRow>
                ) : (
                    <VideoContainer>
                        <StyledClose alt="close" onClick={() => this.stopVideo()} src={cross} />
                        <StyledReactPlayer
                            controls
                            config={{ youtube: { playerVars: { color: 'white' } } }}
                            url={this.state.id} />
                    </VideoContainer>
                )}
                <Slider {...settings}>
                    {this.props.items.map((properties, index) => (
                        <VideoListItem key={index} onClick={() => this.selectVideo(properties, index)}> {/* eslint-disable-line react/no-array-index-key*/}
                            <ListContainer className={this.state.active === index ? 'active' : ''}>
                                <VideoThumb alt="video thumbnail" src={properties.snippet.thumbnails.medium.url} />
                                <ThumbTitle><span>{properties.snippet.title}</span></ThumbTitle>
                            </ListContainer>
                        </VideoListItem>
                    ))}
                </Slider>
            </StyledContentRow>
        )
    }
}

SectionContent.propTypes = {
    changeBackground: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
}

const VideoSlider = ({ items, ...changeBackground }) => {
    if (items.length === 0) {
        return (
            <Paragraph>
                Loading...
            </Paragraph>
        )
    } else if (items.noVideos) {
        return (
            <Paragraph>
                No videos available!
            </Paragraph>
        )
    } else if (items.length > 0) {
        return (
            <SectionContent {...changeBackground} items={items} />
        )
    } else {
        return []
    }
}

VideoSlider.propTypes = {
    changeBackground: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
}

class Videos extends React.Component { // eslint-disable-line react/no-multi-comp
    state = {
        ApiResponse: []
    }
    componentWillMount() {
        if (videos.length) {
            const idList = videos.map((video) => (
                video.id
            ))

            const ApiKey = 'AIzaSyCneVN0OS7Ui0mH5M6gfdK--RdZn9um4_o'
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${idList}&key=${ApiKey}`
            fetch(url).then((response) => response.json())
                .then((data) => {
                    setTimeout(() => {
                        this.setState({
                            ApiResponse: data.items
                        })
                    }, 2000)
                })
        } else {
            this.setState({
                ApiResponse: {
                    noVideos: true
                }
            })
        }
    }

    render() {
        return (
            <RenderSection ApiResponse={this.state.ApiResponse} />
        )
    }
}

const backgroundStyles = {
    position: 'relative'
}
class RenderSection extends Component { // eslint-disable-line react/no-multi-comp
    state = {
        background: ''
    }
    changeBackground = (newImage) => {
        this.setState({
            background: `url(${newImage})`
        })
    }
    render() {
        return (
            <Section background={colors.black} fontColor={colors.white} id="video" style={backgroundStyles}>
                <Background style={{ backgroundImage: `${this.state.background}` }} />
                <StyledContentRow>
                    <StyledTitle white>Videos</StyledTitle>
                </StyledContentRow>
                <VideoSlider changeBackground={this.changeBackground} items={this.props.ApiResponse} />
            </Section>
        )
    }
}

RenderSection.propTypes = {
    ApiResponse: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
}

export default Videos
