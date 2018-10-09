import React, { PureComponent } from 'react'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import Section from '../../components/Section'
import ContentRow from '../../components/ContentRow'
import eventsData from '../../data/events'
import { colors } from '../../styles'
import {
    StyledTitle,
    StyledParagraph
} from './Events.css'

import EventsList from './EventsList'
import Archive from './Archive'

const backgroundStyles = {
    backgroundPosition: 'center center'
}

export default class Events extends PureComponent {
    render() {
        return (
            <Section background={colors.black} backgroundImage={OceanJeyllyfishBack} fontColor={colors.white} id="events" style={backgroundStyles}>
                <ContentRow>
                    <StyledTitle white>Events</StyledTitle>
                </ContentRow>

                <ContentRow narrow>
                    <StyledParagraph>Meet members of our team at any of the following events.</StyledParagraph>
                </ContentRow>

                <EventsList events={eventsData} />

                <Archive events={eventsData} />
            </Section>
        )
    }
}
