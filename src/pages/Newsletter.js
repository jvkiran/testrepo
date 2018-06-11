import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SEO from '../components/SEO'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../components/Header'
import SubscribeForm from '../components/SubscribeForm'
import { colors } from '../styles'

const StyledSection = styled(Section)`
    min-height: 87vh;
    display: flex;
    align-items: center;

    ${ContentRow} { /* stylelint-disable-line */
        max-width: 45rem;
    }

    ${Title} { /* stylelint-disable-line */
        margin-bottom: 1rem;
        margin-top: -4rem;
    }

    ${SubTitle} { /* stylelint-disable-line */
        color: rgb(${colors.lightGrey});
        margin-bottom: 6rem;
        text-align: center;
    }
`

const StyledSubscribeForm = styled(SubscribeForm)`
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
`

const title = 'Newsletter'
const description = 'Subscribe to be the first to know about updates.'

/* eslint-disable class-methods-use-this */
class Newsletter extends Component {
    componentDidMount() {
        document.body.classList.add('page--newsletter')
    }

    componentWillUnmount() {
        document.body.classList.remove('page--newsletter')
    }

    render() {
        return (
            <Fragment>
                <SEO
                    description={description}
                    path={this.props.location.pathname}
                    title={title} />
                <Header />
                <StyledSection background={colors.black} fontColor={colors.white}>
                    <ContentRow>
                        <Title white>{title}</Title>
                        <SubTitle>{description}</SubTitle>
                    </ContentRow>

                    <StyledSubscribeForm />
                </StyledSection>
            </Fragment>
        )
    }
}
/* eslint-enable class-methods-use-this */

Newsletter.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
}

export default Newsletter
