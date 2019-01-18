import React from 'react'
import ContentRow from '../components/ContentRow'
import Button from '../components/Button'
import SubTitle from '../components/SubTitle'
import Cell from '../components/Cell'
import { Ul, Li } from '../components/Lists'
import mantaray from '@oceanprotocol/art/mantaray/mantaray-back.svg'
import {
    StyledSection,
    StyledGrid,
    StyledTitle,
    StyledParagraph,
    DocsList
} from './Docs.css'
import content from '../data/docs.json'
import { colors } from '../styles'

const Docs = () => (
    <StyledSection
        id="docs"
        background={colors.dimmedGrey}
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
                        <SubTitle left>Ocean Protocol Documentation</SubTitle>
                        <Ul>
                            {content.links.map(link => {
                                const { title, url } = link

                                return (
                                    <Li key={title}>
                                        <a href={url}>{title}</a>
                                    </Li>
                                )
                            })}
                            <Li>And much more...</Li>
                        </Ul>
                        <Button primary href="https://docs.oceanprotocol.com">
                            Go to Docs
                        </Button>
                    </DocsList>
                </Cell>
            </StyledGrid>
        </ContentRow>
    </StyledSection>
)

export default Docs
