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

const Collaborators = () => (
    <Section background={colors.black} fontColor={colors.white} id="Collaborators">
        <ContentRow>
            <Title white>Collaborators</Title>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph>
                Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators Collaborators
            </StyledParagraph>
        </ContentRow>

        <ContentRow wide>
            <StyledLine />
            <StyledGrid center textCenter>
                {collaborators.map(collaborator => {
                    const { name, image, link } = collaborator
                    return <Collaborator key={name} name={name} image={image} link={link} />
                })}
            </StyledGrid>
        </ContentRow>

    </Section>
)

export default Collaborators
