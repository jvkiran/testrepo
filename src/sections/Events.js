import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Paragraph from '../components/Paragraph'
import events from '../data/events.json'
import jellyfish from '../assets/graphics/jellyfish.svg'
import cross from '../assets/misc/cross.svg'
import { colors, fonts, responsive } from '../styles'

let elementWidth

const StyledEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4rem;

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        width: calc(100% + 2rem);
    }

    @media screen and (min-width: 1600px) {
        width: 100%;
        max-width: 120rem;
        margin-left: auto;
        margin-right: auto;
    }

    ${SubTitle} { /* stylelint-disable-line */
        width: 100%;
        text-align: center;
        margin: 0;
        margin-top: 2rem;
    }

    .slick-slider {
        width: calc(100% + 3rem);
        margin-left: -1.5rem;
        margin-right: -1.5rem;
    }

    .slick-slide,
    .slick-initialized .slick-slide {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        @media screen and (${responsive.sm.min}) {
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }

    .slick-dots {
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
        left: 1rem;
    }

    .slick-next {
        right: 1rem;
    }
`

const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: block;
    width: 100%;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    margin-bottom: 1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    }

    @media screen and (${responsive.sm.min}) {
        width: auto;
        flex: 0 1 calc(50% - 2rem);
        margin: 1rem;
    }

    @media screen and (${responsive.lg.min}) {
        flex: 0 1 calc(${props => props.flexWidth}% - 2rem);
        margin: ${props => (props.flexWidth === 52 ? '1rem auto' : '1rem')};
    }
`

const StyledEventCity = styled.h4`
    margin-top: 0;
    margin-bottom: 1rem;
    color: rgb(${colors.white});
`

const StyledEventName = styled.p`
    display: block;
    color: rgb(${colors.lightGrey});
    margin-top: -.75rem;
    margin-bottom: 1rem;
`

const StyledEventDate = styled.h5`
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    margin: 0;
    opacity: .8;
`

const StyledTitle = styled(Title)`
    margin-bottom: 2rem;

    span { opacity: .5; }
`

const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
    text-align: center;
`

const ArchiveParagraph = styled(Paragraph)`
    color: rgb(${colors.pink});
    margin-top: 3rem;
    margin-bottom: -3rem;
    text-align: center;
    cursor: pointer;
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

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, .9);
`

const ModalHeight = '70vh'

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    border: 0;
    background: rgb(${colors.white});
    color: rgb(${colors.black});
    border-radius: .1rem;
    outline: none;
    padding: 2rem;
    height: auto;
    z-index: 2;
    width: 90vw;
    max-width: 1080px;
    max-height: ${ModalHeight};
    transform: translate(-50%, -50%);

    @media screen and (${responsive.md.min}) {
        width: 60vw;
        padding: 3rem;
    }

    @media screen and (${responsive.lg.min}) {
        padding: 4rem;
    }

    @media screen and (${responsive.xlg.min}) {
        padding: 6rem;
    }
`

const OverflowDiv = styled.div`
    overflow: auto;
    height: calc(${ModalHeight} - (10.5rem + 1px));
    padding-top: 2rem;

    @media screen and (${responsive.md.min}) {
        height: calc(${ModalHeight} - (12.5rem + 1px));
    }

    @media screen and (${responsive.lg.min}) {
        height: calc(${ModalHeight} - (18.5rem + 1px));
    }
`

const ArchiveTitle = styled(Paragraph)`
    font-size: ${fonts.size.h4};
    font-family: ${fonts.family.title};
    border-bottom: 1px solid rgb(${colors.grey});
    padding-bottom: 2rem;
    margin-bottom: 0;
`

const PastListing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    @media screen and (${responsive.sm.min}) {
        flex-direction: row;
        margin-bottom: 0;
    }

    p {
        width: 100%;
        margin-bottom: .5rem;

        @media screen and (${responsive.sm.min}) {
            width: calc(50% - 20px);
            margin-bottom: 1rem;
        }

        @media screen and (${responsive.md.min}) {
            margin-bottom: 1.5rem;
        }

        @media screen and (${responsive.xlg.min}) {
            margin-bottom: 2rem;
        }
    }
`

const EventDate = (props) => {
    const eventDate = new Date(props.date)
    const eventDateFormatted = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    })

    return eventDateFormatted
}

function renderEvents() {
    if (events.length > 0) {
        const eventsFilteredSorted = events.filter((event) => {
            const now = new Date()
            const past = now.setDate(now.getDate() - 3) // 3 days ago from right now
            const eventDate = new Date(event.date)

            // first, filter out all past events
            return eventDate > past
        }).sort((a, b) =>
            // then, sort the remaining ones by date
            a.date.localeCompare(b.date))

        // Make the group size equal to the number of future events if there are less than 4
        const groupSize = (eventsFilteredSorted.length < 4) ? eventsFilteredSorted.length : 4
        elementWidth = groupSize
        // Change the CSS width of each of the displaying events to a better suited one (desktop only)
        switch (groupSize) {
            case 1:
                elementWidth = 52
                break
            case 2:
                elementWidth = 50
                break
            case 3:
                elementWidth = 33.33
                break
            default:
                elementWidth = 25
        }

        return eventsFilteredSorted.map((event, index) => (
            <Event event={event} key={index} /> // eslint-disable-line react/no-array-index-key
        )).reduce((r, element, index) => {
            // finally, put a <div> around every 4th event for the slider
            index % groupSize === 0 && r.push([]) // eslint-disable-line
            r[r.length - 1].push(element)
            return r
        }, []).map((rowContent, index) => <div key={index}>{rowContent}</div>) // eslint-disable-line react/no-array-index-key
    } else return []
}

function pastEvents() {
    if (events.length > 0) {
        const eventsFilteredSorted = events.filter((event) => {
            const now = new Date()
            const past = now.setDate(now.getDate() - 3)
            const eventDate = new Date(event.date)
            return eventDate <= past
        }).sort((a, b) => b.date.localeCompare(a.date))

        return eventsFilteredSorted.map((event, index) => (
            <PastEvent event={event} key={index} /> // eslint-disable-line react/no-array-index-key
        ))
    } else {
        return []
    }
}

const PastEvent = ({ event }) => (
    <PastListing>
        <p>
            <EventDate date={event.date} />
        </p>
        <p>
            {event.city}, {event.eventName}
        </p>
    </PastListing>
)

PastEvent.propTypes = {
    event: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

const Event = ({ event }) => (
    <StyledEvent flexWidth={elementWidth} href={event.link} key={event.city}>
        <StyledEventCity>{event.city}</StyledEventCity>
        {!!event.eventName && (
            <StyledEventName>{event.eventName}</StyledEventName>
        )}
        <StyledEventDate>
            <EventDate date={event.date} />
        </StyledEventDate>
    </StyledEvent>
)

Event.propTypes = {
    event: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

const EventsList = () => {
    const list = renderEvents(events)
    const settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    }

    return (
        <StyledEvents>
            <Slider {...settings}>
                {list}
            </Slider>
        </StyledEvents>
    )
}

class Archive extends React.Component {
    state = {
        modalIsOpen: false
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }

    openModal() {
        this.setState({ modalIsOpen: true })
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }

    render() {
        const past = pastEvents(events)
        return (
            <div>
                <ArchiveParagraph onClick={() => this.openModal()}>
                    View Events Archive
                </ArchiveParagraph>
                {this.state.modalIsOpen === true &&
                <ModalOverlay>
                    <Modal>
                        <StyledClose alt="close" onClick={() => this.closeModal()} src={cross} />
                        <ArchiveTitle>
                            Events Archive
                        </ArchiveTitle>
                        <OverflowDiv>
                            { past }
                        </OverflowDiv>
                    </Modal>
                </ModalOverlay>
                }
            </div>
        )
    }
}

const backgroundStyles = {
    backgroundPosition: 'center center'
}

const Events = () => (
    <Section background={colors.black} backgroundImage={jellyfish} fontColor={colors.white} id="events" style={backgroundStyles}>
        <ContentRow>
            <StyledTitle white>Events</StyledTitle>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph>Meet members of our team at any of the following events.</StyledParagraph>
        </ContentRow>

        <EventsList />

        <Archive />
    </Section>
)

export default Events
