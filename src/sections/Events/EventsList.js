import React, { PureComponent } from 'react'
import Slider from 'react-slick'
import Event from './Event'
import { StyledEvents } from './EventsList.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function filterEvents(events) {
    if (events.length > 0) {
        // first, filter out all past events
        const eventsFiltered = events.filter(event => {
            const now = new Date()
            const past = now.setDate(now.getDate() - 3) // 3 days ago from right now
            const eventDate = new Date(event.date)

            return eventDate > past
        })

        // then, sort the remaining ones by date
        const eventsFilteredSorted = eventsFiltered.sort((a, b) => a.date.localeCompare(b.date))

        // Make the group size equal to the number of future events if there are less than 4
        const groupSize = (eventsFilteredSorted.length < 4) ? eventsFilteredSorted.length : 4

        return eventsFilteredSorted.map((event, index) => (
            <Event event={event} key={index} />
        ))
            // finally, put a <div> around every 4th event for the slider
            .reduce((r, element, index) => {
                index % groupSize === 0 && r.push([])
                r[r.length - 1].push(element)
                return r
            }, [])
            .map((rowContent, index) => <div key={index}>{rowContent}</div>)
    } else return []
}

export default class EventsList extends PureComponent {
    list = filterEvents(this.props.events)

    settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    }

    render() {
        return (
            <StyledEvents>
                <Slider {...this.settings}>
                    {this.list}
                </Slider>
            </StyledEvents>
        )
    }
}
