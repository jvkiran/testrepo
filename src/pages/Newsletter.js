import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import { StyledFormNewsletter } from './Newsletter.css'

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
                headerViewport
                headerFullWidth
                headerAddition={<StyledFormNewsletter />}
            />
        )
    }
}
