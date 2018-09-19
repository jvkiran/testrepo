import React from 'react'
import Section from '../../components/Section'
import ContentRow from '../../components/ContentRow'
import Collaborator from './Collaborator'
import { colors } from '../../styles'
import collaborators from '../../data/collaborators.json'
import {
    StyledGrid,
    StyledParagraph,
    StyledLine,
    StyledTitle
} from './Collaborators.css'

const content = {
    'title': 'The companies \ntrusting Ocean Protocol',
    'intro': `We work closely with our collaborators to iterate on the network's underlying technology. The following projects either have an agreement with Ocean Protocol or are actively working on integrating their project with Ocean Protocol. You've got all this money. How come you always dress like you're doing your laundry? We'll go deliver this crate like professionals, and then we'll go home. Subjugated, yet honored. Bender, I didn't know you liked cooking. That's so cute.`
}

const Collaborators = () => (
    <Section background={colors.darkPurple} fontColor={colors.white} id="collaborators">
        <ContentRow>
            <StyledTitle white>{content.title}</StyledTitle>
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
                    // TODO: remove this hack once we have all logos only once on page
                    const random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                    const { name, logo, link, description } = collaborator
                    return <Collaborator key={`${name}-${random}`} name={name} logo={logo} link={link} description={description} />
                })}
            </StyledGrid>
        </ContentRow>

    </Section>
)

export default Collaborators
