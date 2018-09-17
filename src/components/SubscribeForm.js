import React, { Component } from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'
import emailWhite from '../assets/misc/email-white.svg'
import Button from './Button'
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
        msg: null
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
        success: 'Thank you! Please click the link in the confirmation email to complete your subscription.',
        error: 'Oops, something went wrong. Would you mind trying again?'
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf('@') === -1) {
            this.setState({
                status: 'error'
            })
            return
        }

        const url = `//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=3c6eed8b71&EMAIL=${encodeURIComponent(this.input.value)}&${gdpr.flag}`

        this.setState(
            {
                status: 'sending',
                msg: null
            },
            () =>
                jsonp(
                    url,
                    {
                        param: 'c'
                    },
                    (err, data) => {
                        if (err) {
                            this.setState({
                                status: 'error',
                                msg: err
                            })
                        } else if (data.result === 'error') {
                            this.setState({
                                status: 'error',
                                msg: data.msg
                            })
                        } else {
                            this.setState({
                                status: 'success'
                            })
                        }
                    }
                )
        )
    }

    render() {
        const {
            maxWidth, action, inputPlaceholder, btnLabel, sending, success, ...props
        } = this.props
        const { status, msg } = this.state

        return (
            <StyledSubscribe maxWidth={maxWidth} {...props}>
                <form noValidate action={action} method="post">
                    <img alt="email" src={emailWhite} />
                    <StyledSubscribeWrapper>
                        <input
                            required
                            defaultValue=""
                            name="EMAIL"
                            placeholder={inputPlaceholder}
                            ref={node => (this.input = node)} //eslint-disable-line
                            type="email"
                            aria-label="Your Email" />
                        <Button
                            disabled={this.state.status === 'sending' || this.state.status === 'success'}
                            onClick={this.onSubmit}
                            type="submit">
                            {btnLabel}
                        </Button>
                    </StyledSubscribeWrapper>
                    {status === 'sending' && <StyledMessage dangerouslySetInnerHTML={{ __html: sending }} />}
                    {status === 'success' && <StyledMessage dangerouslySetInnerHTML={{ __html: success }} />}
                    {status === 'error' && <StyledMessage dangerouslySetInnerHTML={{ __html: msg }} />}
                </form>
                <Gdpr dangerouslySetInnerHTML={{ __html: gdpr.forms.newsletter }} />
            </StyledSubscribe>
        )
    }
}
