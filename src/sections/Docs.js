import React from 'react'
import Grid from '../components/Grid'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import {
    StyledSection,
    StyledTitle,
    StyledParagraph,
    DocsList
} from './Docs.css'

const content = {
    title: 'The nitty gritty tech details',
    description:
        'Learn about the components of the Ocean Protocol software stack, and how to run or use the components relevant to you.'
}

const Docs = () => (
    <StyledSection id="docs">
        <ContentRow>
            <Grid>
                <Cell width={3 / 6}>
                    <StyledTitle>{content.title}</StyledTitle>
                    <StyledParagraph>{content.description}</StyledParagraph>
                </Cell>
                <Cell width={3 / 6}>
                    <DocsList>
                        <h2>Ocean Protocol Documentation</h2>
                        <ul>
                            <li>
                                <a href="#">A doc</a>
                            </li>
                            <li>
                                <a href="#">A doc</a>
                            </li>
                            <li>
                                <a href="#">A doc</a>
                            </li>
                            <li>
                                <a href="#">A doc</a>
                            </li>
                        </ul>
                    </DocsList>
                </Cell>
            </Grid>
        </ContentRow>
    </StyledSection>
)

export default Docs
