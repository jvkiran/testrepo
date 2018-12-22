import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../components/Grid'
import ContentRow from '../../components/ContentRow'
import Cell from '../../components/Cell'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import dataDotsLeft from '../../assets/graphics/data-dots-left.svg'
import dataDotsRight from '../../assets/graphics/data-dots-right.svg'
import {
    StyledData,
    StyledCard,
    StyledDataTransfer,
    StyledDataDots
} from './ProjectIntro.css'
import Pulse from './Pulse'

const content = {
    cards: [
        {
            title: 'Data Providers',
            text: 'As a provider you can unlock your data and earn revenue.'
        },
        {
            title: 'Data Consumers',
            text: 'As a consumer you can discover and buy data.'
        }
    ],
    about: [
        {
            title: 'What is Ocean Protocol?',
            text:
                'Ocean Protocol is an ecosystem for sharing data and services. It provides a tokenized service layer that exposes data, storage, compute and algorithms for consumption with a set of deterministic proofs on availability and integrity that serve as verifiable service agreements. There is staking on services to signal quality, reputation and ward against Sybil Attacks.\n\nOcean Protocol helps to unlock data, particularly for AI. It is designed for scale and uses blockchain technology that allows data to be shared and sold in a safe, secure and transparent manner.'
        },
        {
            title: 'How Ocean Protocol Works',
            text:
                'The Ocean Protocol is an ecosystem of data assets and services. Assets are data and algorithms. Services are the integration, processing, computation and storage. Ocean Protocol facilitates discovery by storing and promoting metadata, linking assets and services, and providing a licensing framework with pricing.\n\nAny data marketplace can hook into Ocean Protocol to provide “last mile” services, connecting data providers and consumers. Ocean Protocol is designed so that data owners cannot be locked-in to any single marketplace and the data owner controls each dataset.'
        }
    ]
}

const ProjectIntro = ({ toggleModal, ...props }) => {
    const isProduction = process.env.NODE_ENV === 'production'
    let shouldAnimate

    if (isProduction) {
        shouldAnimate = true
    } else {
        shouldAnimate = process.env.REACT_APP_ANIMATE_PROJECT === 'true'
    }

    return (
        <div id="project">
            <ContentRow>
                <StyledData width={1}>
                    <StyledCard>
                        <h4>{content.cards[0].title}</h4>
                        <p>{content.cards[0].text}</p>
                    </StyledCard>
                    <StyledDataTransfer>
                        <StyledDataDots
                            img={dataDotsLeft}
                            shouldAnimate={shouldAnimate}
                        />
                        <StyledDataDots
                            img={dataDotsRight}
                            shouldAnimate={shouldAnimate}
                        />
                        <Pulse
                            className="pulse"
                            shouldAnimate={shouldAnimate}
                        />
                    </StyledDataTransfer>
                    <StyledCard>
                        <h4>{content.cards[1].title}</h4>
                        <p>{content.cards[1].text}</p>
                    </StyledCard>
                </StyledData>

                <Grid>
                    {content.about.map(aboutBlock => (
                        <Cell key={aboutBlock.title} width={1 / 2}>
                            <SubTitle white>{aboutBlock.title}</SubTitle>
                            <Paragraph>{aboutBlock.text}</Paragraph>
                        </Cell>
                    ))}
                </Grid>
            </ContentRow>
        </div>
    )
}

ProjectIntro.propTypes = {
    toggleModal: PropTypes.func.isRequired
}

export default ProjectIntro
