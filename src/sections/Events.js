import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import ContentRow from '../components/ContentRow';
import events from '../data/events.json';
import { colors } from '../styles';

require('./Events.css');

const Events = () => (
    <Section id="events" background={colors.black} fontColor={colors.white}>
        <ContentRow>
            <Title white>Events</Title>
        </ContentRow>

        <ContentRow narrow>
            <Paragraph>
                Our events are cool
            </Paragraph>
        </ContentRow>

        <ContentRow>
            <div className="events">
                {events.map((event, idx) => (
                    <div className="event" key={event.city}>
                        <a href={event.link}>
                            <span className="event__city">{event.city}</span>
                            <span className="event__date">{event.date}</span>
                        </a>
                    </div>
                ))}
            </div>
        </ContentRow>
    </Section>
);

export default Events;
