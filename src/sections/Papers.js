import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Consumer } from '../store/createContext'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'
import {
    StyledWhitepaper,
    StyledTitle,
    StyledFooter,
    StyledComments,
    FileType,
    BlockedPaper,
    PaperMeta
} from './Papers.css'
import content from '../data/papers.json'

const PaperContent = ({ paper }) => (
    <>
        <StyledTitle>{paper.title}</StyledTitle>
        <Paragraph>{paper.description}</Paragraph>
        <StyledFooter>
            <Button
                primary
                center
                download={paper.download.filename}
                href={`${process.env.PUBLIC_URL}${paper.download.file}`}
                onClick={() =>
                    window.ga &&
                    ReactGA.ga('send', 'event', 'download', paper.key, 'button')
                }
            >
                Download <FileType>pdf</FileType>
            </Button>
            <PaperMeta>
                v{paper.version} | {paper.updated}
            </PaperMeta>
        </StyledFooter>
    </>
)

PaperContent.propTypes = {
    paper: PropTypes.object.isRequired
}

const PaperBlocked = ({
    paper,
    resident,
    handleResident,
    handleNonResident
}) => {
    if (resident === true) {
        return (
            <BlockedPaper>{`Sorry, we can't show you this document.`}</BlockedPaper>
        )
    } else if (resident === false) {
        return <PaperContent paper={paper} />
    } else {
        return (
            <BlockedPaper>
                <Consumer>
                    {({ country }) => <h3>Are you a {country} resident?</h3>}
                </Consumer>

                <Button small onClick={handleResident}>
                    Yes
                </Button>
                <Button small onClick={handleNonResident}>
                    No
                </Button>
            </BlockedPaper>
        )
    }
}

PaperBlocked.propTypes = {
    paper: PropTypes.object,
    resident: PropTypes.bool,
    handleResident: PropTypes.func,
    handleNonResident: PropTypes.func
}

const Whitepaper = ({ paper, ...props }) => (
    <StyledWhitepaper>
        {/*
            Show block overlay based on user location
            See https://github.com/oceanprotocol/site/blob/master/docs/location.md
        */}
        <Consumer>
            {({ country }) =>
                paper.blocked && paper.blocked === country ? (
                    <PaperBlocked paper={paper} {...props} />
                ) : (
                    <PaperContent paper={paper} />
                )
            }
        </Consumer>
    </StyledWhitepaper>
)

Whitepaper.propTypes = {
    paper: PropTypes.object
}

export default class Papers extends PureComponent {
    state = {
        resident: null
    }

    handleNonResident = () => {
        this.setState({ resident: false })
    }

    handleResident = () => {
        this.setState({ resident: true })
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
                            <Cell smallGutter width={1 / 2} key={paper.key}>
                                <Whitepaper
                                    paper={paper}
                                    resident={this.state.resident}
                                    handleResident={this.handleResident}
                                    handleNonResident={this.handleNonResident}
                                />
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
    }
}
