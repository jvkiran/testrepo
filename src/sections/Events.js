import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import Section from '../components/Section';
import Title from '../components/Title';
import ContentRow from '../components/ContentRow';
import events from '../data/events.json';
import { colors, fonts, responsive } from '../styles';

const StyledEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        margin-right: -1rem;
    }
`;

const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: block;
    width: 100%;
    background: rgb(${colors.black});
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    margin-bottom: 1rem;

    @media screen and (${responsive.sm.min}) {
        width: auto;
        flex: 1 1 calc(50% - 2rem);
        margin: 1rem;
    }
    @media screen and (${responsive.md.min}) {
        width: auto;
        flex: 1 1 calc(33% - 2rem);
    }
    @media screen and (${responsive.lg.min}) {
        width: auto;
        flex: 1 1 calc(20% - 2rem);
    }
`;

const StyledEventCity = styled.h4`
    margin-top: 0;
    margin-bottom: 1rem;
    color: rgb(${colors.white});
`;

const StyledEventDate = styled(Moment)`
    color: rgb(${colors.lightGrey});
    font-size: ${fonts.size.base};
    font-family: ${fonts.family.title};
    font-weight: ${fonts.fontWeight.title};
`;

const StyledTitle = styled(Title)`
    span {
        opacity: .5;
    }
`;

class EventsList extends React.Component {
    render() {
        const list = events.map((event) =>
            <StyledEvent href={event.link} key={event.city}>
                <StyledEventCity>{event.city}</StyledEventCity>
                <StyledEventDate date={event.date} format="MMMM D, YYYY" />
            </StyledEvent>
        );
        return <StyledEvents>{list}</StyledEvents>
    }
}

const Events = () => (
    <Section id="events" background={colors.grey} fontColor={colors.white}>
        <ContentRow>
            <StyledTitle white>Ocean Protocol <span>Roadshow</span></StyledTitle>
        </ContentRow>

        <EventsList />
    </Section>
);

export default Events;
