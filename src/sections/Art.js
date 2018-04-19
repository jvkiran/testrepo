import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import jellyfish from '../assets/graphics/jellyfish.svg'
import { colors } from '../styles'

const StyledSection = styled(Section)`
    &,
    > div {
        padding: 0;
    }

    a {
        display: block;
        padding: 4rem 1rem;

        &:hover,
        &:focus {
            background: rgba(${colors.white}, .05);
        }
    }
`

const StyledSubTitle = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-top: -3rem;
    margin-bottom: 0;
`

const Art = () => (
    <StyledSection background={colors.darkPurple} backgroundImage={jellyfish} id="art">
        <a href="/art">
            <ContentRow>
                <Title white>Art</Title>
                <StyledSubTitle center white>All the good looking stuff for you to use.</StyledSubTitle>
            </ContentRow>
        </a>
    </StyledSection>
)

export default Art
