import PropTypes from 'prop-types'

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
        const eventDateEndFormattedMonth = eventDateEnd.toLocaleDateString(
            'en-US',
            {
                month: 'long',
                timeZone: 'UTC'
            }
        )
        const eventDateFormattedDay = eventDate.toLocaleDateString('en-US', {
            day: 'numeric',
            timeZone: 'UTC'
        })
        const eventDateEndFormattedDay = eventDateEnd.toLocaleDateString(
            'en-US',
            {
                day: 'numeric',
                timeZone: 'UTC'
            }
        )

        // handle multi-day events across multiple months
        if (eventDateFormattedMonth !== eventDateEndFormattedMonth) {
            return `${eventDateFormattedMonth} ${eventDateFormattedDay}–${eventDateEndFormattedMonth} ${eventDateEndFormattedDay}, ${eventDateFormattedYear}`
        }

        return `${eventDateFormattedMonth} ${eventDateFormattedDay}–${eventDateEndFormattedDay}, ${eventDateFormattedYear}`
    }

    return eventDateFormatted
}

export default EventDate

EventDate.propTypes = {
    date: PropTypes.string.isRequired,
    dateEnd: PropTypes.string
}
