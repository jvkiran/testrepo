import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Page from '../templates/Page'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { StyledSection, StyledButton } from './NotFound.css'
import content from '../data/pages/notfound.json'

const NotFound = ({ location }) => (
    <Page
        title={content.title}
        description={content.description}
        location={location}
        noheader
        menuLight
    >
        <StyledSection viewport id="notfound">
            <ContentRow>
                <Title>{content.title}</Title>
                <SubTitle>{content.description}</SubTitle>
                <Link to="/">
                    <StyledButton>Go to homepage</StyledButton>
                </Link>
            </ContentRow>
        </StyledSection>
    </Page>
)

NotFound.propTypes = {
    location: PropTypes.object.isRequired
}

export default NotFound
