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
    padding-bottom: 5rem;
    padding-top: 5rem;
`

const FlexContentRow = styled(ContentRow)`
    padding-top: 2rem;
    padding-left: 2rem;

    @media screen and (${responsive.lg.min}) {
        display: flex;
        padding-top: 6rem;
        padding-left: 0;
        max-width: none;
    }
`

const MilestoneTitle = styled.h1`
    font-size: ${fonts.size.base};
    margin: 0;
    margin-bottom: .25rem;

    @media screen and (${responsive.lg.min}) {
        margin-top: -4.75rem;
    }
`

const MilestoneDate = styled.h2`
    font-size: ${fonts.size.base};
    color: rgb(${colors.lightGrey});
    margin: 0;

    @media screen and (${responsive.lg.min}) {
        margin-bottom: 4rem;
    }
`

const MilestoneDescription = styled.ul`
    margin-top: 1rem;
    margin-bottom: 0;
    padding-left: 1.5rem;
    text-align: left;

    li {
        list-style-type: circle;
    }

    @media screen and (${responsive.lg.min}) {
        padding-left: 2rem;
        padding-right: .5rem;
        font-size: ${fonts.size.small};
        max-width: 15rem;
        margin-left: auto;
        margin-right: auto;
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
    top: -.25rem;
    z-index: 2;

    @media screen and (${responsive.lg.min}) {
        top: -1.05rem;
        left: 50%;
        margin-left: -1rem;
    }

    &:before {
        content: '';
        position: absolute;
        left: .05rem;
        top: .05rem;
        width: calc(100% - .1rem);
        height: calc(100% - .1rem);
        border-radius: 50%;
        border: .25rem solid rgb(${colors.white});
    }
`

const Milestone = styled.div`
    padding-bottom: 3rem;
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: 1rem;
    border-left: .15rem solid;
    border-left-color: ${({ active }) => (active ? `rgb(${colors.pink})` : `rgb(${colors.lightGrey})`)};
    flex: 1;

    @media screen and (${responsive.lg.min}) {
        border-left: 0;
        border-top: .15rem solid;
        border-top-color: ${({ active }) => (active ? `rgb(${colors.pink})` : `rgb(${colors.lightGrey})`)};
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        margin-left: 0;
        text-align: center;

        &:first-child {
            padding-left: 2rem;

            ${MilestoneBullet} { /* stylelint-disable-line */
                margin-left: 0;
            }
        }

        &:last-child {
            padding-right: 2rem;

            ${MilestoneBullet} { /* stylelint-disable-line */
                margin-left: -2rem;
            }
        }
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

    @media screen and (${responsive.lg.min}) {
        &:nth-last-child(1 of .active):after { /* selector only works in Safari at the moment */
            content: '';
            width: 50%;
            height: .125rem;
            display: block;
            background: rgb(${colors.lightGrey});
            position: absolute;
            left: 50%;
            top: -.125rem;
        }
    }
`

const DisclaimerAsterisk = styled.span`
    display: inline-block;
    font-size: ${fonts.size.base};
    color: rgb(${colors.lightGrey});

    &.hide {
        display: none;
    }
`

const Disclaimer = styled.aside`
    color: rgb(${colors.lightGrey});
    font-size: ${fonts.size.small};
    margin-top: 3rem;
    margin-right: 2rem;
    margin-left: 2.5rem;
    text-align: right;

    @media screen and (${responsive.sm.min}) {
        margin-bottom: -3.5rem;
    }

    p {
        margin-bottom: 0;
        max-width: 30rem;
        display: inline-block;
    }
`

const Milestones = roadmap.map((milestone) => (
    <Milestone active={milestone.active} className={!!milestone.active && 'active'} key={milestone.title}>
        <MilestoneTitle>{milestone.title}</MilestoneTitle>
        <MilestoneDate>{milestone.date} <DisclaimerAsterisk className={milestone.active && 'hide'}>*</DisclaimerAsterisk></MilestoneDate>
        <MilestoneDescription>
            {milestone.description.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </MilestoneDescription>
        <MilestoneBullet />
    </Milestone>
))

const Roadmap = () => (
    <StyledRoadmap>
        <ContentRow>
            <Title>Roadmap</Title>
        </ContentRow>
        <FlexContentRow wide>
            {Milestones}
        </FlexContentRow>
        <Disclaimer>
            <p><DisclaimerAsterisk>*</DisclaimerAsterisk> Software is sometimes hard to predict, so there might be delays. We will update projected dates once we are closer to a milestone&#8217;s completion.</p>
        </Disclaimer>
    </StyledRoadmap>
)

export default Roadmap
