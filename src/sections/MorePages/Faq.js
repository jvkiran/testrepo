import React from 'react'
import { title, description } from '../../pages/Faq'
import {
    StyledTitle,
    StyledSubTitle,
    StyledLink
} from './MorePages.css'

const Faq = () => (
    <StyledLink to="/faq">
        <StyledTitle white>{title}</StyledTitle>
        <StyledSubTitle center>{description}</StyledSubTitle>
    </StyledLink>
)

export default Faq
