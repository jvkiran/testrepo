import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Section from '../components/Section';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import ContentRow from '../components/ContentRow';
import Paragraph from '../components/Paragraph';
import events from '../data/events.json';
import jellyfish from '../assets/graphics/jellyfish.svg';
import { colors, fonts, responsive } from '../styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        width: calc(100% + 2rem);
    }

    @media screen and (min-width: 1600px) {
        max-width: 120rem;
        margin-left: auto;
        margin-right: auto;
    }

    ${SubTitle} {
        width: 100%;
        text-align: center;
        margin: 0;
        margin-top: 2rem;
    }

    .slick-slider {
        width: calc(100% + 4rem);
        margin-left: -2rem;
        margin-right: -2rem;
    }

    .slick-slide,
    .slick-initialized .slick-slide {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
    }

    .slick-dots {
        button:before {
            font-size: ${fonts.size.small};
            opacity: .25;
            color: rgb(${colors.white});
        }
        li.slick-active button:before {
            color: rgb(${colors.white});
        }
        .slick-active:only-child {
            display: none;
        }
    }
`;

const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: block;
    width: 100%;
    background: ${({ minimal }) => (minimal ? 'none' : `rgba(${colors.darkGrey}, .8)`)};
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

    ${({ minimal }) => (minimal ? 'flex: 0 1 50%' : null)};

    @media screen and (${responsive.sm.min}) {
        width: auto;
        flex: 0 1 calc(50% - 2rem);
        margin: 1rem;
    }
    @media screen and (${responsive.md.min}) {
        ${({ minimal }) => (minimal ? 'flex: 0 1 calc(25% - 2rem)' : 'flex: 0 1 calc(33% - 2rem)')};
    }
    @media screen and (${responsive.lg.min}) {
        ${({ minimal }) => (minimal ? null : 'flex: 0 1 calc(20% - 2rem)')};
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

function renderEvents(events, minimal) {
    if (events.length > 0) {
        const eventsFilteredSorted = events.filter((event, index) => {
            const now = new Date();
            const past = now.setDate(now.getDate() - 3); // 3 days ago from right now
            const eventDate = new Date(event.date);

            // first, filter out all past events
            return eventDate > past 
        }).sort((a, b) => {
            // then, sort the remaining ones by date
            return a.date.localeCompare(b.date);
        });

        const groupSize = 4;

        return eventsFilteredSorted.map((event, index) => (
            <Event key={index} event={event} minimal={minimal} />
        )).reduce((r, element, index) => {
            // finally, put a <div> around every 4th event for the slider
            index % groupSize === 0 && r.push([]);
            r[r.length - 1].push(element);
            return r;
        }, []).map((rowContent) => {
            return <div>{rowContent}</div>;
        });
    }
    else return [];
}

const Event = ({ event, minimal }) => {
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
};

class EventsList extends Component {
    render() {
        const minimal = true
        const list = renderEvents(events, minimal);
        const settings = {
            dots: true,
            infinite: false,
            arrows: false,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true
        };

        return (
            <StyledEvents>
                <Slider {...settings}>
                    {list}
                </Slider>
            </StyledEvents>
        );
    }
}

const backgroundStyles = {
    backgroundPosition: 'center center'
}

class Events extends Component {
    render() {
        return (
            <Section id="events" background={colors.black} backgroundImage={jellyfish} fontColor={colors.white} style={backgroundStyles}>
                <ContentRow>
                    <StyledTitle white>Events</StyledTitle>
                </ContentRow>

                <ContentRow narrow>
                    <StyledParagraph>Meet members of our team at any of the following events.</StyledParagraph>
                </ContentRow>

                <EventsList />
            </Section>
        )
    }
};

export default Events;
