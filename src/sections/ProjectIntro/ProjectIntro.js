import React from 'react'
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
    StyledDataDots,
    StyledGrid,
    Icon,
    Line
} from './ProjectIntro.css'
import Pulse from './Pulse'
import { intro } from '../../data/pages/protocol.json'

const isProduction = process.env.NODE_ENV === 'production'
let shouldAnimate

if (isProduction) {
    shouldAnimate = true
} else {
    shouldAnimate = process.env.REACT_APP_ANIMATE_PROJECT === 'true'
}

const ProjectIntro = () => (
    <>
        <ContentRow>
            <StyledData width={1}>
                <StyledCard>
                    <h4>{intro.infographic[0].title}</h4>
                    <p>{intro.infographic[0].text}</p>
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
                    <Pulse className="pulse" shouldAnimate={shouldAnimate} />
                </StyledDataTransfer>
                <StyledCard>
                    <h4>{intro.infographic[1].title}</h4>
                    <p>{intro.infographic[1].text}</p>
                </StyledCard>
            </StyledData>
        </ContentRow>

        <ContentRow>
            <Line />
            {intro.about.map(aboutBlock => (
                <StyledGrid key={aboutBlock.title}>
                    <Cell width={2 / 3}>
                        <SubTitle white left>
                            {aboutBlock.title}
                        </SubTitle>
                        <Paragraph>{aboutBlock.text}</Paragraph>
                    </Cell>
                    <Cell width={1 / 3}>
                        <Icon />
                    </Cell>
                </StyledGrid>
            ))}
        </ContentRow>
    </>
)

export default ProjectIntro
