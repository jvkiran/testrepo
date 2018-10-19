import React from 'react'
import PropTypes from 'prop-types'
import EventDate from './EventDate'
import {
    StyledEvent,
    StyledEventCity,
    StyledEventDate,
    StyledEventName
} from './Event.css'

const Event = ({ event }) => (
    <StyledEvent href={event.link} target="_blank" rel="noopener">
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

export default Event
