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
    title: 'The companies \ntrusting Ocean Protocol',
    intro: `We work closely with our collaborators to iterate on the network's underlying technology. The following projects either have an agreement with Ocean Protocol or are actively working on integrating their project with Ocean Protocol.`
}

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
        <ContentRow>
            <StyledTitle white>{content.title}</StyledTitle>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph>{content.intro}</StyledParagraph>
        </ContentRow>

        <ContentRow wide>
            <StyledLine />
            <StyledGrid center textCenter>
                {collaborators.map(collaborator => {
                    const { name } = collaborator
                    return (
                        <Collaborator key={name} collaborator={collaborator} />
                    )
                })}
            </StyledGrid>
        </ContentRow>
    </Section>
)

export default Collaborators
