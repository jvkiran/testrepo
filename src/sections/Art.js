import React from 'react'
import styled from 'styled-components'

import OceanJeyllyfishBack from 'oceanprotocol-art/jellyfish/jellyfish-back.svg'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { colors, fonts } from '../styles'
import artJson from '../data/art'

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

const StyledTitle = styled(Title)`
    font-size: ${fonts.size.h2};
    margin-bottom: 1rem;
    margin-top: 0;
`

const StyledSubTitle = styled(SubTitle)`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.lightGrey});
    margin-bottom: 0;
`

const Art = () => (
    <StyledSection background={colors.darkPurple} backgroundImage={OceanJeyllyfishBack} id="art">
        <a href="/art">
            <ContentRow>
                <StyledTitle white>{artJson[0].header.title}</StyledTitle>
                <StyledSubTitle center white>{artJson[0].header.tagline}</StyledSubTitle>
            </ContentRow>
        </a>
    </StyledSection>
)

export default Art
