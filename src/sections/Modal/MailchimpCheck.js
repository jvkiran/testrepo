import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'
import forms from '../../data/forms'
import { MailchimpWarning } from './MailchimpCheck.css'

export default class MailchimpCheck extends PureComponent {
    static propTypes = {
        modal: PropTypes.string.isRequired
    }

    state = {
        mailchimpUnavailable: true // true by default, will only become false on mount if Mailchimp can be connected to
    }

    componentDidMount() {
        this.mailchimpCheck()
    }

    mailchimpCheck() {
        jsonp(forms[this.props.modal].baseUrl, { param: 'c' }, (err, data) => {
            if (err) {
                console.log(err) // eslint-disable-line no-console
            }

            this.setState({
                mailchimpUnavailable: false
            })
        })
    }

    render() {
        if (this.state.mailchimpUnavailable) {
            return (
                <MailchimpWarning>
                    {`Please make sure to disable your content blocker or add an exception for oceanprotocol.com before submitting this form. We use Mailchimp to collect your data and in some cases this is blocked by content blockers in some browsers.`}
                </MailchimpWarning>
            )
        }

        return null
    }
}
