import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import events from '../data/events'
import cross from '../assets/misc/cross.svg'
import { colors } from '../styles'
import {
    PastListing,
    StyledEvent,
    StyledEventCity,
    StyledEventDate,
    StyledEventName,
    StyledEvents,
    ArchiveButton,
    ModalOverlay,
    Modal,
    StyledClose,
    ArchiveTitle,
    OverflowDiv,
    StyledTitle,
    StyledParagraph
} from './Events.css'

let elementWidth

const EventDate = ({ date, dateEnd }) => {
    const eventDate = new Date(date)
    const eventDateFormatted = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    })

    // handle multi-day events
    if (dateEnd) {
        const eventDateEnd = new Date(dateEnd)
        const eventDateFormattedYear = eventDate.toLocaleDateString('en-US', {
            year: 'numeric',
            timeZone: 'UTC'
        })
        const eventDateFormattedMonth = eventDate.toLocaleDateString('en-US', {
            month: 'long',
            timeZone: 'UTC'
        })
        const eventDateEndFormattedMonth = eventDateEnd.toLocaleDateString('en-US', {
            month: 'long',
            timeZone: 'UTC'
        })
        const eventDateFormattedDay = eventDate.toLocaleDateString('en-US', {
            day: 'numeric',
            timeZone: 'UTC'
        })
        const eventDateEndFormattedDay = eventDateEnd.toLocaleDateString('en-US', {
            day: 'numeric',
            timeZone: 'UTC'
        })

        // handle multi-day events across multiple months
        if (eventDateFormattedMonth !== eventDateEndFormattedMonth) {
            return `${eventDateFormattedMonth} ${eventDateFormattedDay}–${eventDateEndFormattedMonth} ${eventDateEndFormattedDay}, ${eventDateFormattedYear}`
        }

        return `${eventDateFormattedMonth} ${eventDateFormattedDay}–${eventDateEndFormattedDay}, ${eventDateFormattedYear}`
    }

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
            <Event event={event} key={index} />
        )).reduce((r, element, index) => {
            // finally, put a <div> around every 4th event for the slider
            index % groupSize === 0 && r.push([])
            r[r.length - 1].push(element)
            return r
        }, []).map((rowContent, index) => <div key={index}>{rowContent}</div>)
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
            <PastEvent event={event} key={index} />
        ))
    } else {
        return []
    }
}

const PastEvent = ({ event }) => (
    <PastListing href={event.link} target="_blank" rel="noopener">
        <p className="date">
            <EventDate date={event.date} dateEnd={event.date_end} />
        </p>
        <p className="city">
            {event.city}
        </p>
        <p className="event">
            {event.eventName}
        </p>
    </PastListing>
)

PastEvent.propTypes = {
    event: PropTypes.object.isRequired
}

const Event = ({ event }) => (
    <StyledEvent flexWidth={elementWidth} href={event.link} key={event.city} target="_blank" rel="noopener">
        <StyledEventCity>{event.city}</StyledEventCity>
        {!!event.eventName && (
            <StyledEventName>{event.eventName}</StyledEventName>
        )}
        <StyledEventDate>
            <EventDate date={event.date} dateEnd={event.date_end} />
        </StyledEventDate>
    </StyledEvent>
)

Event.propTypes = {
    event: PropTypes.object.isRequired
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
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false
        }
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
                <ArchiveButton onClick={() => this.openModal()}>
                    View Events Archive
                </ArchiveButton>
                {this.state.modalIsOpen === true &&
                    <ModalOverlay>
                        <Modal>
                            <StyledClose alt="close" onClick={() => this.closeModal()} src={cross} />
                            <ArchiveTitle>
                                Events Archive
                            </ArchiveTitle>
                            <OverflowDiv>
                                {past}
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
    <Section background={colors.black} backgroundImage={OceanJeyllyfishBack} fontColor={colors.white} id="events" style={backgroundStyles}>
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
