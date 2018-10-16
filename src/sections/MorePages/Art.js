import React from 'react'
import artJson from '../../data/art'
import { colors } from '../../styles'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import { StyledLink, StyledTitle, StyledSubTitle } from './index.css'

const location = {
    pathname: '/art',
    state: {
        backgroundColor: colors.darkPurple,
        backgroundImage: OceanJeyllyfishBack
    }
}

const Art = () => (
    <StyledLink to={location}>
        <StyledTitle white>{artJson[0].header.title}</StyledTitle>
        <StyledSubTitle center>{artJson[0].header.tagline}</StyledSubTitle>
    </StyledLink>
)

export default Art
