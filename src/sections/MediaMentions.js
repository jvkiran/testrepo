import React from 'react'
import ContentRow from '../components/ContentRow'
import content from '../data/mediamentions.json'
import {
    StyledSection,
    StyledGrid,
    StyledTitle,
    StyledLogo
} from './MediaMentions.css'

const MediaMentions = () => (
    <StyledSection id="mediamentions">
        <ContentRow wide>
            <StyledTitle white>{content.title}</StyledTitle>
            <StyledGrid center textCenter>
                {content.publications.map(publication => {
                    const { name, logo, link } = publication
                    return (
                        <div key={name}>
                            <a href={link} title={name}>
                                <StyledLogo logo={logo} />
                            </a>
                        </div>
                    )
                })}
            </StyledGrid>
        </ContentRow>
    </StyledSection>
)

export default MediaMentions
