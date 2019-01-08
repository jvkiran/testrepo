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

// const fisherYatesShuffle = array => {
//     let newArr = [].concat(array) // create new array

//     for (var i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
//     }
//     return newArr
// }

// const collaboratorsShuffled = fisherYatesShuffle(collaborators)

const Collaborators = () => (
    <Section
        background={colors.darkPurple}
        fontColor={colors.white}
        id="collaborators"
    >
        <SectionHeader
            title={content.title}
            description={content.intro}
            line
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
