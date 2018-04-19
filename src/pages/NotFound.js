import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../components/Header'
import Button from '../components/Button'
import { colors, layout, responsive } from '../styles'
import fishfail from '../assets/misc/fishfail.gif'

const StyledButton = styled(Button)`
    display: inline-block;
`

const StyledSection = styled(Section)`
    background: rgb(${colors.lightGrey});
    text-align: center;
    min-height: calc(100vh - (82px + (${layout.pageFrame} * 3)));
    max-height: 900px;
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (${responsive.sm.min}) {
        margin-top: ${layout.pageFrame};
    }

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url(${fishfail}) no-repeat center center;
        background-size: cover;
        opacity: .5;
    }

    ${SubTitle} { /* stylelint-disable-line */
        margin-bottom: 4rem;
    }
`

const Meta = () => (
    <Helmet>
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
                <NavLink to="/">
                    <StyledButton>Go to homepage</StyledButton>
                </NavLink>
            </ContentRow>
        </StyledSection>
    </Fragment>
)

export default NotFound
