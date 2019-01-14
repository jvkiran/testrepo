import React from 'react'
import Collapsible from 'react-collapsible'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Paragraph from '../components/Paragraph'
import dataUnanalyzed from '../assets/graphics/data-unanalyzed.svg'
import dataLocked from '../assets/graphics/data-locked.svg'
import dataUnavailable from '../assets/graphics/data-unavailable.svg'
import {
    StyledSection,
    StyledContentRow,
    StyledFirstGrid,
    StyledLocked,
    StyledSecondGrid,
    StyledUnalyzed,
    StyledThirdGrid,
    StyledUnavailable
} from './Usecases.css'

const Usecases = () => (
    <StyledSection id="why">
        <ContentRow narrow>
            <Title>
                In 2016, the world produced 16 ZB of data, but only 1% was
                analyzed &mdash; this needs to change.
            </Title>
        </ContentRow>

        <StyledContentRow>
            <StyledFirstGrid left>
                <Cell width={1 / 3}>
                    <StyledLocked alt="data locked" src={dataLocked} />
                </Cell>
                <Cell width={2 / 3}>
                    <SubTitle left>
                        A lack of trust prevents data sharing
                    </SubTitle>
                    <Paragraph>
                        Centralized data exchanges fail because they lack fair
                        and flexible pricing mechanisms, data providers lose
                        control over their assets, and there is a lack of
                        transparency in how the data is used. So data remains
                        locked up due to a lack of trust.
                    </Paragraph>

                    <Collapsible
                        easing="ease-out"
                        transitionTime={200}
                        trigger="Use case: autonomous vehicles"
                    >
                        <p>
                            A leading use case for proprietary data is
                            autonomous (self-driving) vehicles. The RAND
                            Corporation calculated that 500 billion to 1
                            trillion miles driven are needed to get AI models
                            accurate enough for production deployment of
                            self-driving cars.
                        </p>
                        <p>
                            Our collaborators at{' '}
                            <a href="http://www.tri.global">
                                Toyota Research Institute (TRI)
                            </a>{' '}
                            saw that it would be prohibitively expensive for
                            each automaker to generate that much data on its
                            own. The answer would be to pool data via
                            marketplaces.
                        </p>
                        <p>
                            Then the challenge is, a single data marketplace may
                            itself be centralized: we arrive at another data
                            silo. We need a substrate that enables many data
                            marketplaces to emerge. This is the goal of Ocean
                            Protocol. Critical new benefits emerge: higher
                            liquidity for each marketplace, and organizations
                            are directly incentivized to pool data rather than
                            silo it.
                        </p>
                    </Collapsible>
                </Cell>
            </StyledFirstGrid>

            <StyledSecondGrid>
                <Cell width={1 / 3}>
                    <StyledUnalyzed
                        alt="data unanalyzed"
                        src={dataUnanalyzed}
                    />
                </Cell>
                <Cell width={2 / 3}>
                    <SubTitle left>
                        AI advances six times faster, when data is available
                    </SubTitle>
                    <Paragraph>
                        AI models have limited accuracy and usability without
                        appropriate data. Ocean Protocol provides the tools to
                        unlock the remaining 99% of untapped data, connecting
                        them to AI, so we can develop more breakthroughs to help
                        our society.
                    </Paragraph>

                    <Collapsible
                        easing="ease-out"
                        transitionTime={200}
                        trigger="Use case: medical data"
                    >
                        <p>
                            We are working with{' '}
                            <a href="https://connectedlife.io">ConnectedLife</a>
                            , a company that provides IoT technology and
                            solutions that revolutionize disease management for
                            people living with chronic conditions and promote
                            independent living.
                        </p>
                        <p>
                            Together with hospitals in Munich, Istanbul, and
                            Singapore, Ocean Protocol provides ConnectedLife the
                            tools to address the sharing of highly sensitive
                            healthcare data while reconciling data privacy and
                            protection laws, allowing it to build diagnostics
                            and personalized treatment models from the
                            hospitals’ Parkinson’s Disease patient data. Helping
                            patients with Parkinson’s Disease to achieve better
                            and personalised treatment.
                        </p>
                    </Collapsible>
                </Cell>
            </StyledSecondGrid>
        </StyledContentRow>

        <ContentRow narrow>
            <StyledThirdGrid textCenter>
                <Cell center width={1}>
                    <SubTitle center>
                        Only a handful of companies today have both Data and AI
                    </SubTitle>
                </Cell>

                <Cell center width={1}>
                    <StyledUnavailable
                        alt="data unavailable"
                        src={dataUnavailable}
                    />
                </Cell>

                <Cell width={1}>
                    <Paragraph>
                        AI start-ups and researchers are drowning in algorithms,
                        but lack data. The opposite is true for many large
                        corporations. Ocean Protocol is the bridge between these
                        two sides. By bringing together data and AI, Ocean
                        Protocol will unlock a trillion-dollar market for data
                        sharing.
                    </Paragraph>

                    <Collapsible
                        easing="ease-out"
                        transitionTime={200}
                        trigger="Use case: computer vision"
                    >
                        <p>
                            Our vision is to grow a massive set of data assets,
                            all free for the planet to use. We’ve seen glimpses
                            of the power of this.
                        </p>
                        <p>
                            <a href="http://www.image-net.org">ImageNet</a> is
                            an open dataset with over 10 million tagged
                            images—much larger than previous open image
                            datasets. It has allowed AI researchers to train
                            image classifiers with radically less error than
                            before, for dozens of computer vision applications.
                            Providing Data Commons on Ocean Protocol would
                            benefit the whole world, providing accessible data
                            to anyone.
                        </p>
                    </Collapsible>
                </Cell>
            </StyledThirdGrid>
        </ContentRow>
    </StyledSection>
)

export default Usecases
