import React from 'react'
import SectionHeader from '../components/SectionHeader'
import roadmap from '../data/roadmap'
import {
    Milestone,
    MilestoneTitle,
    MilestoneDate,
    MilestoneDescription,
    MilestoneBullet,
    StyledRoadmap,
    FlexContentRow,
    Disclaimer,
    DisclaimerAsterisk
} from './Roadmap.css'

const Milestones = roadmap.map(milestone => (
    <Milestone
        active={milestone.active}
        className={!!milestone.active && 'active'}
        key={milestone.title}
    >
        <MilestoneTitle>{milestone.title}</MilestoneTitle>
        <MilestoneDate>
            {milestone.date}{' '}
            <DisclaimerAsterisk className={milestone.active && 'hide'}>
                *
            </DisclaimerAsterisk>
        </MilestoneDate>
        <MilestoneDescription>
            {milestone.description.map(item => (
                <li key={item}>{item}</li>
            ))}
        </MilestoneDescription>
        <MilestoneBullet />
    </Milestone>
))

const Roadmap = () => (
    <StyledRoadmap>
        <SectionHeader title={'Roadmap'} />
        <FlexContentRow wide>{Milestones}</FlexContentRow>
        <Disclaimer>
            <p>
                <DisclaimerAsterisk>*</DisclaimerAsterisk> Software is sometimes
                hard to predict, so there might be delays. We will update
                projected dates once we are closer to a milestone&#8217;s
                completion.
            </p>
        </Disclaimer>
    </StyledRoadmap>
)

export default Roadmap
