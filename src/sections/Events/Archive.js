import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Cross } from '../../assets/misc/cross.svg'
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
    static propTypes = {
        events: PropTypes.array.isRequired,
        openModal: PropTypes.func.isRequired,
        closeModal: PropTypes.func.isRequired,
        modalIsOpen: PropTypes.bool.isRequired
    }

    render() {
        const past = pastEvents(this.props.events)
        const { openModal, closeModal } = this.props

        return (
            <>
                <ArchiveButton onClick={() => openModal()}>
                    View Events Archive
                </ArchiveButton>
                {this.props.modalIsOpen &&
                    <ModalOverlay>
                        <Modal>
                            <StyledClose title="close" onClick={() => closeModal()}>
                                <Cross />
                            </StyledClose>
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
