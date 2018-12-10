import React from 'react'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import mantaray from '@oceanprotocol/art/mantaray/mantaray-back.svg'
import {
    StyledSection,
    StyledGrid,
    StyledTitle,
    StyledParagraph,
    DocsList,
    DocsLink
} from './Docs.css'
import content from '../data/docs.json'

const Docs = () => (
    <StyledSection
        id="docs"
        background={'252,252,252'}
        backgroundImage={mantaray}
    >
        <ContentRow>
            <StyledGrid>
                <Cell width={3 / 6}>
                    <StyledTitle>{content.title}</StyledTitle>
                    <StyledParagraph>{content.description}</StyledParagraph>
                </Cell>
                <Cell width={3 / 6}>
                    <DocsList>
                        <h2>Ocean Protocol Documentation</h2>
                        <ul>
                            {content.links.map(link => {
                                const { title, url } = link

                                return (
                                    <li key={title}>
                                        <a href={url}>{title}</a>
                                    </li>
                                )
                            })}
                            <li>And much more...</li>
                        </ul>
                        <DocsLink href="https://docs.oceanprotocol.com">
                            Go to Docs
                        </DocsLink>
                    </DocsList>
                </Cell>
            </StyledGrid>
        </ContentRow>
    </StyledSection>
)

export default Docs
