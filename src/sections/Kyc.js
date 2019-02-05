import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'
import { ReactComponent as Arrow } from '../assets/misc/arrow.svg'
import { StyledButton, Fractal, Divider } from './Kyc.css'
import content from '../data/kyc.json'
import { dates } from '../constants'

const launch = Date.parse(dates.launch)
const now = Date.now()

const Kyc = () => {
    if (now < launch) {
        return null
    }

    return (
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

                <Divider />

                <Fractal>
                    {content.fractal.title}
                    <a href={content.fractal.button.link}>
                        {content.fractal.button.title} <Arrow />
                    </a>
                </Fractal>
            </ContentRow>
        </Section>
    )
}

export default Kyc
