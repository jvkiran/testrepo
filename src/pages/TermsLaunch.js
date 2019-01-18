import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Markdown from 'react-remarkable'
import fetch from 'isomorphic-fetch'
import Page from '../templates/Page'
import Spinner from '../components/Spinner'
import terms from '../data/termsLaunch.md'
import { StyledContent } from './TermsLaunch.css'

const title = 'Terms Launch'
const description =
    'Terms and Conditions for Whitelisting for participating in the Public Pre-Launch Token Exchange and the Network Launch Token Exchange of Ocean Protocol Foundation Ltd.'

export default class TermsLaunch extends Component {
    state = {
        text: '',
        fetching: false
    }

    static propTypes = {
        location: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.fetchTerms()
    }

    fetchTerms() {
        this.setState({ fetching: true })
        fetch(terms)
            .then(response => response.text())
            .then(text => {
                this.setState({ fetching: false, text })
            })
            .catch({ fetching: false })
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta content="noindex,nofollow" name="robots" />
                </Helmet>
                <Page
                    title={title}
                    description={description}
                    location={this.props.location}
                >
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
                </Page>
            </>
        )
    }
}
