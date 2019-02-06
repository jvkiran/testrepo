import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'
import { StyledButton } from './Kyc.css'
import content from '../data/kyc.json'

const Kyc = () => (
    <Section
        background={colors.darkPurple}
        fontColor={colors.lightGrey}
        id="register"
    >
        <SectionHeader
            title={content.title}
            description={content.description}
            white
        />

        <ContentRow>
            <StyledButton primary href={content.button.link}>
                {content.button.title}
            </StyledButton>
        </ContentRow>
    </Section>
)

export default Kyc
