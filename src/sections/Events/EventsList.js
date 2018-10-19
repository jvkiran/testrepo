import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'
import { StyledEventsList, Item, LastItem } from './EventsList.css'

const FilteredEvents = ({ events }) => {
    if (events.length > 0) {
        // first, filter out all past events
        let eventsFiltered = events.filter(event => {
            const now = new Date()
            const past = now.setDate(now.getDate() - 3) // 3 days ago from right now
            const eventDate = new Date(event.date)

            return eventDate > past
        })

        const collator = new Intl.Collator('en', {
            numeric: true,
            sensitivity: 'base'
        })

        // then, sort the remaining ones by date
        let eventsFilteredSorted = eventsFiltered.sort((a, b) =>
            collator.compare(a.date, b.date)
        )

        return eventsFilteredSorted.map((event, index) => (
            <Item key={index}>
                <Event event={event} />
            </Item>
        ))
    } else {
        return []
    }
}

const EventsList = ({ events, openModal }) => (
    <StyledEventsList>
        <FilteredEvents events={events} />
        <LastItem onClick={() => openModal()}>View events archive</LastItem>
    </StyledEventsList>
)

EventsList.propTypes = {
    events: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired
}

export default EventsList
