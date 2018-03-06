import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import smoothScroll from '../lib/smoothScroll'
import Section from '../components/Section'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import playIcon from '../assets/misc/play-circle.svg'
import cross from '../assets/misc/cross.svg'
import jellyfish from '../assets/misc/jelly-background.png'
import { colors, fonts, responsive, transitions } from '../styles'
import { apikeys, playlist } from '../constants'

const Background = styled.div`
    position: absolute;
    top: 0;
    right: -1rem;
    bottom: 0;
    left: -1rem;
    background-image: url(${jellyfish});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: .35;
    z-index: 0;
`

const CenterParagraph = styled(Paragraph)`
    text-align: center;
`

const StyledContentRow = styled(ContentRow)`
    max-width: 60rem;
    margin-bottom: 2.5rem;
    z-index: 1;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: 0;
    }

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

    .slick-prev {
        left: -1.5rem;
    }

    .slick-next {
        right: -1.5rem;
    }

    @media screen and (${responsive.sm.min}) {
        .slick-prev {
            left: -1.5rem;
        }

        .slick-next {
            right: -1.5rem;
        }
    }
`

const HeightRow = styled.div`
    min-height: 280px;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        min-height: 0;
    }
`

const RatioContainer = styled.div`
    z-index: 2;
    margin: .58rem;

    @media screen and (${responsive.sm.max}) {
        &.hidden {
            display: none;
        }
    }

    @media screen and (${responsive.sm.min}) {
        border: .4rem solid rgb(${colors.white});
        padding-top: 1rem;
    }

    @media screen and (${responsive.md.min}) {
        padding-top: 2rem;
    }

    @media screen and (${responsive.lg.min}) {
        padding-top: 4rem;
    }
`

const AspectRatio = styled.div`
    position: relative;

    @media screen and (${responsive.sm.min}) {
        padding-bottom: calc(56.25% - 1rem);
        height: 0 !important; /* stylelint-disable-line declaration-no-important */
    }

    @media screen and (${responsive.md.min}) {
        padding-bottom: calc(56.25% - 2rem);
    }

    @media screen and (${responsive.lg.min}) {
        padding-bottom: calc(56.25% - 4rem);
    }
`

const VideoTitle = styled.h1`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.white});
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 2rem;
    margin-top: 0;
    height: calc(2 * 1.25 * 1.5rem);
    overflow: hidden;

    @media screen and (${responsive.tablet.min}) {
        height: calc(1 * 1.25 * 1.5rem);
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

const VideoDescription = styled(Paragraph)`
    text-align: center;
    height: calc(6rem + 6px);
    margin-bottom: 2rem;
    overflow: hidden;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        padding: 0 1rem;
    }

    @media screen and (${responsive.md.min}) {
        margin-bottom: 3rem;
        padding: 0 2rem;
    }

    @media screen and (${responsive.lg.min}) {
        padding: 0 4rem;
    }
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
    left: 0;
    right: 0;
    top: -.58rem;
    z-index: -1;
    margin: .58rem;
    border: .4rem solid rgb(${colors.white});
    background: rgb(${colors.black});
    display: none;

    @media screen and (${responsive.sm.min}) {
        display: block;
        position: absolute;
    }

    &.active {
        z-index: 999;
        display: block;
    }
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
    opacity: .35;

    .active & {
        opacity: 1;
    }

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
    color: rgb(${colors.lightGrey});
    background: rgb(${colors.black});
    border-radius: 2px;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    transition: ${transitions.short};
    border: .08rem solid rgb(${colors.grey});
    max-width: 21.3rem;
    margin: 0 auto;

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

    @media screen and (${responsive.sm.min}) {
        margin: 0 .5rem;
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
    font-size: ${fonts.size.small};

    span {
        overflow: hidden;
        display: block;
        height: 3.3rem;
    }
`

class SectionContent extends Component {
    state = {
        title: '',
        description: '',
        active: 0,
        id: '',
        player: false
    }

    componentWillMount() {
        this.selectVideo(this.props.items[0], 0)
    }

    selectVideo(properties, index) {
        this.setState({
            title: properties.snippet.title,
            description: properties.snippet.description.length > 400 ? `${properties.snippet.description.substring(0, 397)}...` : properties.snippet.description,
            active: index,
            id: `https://www.youtube.com/watch?v=${properties.snippet.resourceId.videoId}`
        })
        this.stopVideo()
    }

    scrollToVideo = () => {
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
                        slidesToShow: 1,
                    }
            }, {
                breakpoint: 800,
                settings:
                    {
                        slidesToShow: 2,
                    }
            }, {
                breakpoint: 992,
                settings:
                    {
                        slidesToShow: 3,
                    }
            }]
        }
        return (
            <StyledContentRow>
                <HeightRow id='videoScroll'>
                    <RatioContainer className={this.state.player ? 'hidden' : ''}>
                        <AspectRatio>
                            <VideoTitle>{this.state.title}</VideoTitle>
                            <VideoDescription>{this.state.description}<span /></VideoDescription>
                            <PlayButton onClick={() => this.openVideo(this.state.id)} src={playIcon} />
                        </AspectRatio>
                    </RatioContainer>
                    <VideoContainer className={this.state.player ? 'active' : ''}>
                        {this.state.player &&
                            <StyledClose alt="close" onClick={() => this.stopVideo()} src={cross} />
                        }
                        <StyledReactPlayer
                            controls
                            config={{ youtube: { playerVars: { color: 'white', autoplay: 0 } } }}
                            url={this.state.id} />
                    </VideoContainer>
                </HeightRow>
                <Slider {...settings}>
                    {this.props.items.map((properties, index) => (
                        <VideoListItem key={index} onClick={() => { this.selectVideo(properties, index); this.scrollToVideo() }}> {/* eslint-disable-line react/no-array-index-key*/}
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
    items: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
}

const VideoSlider = ({ items }) => {
    if (items.length === 0) {
        return (
            <CenterParagraph>
                Getting videos...
            </CenterParagraph>
        )
    } else if (items.noVideos) {
        return (
            <CenterParagraph>
                No videos available!
            </CenterParagraph>
        )
    } else if (items.length > 0) {
        return (
            <SectionContent items={items} />
        )
    } else {
        return []
    }
}

VideoSlider.propTypes = {
    items: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
}

class Videos extends React.Component { // eslint-disable-line react/no-multi-comp
    state = {
        ApiResponse: []
    }
    componentWillMount() {
        if (playlist.youtube) {
            const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${playlist.youtube}&key=${apikeys.youtube}`
            fetch(url).then((response) => response.json())
                .then((data) => {
                    this.setState({
                        ApiResponse: data.items
                    })
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
const RenderSection = ({ ApiResponse }) => (
    <Section background={colors.black} fontColor={colors.white} id="video" style={backgroundStyles}>
        <Background />
        <StyledContentRow>
            <Title white id='videoScroll'>Videos</Title>
        </StyledContentRow>
        <VideoSlider items={ApiResponse} />
    </Section>
)

RenderSection.propTypes = {
    ApiResponse: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
}

export default Videos
