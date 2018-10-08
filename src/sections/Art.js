import React from 'react'
import { Link } from 'react-router-dom'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'
import artJson from '../data/art'
import { StyledSection, StyledTitle, StyledSubTitle } from './Art.css'

const Art = () => (
    <StyledSection background={colors.darkPurple} backgroundImage={OceanJeyllyfishBack} id="art">
        <Link to="/art/">
            <ContentRow>
                <StyledTitle white>{artJson[0].header.title}</StyledTitle>
                <StyledSubTitle center white>{artJson[0].header.tagline}</StyledSubTitle>
            </ContentRow>
        </Link>
    </StyledSection>
)

export default Art
