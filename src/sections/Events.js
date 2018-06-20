import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'

import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import events from '../data/events'
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
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        @media screen and (${responsive.sm.min}) {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        > div > div { /* stylelint-disable-line */
            display: flex !important; /* stylelint-disable-line */
            flex-wrap: wrap;
            align-items: stretch;
        }
    }

    .slick-dots {
        bottom: -2.5rem;

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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (${responsive.lg.min}) {
        flex: 0 1 calc(${props => props.flexWidth}% - 2rem);
        margin: ${props => (props.flexWidth === 52 ? '1rem auto' : '1rem')};
    }
`

const StyledEventCity = styled.h4`
    margin-top: 0;
    margin-bottom: .5rem;
    color: rgb(${colors.white});
    width: 100%;
    align-self: flex-start;
`

const StyledEventName = styled.p`
    display: block;
    color: rgb(${colors.lightGrey});
    width: 100%;
`

const StyledEventDate = styled.h5`
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    margin: 0;
    opacity: .8;
    width: 100%;
    align-self: flex-end;
`

const StyledTitle = styled(Title)`
    margin-bottom: 2rem;

    span { opacity: .5; }
`

const StyledParagraph = styled(Paragraph)`
    margin-bottom: 0;
    text-align: center;
`

const ArchiveButton = styled(Button)`
    text-align: center;
    cursor: pointer;
    margin: 5rem auto 0 auto;
    padding: .8rem 1rem;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    font-size: ${fonts.size.small};
    color: rgb(${colors.lightGrey});

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
        background: inherit;
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    }

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -3rem;
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

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: rgba(${colors.black}, .7);
`

const ModalHeight = '90vh'

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    background: rgb(${colors.black});
    color: rgb(${colors.white});
    border-radius: .1rem;
    border: .08rem solid rgb(${colors.pink});
    outline: none;
    padding: 2rem;
    height: auto;
    z-index: 2;
    width: 90vw;
    max-width: 50rem;
    max-height: ${ModalHeight};
    transform: translate(-50%, -50%);

    @media screen and (${responsive.md.min}) {
        padding: 3rem;
    }
`

const OverflowDiv = styled.div`
    overflow: auto;
    height: calc(${ModalHeight} - (10.5rem + 1px));
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    @media screen and (${responsive.md.min}) {
        height: calc(${ModalHeight} - (12.5rem + 1px));
    }
`

const ArchiveTitle = styled(Paragraph)`
    font-size: ${fonts.size.h4};
    font-family: ${fonts.family.title};
    line-height: ${fonts.lineHeight.title};
    border-bottom: .08rem solid rgb(${colors.lightGrey});
    padding-bottom: 1rem;
    margin-bottom: 0;
`

const PastListing = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: .08rem solid rgba(${colors.lightGrey}, .2);
    font-family: ${fonts.family.button};
    color: rgb(${colors.lightGrey});

    @media screen and (${responsive.sm.min}) {
        flex-direction: row;
    }

    &:hover,
    &:focus {
        transform: none;
        border-bottom-color: rgb(${colors.pink});

        .event {
            color: rgb(${colors.pink});
        }
    }

    p {
        width: 100%;
        margin: 0;
        transition: .2s ease-out;
    }

    .city {
        color: rgb(${colors.white});
    }
`

const EventDate = ({ date, dateEnd }) => {
    const eventDate = new Date(date)
    const eventDateFormatted = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    })

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
        const eventDateFormattedDay = eventDate.toLocaleDateString('en-US', {
            day: 'numeric',
            timeZone: 'UTC'
        })
        const eventDateEndFormattedDay = eventDateEnd.toLocaleDateString('en-US', {
            day: 'numeric',
            timeZone: 'UTC'
        })

        return `${eventDateFormattedMonth} ${eventDateFormattedDay}–${eventDateEndFormattedDay}, ${eventDateFormattedYear}`
    } else {
        return eventDateFormatted
    }
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
    <PastListing href={event.link} target="_blank">
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
    event: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

const Event = ({ event }) => (
    <StyledEvent flexWidth={elementWidth} href={event.link} key={event.city} target="_blank">
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
