import React from 'react'
import { title, description } from '../../pages/Faq'
import { StyledTitle, StyledSubTitle, StyledLink } from './index.css'

const location = '/faq'

const Faq = () => (
    <StyledLink to={location}>
        <StyledTitle white>{title}</StyledTitle>
        <StyledSubTitle center>{description}</StyledSubTitle>
    </StyledLink>
)

export default Faq
