import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import ContentRow from '../components/ContentRow';
import Paragraph from '../components/Paragraph';
import roadshow from '../data/roadshow.json';
import events from '../data/events.json';
import { colors, fonts, responsive } from '../styles';

const StyledEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4rem;

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        margin-right: -1rem;
    }

    ${SubTitle} {
        width: 100%;
        text-align: center;
        margin: 0;
    }
`;

const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: block;
    width: 100%;
    background: ${({ minimal }) => (minimal ? 'none' : `rgb(${colors.black})`)};
    border: ${({ minimal }) => (minimal ? `0` : `.08rem solid rgb(${colors.pink})`)};
    border-radius: .1rem;
    margin-bottom: 1rem;

    ${({ minimal }) => (minimal ? null : `
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.3);

        &:hover,
        &:focus {
            box-shadow: 0 12px 30px 0 rgba(${colors.black}, 0.3);
        }
        &:active {
            box-shadow: 0 9px 18px 0 rgba(${colors.black}, 0.3);
        }
    `)};

    @media screen and (${responsive.sm.min}) {
        width: auto;
        flex: 0 1 calc(50% - 2rem);
        margin: 1rem;
    }
    @media screen and (${responsive.md.min}) {
        flex: 0 1 calc(33% - 2rem);
    }
    @media screen and (${responsive.lg.min}) {
        ${({ minimal }) => (minimal ? 'flex: 0 1 calc(25% - 2rem);' : 'flex: 0 1 calc(20% - 2rem);')};
    }
`;

const StyledEventCity = styled.h4`
    margin-top: 0;
    margin-bottom: 1rem;
    color: rgb(${colors.white});
`;

const StyledEventName = styled.p`
    display: block;
    color: rgb(${colors.lightGrey});
    margin-top: -.75rem;
    margin-bottom: 1rem;
`;

const StyledEventDate = styled.h5`
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    margin: 0;
    opacity: .8;
`;

const StyledTitle = styled(Title) `
    margin-bottom: 2rem;

    span {
        opacity: .5;
    }
`;

const StyledParagraph = styled(Paragraph) `
  margin-bottom: 0;
  text-align: center;
`;

const EventDate = (props) => {
    const eventDate = new Date(props.date)
    const eventDateFormatted = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return eventDateFormatted
};

function renderRoadshow(roadshow) {
    roadshow.sort(function (a, b) {
        return a.date.localeCompare(b.date);
    });

    if (roadshow.length > 0) {
        return roadshow.map((event, index) => (
            <Event key={index} event={event} />
        ));
    }
    else return [];
}

function renderEvents(events, minimal) {
    events.sort(function (a, b) {
        return a.date.localeCompare(b.date);
    });

    if (events.length > 0) {
        return events.map((event, index) => (
            <Event key={index} event={event} minimal={minimal} />
        ));
    }
    else return [];
}

const Event = ({ event, minimal }) => {
    const now = new Date();
    const past = now.setDate(now.getDate() - 3); // 3 days ago from right now
    const eventDate = new Date(event.date);

    if (eventDate > past) {
        return (
            <StyledEvent minimal={minimal} href={event.link} key={event.city}>
                <StyledEventCity>{event.city}</StyledEventCity>
                {!!event.eventName && (
                    <StyledEventName>{event.eventName}</StyledEventName>
                )}
                <StyledEventDate>
                    <EventDate date={event.date} />
                </StyledEventDate>
            </StyledEvent>
        );
    }
    else return [];
};

class EventsRoadshow extends Component {
    render() {
        const list = renderRoadshow(roadshow);

        return <StyledEvents>{list}</StyledEvents>
    }
}

class EventsAdditonal extends Component {
    render() {
        const minimal = true
        const list = renderEvents(events, minimal);

        return (
            <StyledEvents>
                <SubTitle white>More events</SubTitle>
                {list}
            </StyledEvents>
        );
    }
}

class Events extends Component {
    render() {
        return (
            <Section id="events" background={colors.grey} fontColor={colors.white}>
                <ContentRow>
                    <StyledTitle white>Ocean Protocol <span>Roadshow</span></StyledTitle>
                </ContentRow>

                <ContentRow narrow>
                    <StyledParagraph>Meet members of our team at our own roadshow or drop by at any of the following events.</StyledParagraph>
                </ContentRow>

                <EventsRoadshow />
                <EventsAdditonal />
            </Section>
        )
    }
};

export default Events;
