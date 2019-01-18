import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-remarkable'
import fetch from 'isomorphic-fetch'
import Page from '../templates/Page'
import Spinner from '../components/Spinner'
import privacy from '../data/privacy.md'
import { StyledContent } from './Privacy.css'

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
        )
    }
}
