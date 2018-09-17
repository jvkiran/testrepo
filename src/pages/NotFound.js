import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../components/Header'
import { StyledSection, StyledButton } from './NotFound.css'

const Meta = () => (
    <Helmet>
        <title>404 - Not Found</title>
        <meta content="noindex,nofollow" name="robots" />
    </Helmet>
)

const NotFound = () => (
    <Fragment>
        <Meta />
        <Header />
        <StyledSection id="notfound">
            <ContentRow>
                <Title>Oops, that did not work</Title>
                <SubTitle>Pardon us, the page you requested is not here.</SubTitle>
                <Link to="/">
                    <StyledButton>Go to homepage</StyledButton>
                </Link>
            </ContentRow>
        </StyledSection>
    </Fragment>
)

export default NotFound
