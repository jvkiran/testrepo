import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import mantaray from '@oceanprotocol/art/mantaray/mantaray-back.svg'
import content from '../data/datascience.json'
import { colors } from '../styles'

const DataScience = () => (
    <Section
        id="datascience"
        background={colors.darkPurple}
        backgroundImage={mantaray}
    >
        <SectionHeader
            title={content.title}
            description={content.description}
            white
        />
    </Section>
)

export default DataScience
