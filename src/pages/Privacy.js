import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-remarkable'
import fetch from 'isomorphic-fetch'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import SEO from '../components/SEO'
import privacy from '../data/privacy.md'
import { StyledSection, StyledContent } from './Privacy.css'

const title = 'Privacy Policy'
const description = 'Privacy Policy for the use of oceanprotocol.com.'

export default class Privacy extends Component {
    state = {
        text: '',
        fetching: false
    }

    static propTypes = {
        location: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.fetchPrivacyPolicy()
    }

    fetchPrivacyPolicy() {
        this.setState({ fetching: true })
        fetch(privacy)
            .then(response => response.text())
            .then(text => {
                this.setState({ fetching: false, text })
            })
            .catch({ fetching: false })
    }

    render() {
        return (
            <Fragment>
                <SEO
                    description={description}
                    path={this.props.location.pathname}
                    title={title}
                />
                <Header />
                <StyledSection>
                    <ContentRow>
                        <Title>{title}</Title>
                        <SubTitle>{description}</SubTitle>
                    </ContentRow>

                    <StyledContent>
                        {this.state.fetching ? (
                            <Spinner />
                        ) : (
                            <Markdown
                                options={{ breaks: true, linkify: true }}
                                source={this.state.text}
                            />
                        )}
                    </StyledContent>
                </StyledSection>
            </Fragment>
        )
    }
}
