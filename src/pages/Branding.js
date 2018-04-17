import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from '../sections/Header'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
// import { colors, fonts } from '../styles'

const pageTitle = 'Branding'

const Meta = () => (
    <Helmet>
        <title>{pageTitle}</title>
    </Helmet>
)

const Branding = () => (
    <Fragment>
        <Meta />
        <Header />
        <Section>
            <ContentRow narrow>
                <Title>{pageTitle}</Title>
                <SubTitle center>All the good looking stuff</SubTitle>
            </ContentRow>

            <ContentRow>
                hello
            </ContentRow>
        </Section>
    </Fragment>
)

export default Branding
