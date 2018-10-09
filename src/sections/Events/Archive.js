import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cross from '../../assets/misc/cross.svg'
import {
    ArchiveButton,
    ModalOverlay,
    Modal,
    StyledClose,
    ArchiveTitle,
    OverflowDiv,
    PastListing
} from './Archive.css'

import EventDate from './EventDate'

function pastEvents(events) {
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

export default class Archive extends PureComponent {
    state = {
        modalIsOpen: false
    }

    static propTypes = {
        events: PropTypes.array.isRequired
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
        const past = pastEvents(this.props.events)

        return (
            <>
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
            </>
        )
    }
}
