import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../components/Header'
import { colors } from '../styles'
import { StyledSection, StyledSubscribeForm } from './Newsletter.css'

export default class Newsletter extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    componentDidMount() {
        document.body.classList.add('page--newsletter')
    }

    componentWillUnmount() {
        document.body.classList.remove('page--newsletter')
    }

    render() {
        const title = 'Newsletter'
        const description = 'Subscribe to be the first to know about updates.'

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
