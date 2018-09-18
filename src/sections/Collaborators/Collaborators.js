import React from 'react'
import Section from '../../components/Section'
import Title from '../../components/Title'
import ContentRow from '../../components/ContentRow'
import Collaborator from './Collaborator'
import { colors } from '../../styles'
import collaborators from '../../data/collaborators.json'
import {
    StyledGrid,
    StyledParagraph,
    StyledLine
} from './Collaborators.css'

const content = {
    'title': 'The companies \ntrusting Ocean Protocol',
    'intro': `We work closely with our collaborators to iterate on Ocean Protocol... Oh right. I forgot about the battle. Why would I want to know that? You've got all this money. How come you always dress like you're doing your laundry? We'll go deliver this crate like professionals, and then we'll go home. Subjugated, yet honored. Bender, I didn't know you liked cooking. That's so cute.`
}

const Collaborators = () => (
    <Section background={colors.darkPurple} fontColor={colors.white} id="collaborators">
        <ContentRow>
            <Title white>{content.title}</Title>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph>
                {content.intro}
            </StyledParagraph>
        </ContentRow>

        <ContentRow wide>
            <StyledLine />
            <StyledGrid center textCenter>
                {collaborators.map(collaborator => {
                    const { name, logo, link, description } = collaborator
                    return <Collaborator key={name} name={name} logo={logo} link={link} description={description} />
                })}
            </StyledGrid>
        </ContentRow>

    </Section>
)

export default Collaborators
