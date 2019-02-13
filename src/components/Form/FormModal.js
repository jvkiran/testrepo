import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'
import FormInput from './FormInput'
import FormInputRadioCheckbox from './FormInputRadioCheckbox'
import Button from '../Button'
import forms from '../../data/forms'
import gdpr from '../../data/gdpr'
import MailchimpCheck from './MailchimpCheck'
import { StyledMessage, Gdpr } from './FormModal.css'

export default class ModalForm extends PureComponent {
    static propTypes = {
        modal: PropTypes.string.isRequired
    }

    state = {
        fetching: false,
        sent: false,
        message: ''
    }

    makeRequest = (url, modal) => {
        jsonp(url, { param: 'c' }, (err, data) => {
            if (err) {
                this.setState({
                    fetching: false,
                    message: err
                })
            } else if (data.result !== 'success') {
                this.setState({
                    fetching: false,
                    message: data.msg
                })
            } else {
                this.setState({
                    fetching: false,
                    sent: true,
                    message: forms[modal].success
                })
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()

        const form = e.target
        const { modal } = this.props
        const { baseUrl } = forms[modal]

        let name
        let email
        let about
        let message
        let company

        let location
        let background
        let interest
        let publicspeaking
        let community
        let linkedin
        let github
        let twitter

        let url

        if (form.name) {
            name = form.name.value && encodeURIComponent(form.name.value)
        }

        if (form.email) {
            email = form.email.value && encodeURIComponent(form.email.value)
        }

        if (form.company) {
            company =
                form.company.value && encodeURIComponent(form.company.value)
        }

        if (form.message) {
            message =
                form.message.value && encodeURIComponent(form.message.value)
        }

        if (form.about) {
            about = []

            form.about.forEach(checkbox => {
                if (checkbox.checked) {
                    about.push(checkbox.value)
                }
            })

            about = about.join(', ')
        }

        if (form.location) {
            location =
                form.location.value && encodeURIComponent(form.location.value)
        }

        if (form.background) {
            background =
                form.background.value &&
                encodeURIComponent(form.background.value)
        }

        if (form.interest) {
            interest =
                form.interest.value && encodeURIComponent(form.interest.value)
        }

        if (form.publicspeaking) {
            publicspeaking =
                form.publicspeaking.value &&
                encodeURIComponent(form.publicspeaking.value)
        }

        if (form.community) {
            community =
                form.community.value && encodeURIComponent(form.community.value)
        }

        if (form.linkedin) {
            linkedin =
                form.linkedin.value && encodeURIComponent(form.linkedin.value)
        }

        if (form.github) {
            github = form.github.value && encodeURIComponent(form.github.value)
        }

        if (form.twitter) {
            twitter =
                form.twitter.value && encodeURIComponent(form.twitter.value)
        }

        if (modal === 'ambassadors') {
            url = `${baseUrl}&NAME=${name}&EMAIL=${email}&LOCATION=${location}&BACKGROUND=${background}&INTEREST=${interest}&SPEAKING=${publicspeaking}&COMMUNITY=${community}&LINKEDIN=${linkedin}&GITHUB=${github}&TWITTER=${twitter}&${
                gdpr.flag
            }`
        } else {
            let listId

            if (about === 'provider' || about === 'provider, consumer') {
                listId = forms[modal].listIdProvider
            } else {
                listId = forms[modal].listIdConsumer
            }

            url = `${baseUrl}&id=${listId}&NAME=${name}&EMAIL=${email}&COMPANY=${company}&MESSAGE=${message}&${
                gdpr.flag
            }`
        }

        this.setState(
            {
                fetching: true,
                message: ''
            },
            () => this.makeRequest(url, modal)
        )
    }

    render() {
        const { modal } = this.props
        const { sent, message, fetching } = this.state

        return sent ? (
            <StyledMessage
                success
                dangerouslySetInnerHTML={{
                    __html: message
                }}
            />
        ) : (
            <>
                <MailchimpCheck modal={modal} />

                <form onSubmit={this.onSubmit}>
                    {forms[modal].fields &&
                        Object.entries(forms[modal].fields).map(
                            ([key, value]) =>
                                value.type === 'radio' ||
                                value.type === 'checkbox' ? (
                                    <FormInputRadioCheckbox
                                        key={key}
                                        label={value.label}
                                        name={key}
                                        required={
                                            value.required
                                                ? value.required
                                                : null
                                        }
                                        help={value.help}
                                        options={value.options}
                                        type={value.type}
                                    />
                                ) : (
                                    <FormInput
                                        key={key}
                                        label={value.label}
                                        placeholder={
                                            value.placeholder
                                                ? value.placeholder
                                                : null
                                        }
                                        name={key}
                                        required={
                                            value.required
                                                ? value.required
                                                : null
                                        }
                                        tag={value.tag ? value.tag : null}
                                        type={value.type ? value.type : 'text'}
                                        maxLength={
                                            value.maxLength
                                                ? value.maxLength
                                                : null
                                        }
                                        maxWords={
                                            value.maxWords
                                                ? value.maxWords
                                                : null
                                        }
                                        rows={
                                            value.maxLength || value.maxWords
                                                ? '6'
                                                : null
                                        }
                                        help={value.help}
                                    />
                                )
                        )}

                    <Button primary fetching={fetching} type="submit">
                        {forms[modal].button}
                    </Button>

                    {message && (
                        <StyledMessage
                            dangerouslySetInnerHTML={{
                                __html: message
                            }}
                        />
                    )}

                    <Gdpr
                        dangerouslySetInnerHTML={{ __html: gdpr.forms.modal }}
                    />
                </form>
            </>
        )
    }
}
