import React from 'react'
import Art from './Art'
import Faq from './Faq'
import { StyledSection } from './MorePages.css'

const MorePages = () => (
    <StyledSection id="more">
        <Art />
        <Faq />
    </StyledSection>
)

export default MorePages
