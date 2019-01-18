import React from 'react'
import Section from '../../components/Section'
import ContentRow from '../../components/ContentRow'
import SectionHeader from '../../components/SectionHeader'
import Collaborator from './Collaborator'
import { colors } from '../../styles'
import content from '../../data/collaborators.json'
import Logos from '../../assets/logos'
import { capitalizeFirstLetter } from '../../lib/utils'
import { StyledGrid, StyledLine } from './index.css'

const Collaborators = () => (
    <Section
        background={colors.darkPurple}
        fontColor={colors.white}
        id="collaborators"
    >
        <SectionHeader
            title={content.title}
            description={content.intro}
            white
        />

        <ContentRow wide>
            <StyledLine />
            <StyledGrid center textCenter>
                {content.companies
                    .filter(item => Logos[capitalizeFirstLetter(item.logo)])
                    .map(collaborator => {
                        const { name } = collaborator
                        return (
                            <Collaborator
                                key={name}
                                collaborator={collaborator}
                            />
                        )
                    })}
            </StyledGrid>
        </ContentRow>
    </Section>
)

export default Collaborators
