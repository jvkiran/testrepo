import React from 'react'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'
import ContentRow from '../../components/ContentRow'
import Team from './Team'
import Advisors from './Advisors'

import { colors } from '../../styles'
import { Line } from './index.css'

const People = () => (
    <Section background={colors.black} fontColor={colors.white} id="people">
        <SectionHeader
            title={'The People Building Ocean Protocol'}
            description={
                'Ocean Protocol is being built by a diverse ecosystem of contributors who share a common vision of unlocking data for AI. Our core team and advisors have converged from many different countries, industries, and backgrounds to collaborate on kickstarting a New Data Economy.'
            }
            white
            line
        />

        <ContentRow>
            <Team />
        </ContentRow>

        <ContentRow>
            <Line />
            <Advisors />
        </ContentRow>
    </Section>
)

export default People
