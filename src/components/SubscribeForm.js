import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import emailWhite from '../assets/misc/email-white.svg'
import Button from './Button'
import { webtasks } from '../constants'
import gdprJson from '../data/gdpr'
import {
    StyledSubscribe,
    StyledSubscribeWrapper,
    StyledMessage,
    Gdpr
} from './SubscribeForm.css'

const gdpr = gdprJson[0]

export default class SubscribeForm extends Component {
    state = {
        status: null,
        message: null
    }

    static propTypes = {
        action: PropTypes.string,
        btnLabel: PropTypes.string,
        error: PropTypes.string,
        inputPlaceholder: PropTypes.string,
        maxWidth: PropTypes.number,
        sending: PropTypes.string,
        success: PropTypes.string
    }

    static defaultProps = {
        action: '#',
        maxWidth: 27,
        inputPlaceholder: 'your@email.com',
        btnLabel: 'Subscribe',
        sending: 'Sending...',
        exists: 'You are already subscribed. Great!',
        success:
            'Thank you! Please click the link in the confirmation email to complete your subscription.'
    }

    postUser = async email => {
        this.setState({
            status: 'sending',
            message: null
        })

        const url = `${webtasks.host}/mailchimp/newsletter/${encodeURIComponent(
            email
        )}`

        try {
            let response = await axios.post(url) // eslint-disable-line
            const { status, title } = response.data

            if (status === 'exists') {
                this.setState({ status: 'exists' })
            } else if (status === 'created') {
                this.setState({ status: 'success' })
            } else {
                this.setState({
                    status: 'error',
                    message: `Error: ${title}`
                })
            }
        } catch (error) {
            this.setState({ status: 'error', message: error })
        }
    }

    onSubmit = e => {
        e.preventDefault()

        if (
            !this.input.value ||
            this.input.value.length < 5 ||
            this.input.value.indexOf('@') === -1
        ) {
            this.setState({ status: 'error', message: 'Check your email' })
            const timeout = setTimeout(() => {
                this.setState({ status: null, message: null })
                clearTimeout(timeout)
            }, 3000)
            return
        }

        this.postUser(this.input.value)
    }

    render() {
        const {
            maxWidth,
            action,
            inputPlaceholder,
            btnLabel,
            sending,
            success,
            exists,
            ...props
        } = this.props
        const { status, message } = this.state

        return (
            <StyledSubscribe maxWidth={maxWidth} {...props}>
                <form action={action} method="post">
                    <img alt="email" src={emailWhite} />
                    <StyledSubscribeWrapper>
                        <input
                            required
                            defaultValue=""
                            name="EMAIL"
                            placeholder={inputPlaceholder}
                            ref={node => (this.input = node)} //eslint-disable-line
                            type="email"
                            aria-label="Your Email"
                        />
                        <Button
                            disabled={this.state.status === 'sending'}
                            onClick={this.onSubmit}
                            type="submit"
                        >
                            {btnLabel}
                        </Button>
                    </StyledSubscribeWrapper>
                    {status === 'sending' && (
                        <StyledMessage
                            dangerouslySetInnerHTML={{ __html: sending }}
                        />
                    )}
                    {status === 'exists' && (
                        <StyledMessage
                            dangerouslySetInnerHTML={{ __html: exists }}
                        />
                    )}
                    {status === 'success' && (
                        <StyledMessage
                            success
                            dangerouslySetInnerHTML={{ __html: success }}
                        />
                    )}
                    {status === 'error' && (
                        <StyledMessage
                            error
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                </form>
                <Gdpr
                    dangerouslySetInnerHTML={{ __html: gdpr.forms.newsletter }}
                />
            </StyledSubscribe>
        )
    }
}
