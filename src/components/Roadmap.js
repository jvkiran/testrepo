import React from 'react'
import styled from 'styled-components'
import ContentRow from '../components/ContentRow'
import Title from '../components/Title'
import { colors, responsive, fonts } from '../styles'
import roadmap from '../data/roadmap'

const StyledRoadmap = styled.article`
    margin-top: 2rem;
    margin-bottom: -6rem;
    background: rgb(${colors.dimmedGrey});
    margin-left: -2.5rem;
    width: calc(100% + 5rem);
    padding-bottom: 6rem;
    padding-top: 5rem;
`

const FlexContentRow = styled(ContentRow)`
    padding-top: 2rem;
    padding-left: 2rem;

    @media screen and (${responsive.md.min}) {
        display: flex;
        padding-top: 6rem;
        padding-left: 0;
        max-width: none;
    }
`

const MilestoneTitle = styled.h5`
    margin: 0;
    margin-bottom: .25rem;

    @media screen and (${responsive.md.min}) {
        margin-top: -5rem;
    }
`

const MilestoneDate = styled.h5`
    color: rgb(${colors.lightGrey});
    margin: 0;
    font-size: ${fonts.size.base};

    @media screen and (${responsive.md.min}) {
        margin-bottom: 4rem;
    }
`

const MilestoneDescription = styled.p`
    margin-top: 1rem;
    margin-bottom: 0;

    @media screen and (${responsive.md.min}) {
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: ${fonts.size.small};
    }
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

    @media screen and (${responsive.md.min}) {
        top: -1.05rem;
        left: 50%;
        margin-left: -1rem;
    }

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

    @media screen and (${responsive.md.min}) {
        border-left: 0;
        border-top: .15rem solid;
        border-top-color: ${({ active }) => (active ? `rgb(${colors.pink})` : `rgb(${colors.lightGrey})`)};
        padding-left: 0;
        padding-bottom: 0;
        margin-left: 0;
        text-align: center;
    }

    ${MilestoneTitle}, ${MilestoneDate}, ${MilestoneDescription} { /* stylelint-disable-line */
        opacity: ${({ active }) => (active ? '1' : '.65')};
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
        <FlexContentRow wide>
            {roadmap.map((milestone) => (
                <Milestone active={milestone.active} key={milestone.title}>
                    <MilestoneTitle>{milestone.title}</MilestoneTitle>
                    <MilestoneDate>{milestone.date}</MilestoneDate>
                    <MilestoneDescription>{milestone.description}</MilestoneDescription>
                    <MilestoneBullet />
                </Milestone>
            ))}
        </FlexContentRow>
    </StyledRoadmap>
)

export default Roadmap
