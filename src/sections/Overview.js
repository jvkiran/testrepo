import React from 'react'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import { OverviewActions, OverviewAction } from './Overview.css'

const content = [
    {
        title: 'Protocol',
        description: 'Find out more about Ocean and the new data economy.',
        link: '/protocol'
    },
    {
        title: 'Community',
        description: 'Get to know our community.',
        link: '/community'
    },
    {
        title: 'Developers',
        description: 'Start building on Ocean today.',
        link: '/developers'
    }
]

const Overview = () => (
    <Section id="overview">
        <ContentRow>
            <OverviewActions>
                {content.map(item => (
                    <li key={item.title}>
                        <OverviewAction to={item.link}>
                            <h2>{item.title}</h2> <p>{item.description}</p>
                        </OverviewAction>
                    </li>
                ))}
            </OverviewActions>
        </ContentRow>
    </Section>
)

export default Overview
