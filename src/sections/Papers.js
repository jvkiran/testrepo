/* global ga */

import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Grid from '../components/Grid'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import { colors } from '../styles'
import {
    StyledWhitepaper,
    StyledTitle,
    StyledFooter,
    StyledComments,
    FileType
} from './Papers.css'
import content from '../data/papers.json'

const Documentation = () => (
    <Section background={colors.black} fontColor={colors.white} id="papers">
        <SectionHeader title={content.title} white />

        <ContentRow wide>
            <Grid>
                {content.papers.map(paper => (
                    <Cell key={paper.key} smallGutter width={1 / 3}>
                        <StyledWhitepaper>
                            <StyledTitle>{paper.title}</StyledTitle>
                            <Paragraph>{paper.description}</Paragraph>
                            <StyledFooter>
                                <a
                                    download={paper.download.filename}
                                    href={`${process.env.PUBLIC_URL}${
                                        paper.download.file
                                    }`}
                                >
                                    <Button
                                        primary
                                        center
                                        onClick={() =>
                                            window.ga &&
                                            ga(
                                                'send',
                                                'event',
                                                'download',
                                                paper.key,
                                                'button'
                                            )
                                        }
                                    >
                                        Download <FileType>pdf</FileType>
                                    </Button>
                                </a>
                            </StyledFooter>
                        </StyledWhitepaper>
                    </Cell>
                ))}
            </Grid>
        </ContentRow>

        <ContentRow>
            <StyledComments
                dangerouslySetInnerHTML={{ __html: content.comment }}
            />
        </ContentRow>
    </Section>
)

export default Documentation
