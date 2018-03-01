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
import videos from '../data/videos.json'
import playIcon from '../assets/misc/play-circle.svg'
import cross from '../assets/misc/cross.svg'
import { colors, fonts, responsive } from '../styles'

const Background = styled.div`
    position: absolute;
    top: 0;
    right: -1rem;
    bottom: 0;
    left: -1rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: .2;
    z-index: 0;
`

const StyledTitle = styled(Title)`
    margin-bottom: 0;
`

const CenterParagraph = styled(Paragraph)`
    text-align: center;
`

const StyledContentRow = styled(ContentRow)`
    max-width: 74rem;
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

const VideoTitle = styled.h1`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.white});
    text-align: center;
    margin-bottom: 2rem;
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
    border: .4rem solid rgb(${colors.black});
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

    &:hover {
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
    color: rgb(${colors.black});
    background: rgb(${colors.white});
    max-width: 21.3rem;
    margin: 0 auto;
    
    @media screen and (${responsive.sm.min}) {
        margin: 0 10px;
    }
`

const VideoThumb = styled.img`
    padding: .4rem;
    background: rgb(${colors.black});

    &.active {
        background: rgb(${colors.white});
    }
`

const ThumbTitle = styled(Paragraph)`
    padding: 1.25rem;
    margin: 0;
    text-align: center;
    font-family: ${fonts.family.button};

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
                            <ListContainer>
                                <VideoThumb alt="video thumbnail" className={this.state.active === index ? 'active' : ''} src={properties.snippet.thumbnails.medium.url} />
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
                    }, 2000) /* Demo. TODO: Remove the setTimeout function*/
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
