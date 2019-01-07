import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'
import { StyledSection, StyledFormNewsletter } from './Newsletter.css'

const title = 'Newsletter'
const description =
    'Can’t get enough? Sign up for our newsletter and receive exclusive insights and updates.'

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
        return (
            <Page
                title={title}
                description={description}
                location={this.props.location}
                noheader
            >
                <StyledSection
                    background={colors.black}
                    fontColor={colors.white}
                    viewport
                >
                    <ContentRow>
                        <Title white>{title}</Title>
                        <SubTitle>{description}</SubTitle>
                    </ContentRow>

                    <StyledFormNewsletter />
                </StyledSection>
            </Page>
        )
    }
}
