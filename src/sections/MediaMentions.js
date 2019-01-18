import React from 'react'
import ContentRow from '../components/ContentRow'
import Section from '../components/Section'
import content from '../data/mediamentions.json'
import { StyledGrid, StyledTitle, StyledLogo } from './MediaMentions.css'

const MediaMentions = () => (
    <Section id="mediamentions">
        <ContentRow wide>
            <StyledTitle white>{content.title}</StyledTitle>
            <StyledGrid center textCenter>
                {content.publications.map(publication => {
                    const { name, logo, link } = publication
                    return (
                        <div key={name}>
                            <a href={link} title={name}>
                                <StyledLogo logo={logo} className={logo} />
                            </a>
                        </div>
                    )
                })}
            </StyledGrid>
        </ContentRow>
    </Section>
)

export default MediaMentions
