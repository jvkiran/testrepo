import React from 'react'
import styled from 'styled-components'
import ContentRow from '../components/ContentRow'
import Title from '../components/Title'
import { colors } from '../styles'
import roadmap from '../data/roadmap'

const StyledRoadmap = styled.article`
    margin-top: 4rem;
`

const MilestoneTitle = styled.h5`
    margin: 0;
`

const MilestoneDate = styled.h5`
    color: rgb(${colors.lightGrey});
    margin: 0;
`

const MilestoneDescription = styled.p`
    margin-top: 1rem;
`

const MilestoneBullet = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: .1rem solid;
    background: rgb(${colors.white});
    position: absolute;
    left: -1.05rem;
    top: 0;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: .25rem solid rgb(${colors.white});
    }
`

const Milestone = styled.div`
    padding-bottom: 3rem;
    position: relative;
    padding-left: 3rem;
    margin-left: 1rem;
    border-left: .15rem solid;
    border-left-color: ${({ active }) => (active ? `rgb(${colors.pink})` : `rgb(${colors.lightGrey})`)};

    ${MilestoneTitle}, ${MilestoneDate}, ${MilestoneDescription} { /* stylelint-disable-line */
        opacity: ${({ active }) => (active ? '1' : '.5')};
    }

    ${MilestoneBullet} { /* stylelint-disable-line */
        border-color: ${({ active }) => (active ? `rgb(${colors.black})` : `rgb(${colors.lightGrey})`)};

        &:before {
            background: ${({ active }) => (active ? `rgb(${colors.pink})` : `rgb(${colors.dimmedGrey})`)};
        }
    }
`

const Roadmap = () => (
    <StyledRoadmap>
        <ContentRow>
            <Title>Roadmap</Title>
        </ContentRow>
        <ContentRow>
            {roadmap.map((milestone) => (
                <Milestone active={milestone.active} key={milestone}>
                    <MilestoneTitle>{milestone.title}</MilestoneTitle>
                    <MilestoneDate>{milestone.date}</MilestoneDate>
                    <MilestoneDescription>{milestone.description}</MilestoneDescription>
                    <MilestoneBullet />
                </Milestone>
            ))}
        </ContentRow>
    </StyledRoadmap>
)

export default Roadmap
