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

    * {
        width: 100%;
    }

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        margin-right: -1rem;
    }

    ${SubTitle} {
        text-align: center;
        margin-left: 1rem;
        margin-top: 0;
        margin-bottom: 1rem;
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

const StyledEventName = styled.h5`
    color: rgb(${colors.lightGrey});
    margin-top: -.75rem;
    margin-bottom: 1rem;
`;

const StyledEventDate = styled.h5`
    color: rgb(${colors.lightGrey});
    font-size: ${fonts.size.base};
    margin: 0;
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

class EventsRoadshow extends Component {
    render() {
        const list = roadshow.map((event) =>
            <StyledEvent href={event.link} key={event.city}>
                <StyledEventCity>{event.city}</StyledEventCity>
                <StyledEventDate>
                    <EventDate date={event.date} />
                </StyledEventDate>
            </StyledEvent>
        );
        return <StyledEvents>{list}</StyledEvents>
    }
}

class EventsAdditonal extends Component {
    render() {
        const list = events.map((event) =>
            <StyledEvent minimal href={event.link} key={event.city}>
                <StyledEventCity minimal>{event.city}</StyledEventCity>
                <StyledEventName>{event.eventName}</StyledEventName>
                <StyledEventDate>
                    <EventDate date={event.date} />
                </StyledEventDate>
            </StyledEvent>
        );
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
