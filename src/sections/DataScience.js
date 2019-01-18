import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
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

        <Button primary center href="https://datascience.oceanprotocol.com">
            datascience.oceanprotocol.com
        </Button>
    </Section>
)

export default DataScience
