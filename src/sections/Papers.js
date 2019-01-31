/* global ga */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Grid from '../components/Grid'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'
import {
    StyledWhitepaper,
    StyledTitle,
    StyledFooter,
    StyledComments,
    FileType,
    BlockedPaper
} from './Papers.css'
import content from '../data/papers.json'

const PaperContent = ({ paper }) => (
    <>
        <StyledTitle>{paper.title}</StyledTitle>
        <Paragraph>{paper.description}</Paragraph>
        <StyledFooter>
            <a
                download={paper.download.filename}
                href={`${process.env.PUBLIC_URL}${paper.download.file}`}
            >
                <Button
                    primary
                    center
                    onClick={() =>
                        window.ga &&
                        ga('send', 'event', 'download', paper.key, 'button')
                    }
                >
                    Download <FileType>pdf</FileType>
                </Button>
            </a>
        </StyledFooter>
    </>
)

PaperContent.propTypes = {
    paper: PropTypes.object.isRequired
}

const PaperBlocked = ({
    paper,
    usresident,
    handleUsResident,
    handleNonUsResident
}) => {
    if (usresident === true) {
        return (
            <BlockedPaper>{`Sorry, we can't show you this document`}</BlockedPaper>
        )
    } else if (usresident === false) {
        return <PaperContent paper={paper} />
    } else {
        return (
            <BlockedPaper>
                <h3>Are you a US resident?</h3>
                <div>
                    <Button small onClick={handleUsResident}>
                        Yes
                    </Button>
                    <Button small onClick={handleNonUsResident}>
                        No
                    </Button>
                </div>
            </BlockedPaper>
        )
    }
}

PaperBlocked.propTypes = {
    paper: PropTypes.object,
    usresident: PropTypes.bool,
    handleUsResident: PropTypes.func,
    handleNonUsResident: PropTypes.func
}

export default class Papers extends PureComponent {
    state = {
        usresident: null
    }

    handleNonUsResident = () => {
        this.setState({ usresident: false })
    }

    handleUsResident = () => {
        this.setState({ usresident: true })
    }

    render() {
        return (
            <Section
                background={colors.black}
                fontColor={colors.white}
                id="papers"
            >
                <SectionHeader title={content.title} white />

                <ContentRow>
                    <Grid>
                        {content.papers.map(paper => (
                            <StyledWhitepaper
                                key={paper.key}
                                smallGutter
                                width={1 / 2}
                            >
                                {paper.blocked ? (
                                    <PaperBlocked
                                        paper={paper}
                                        usresident={this.state.usresident}
                                        handleUsResident={this.handleUsResident}
                                        handleNonUsResident={
                                            this.handleNonUsResident
                                        }
                                    />
                                ) : (
                                    <PaperContent paper={paper} />
                                )}
                            </StyledWhitepaper>
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
    }
}
