import React from 'react'
import artJson from '../../data/art'
import { colors } from '../../styles'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import { StyledLink, StyledTitle, StyledSubTitle } from './MorePages.css'

const Art = () => (
    <StyledLink to="/art" backgroundColor={colors.darkPurple} backgroundImage={OceanJeyllyfishBack}>
        <StyledTitle white>{artJson[0].header.title}</StyledTitle>
        <StyledSubTitle center>{artJson[0].header.tagline}</StyledSubTitle>
    </StyledLink>
)

export default Art
