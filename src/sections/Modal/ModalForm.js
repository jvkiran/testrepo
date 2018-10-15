import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'
import FormInput from '../../components/Form/FormInput'
import Button from '../../components/Button'
import forms from '../../data/forms'
import gdprJson from '../../data/gdpr'
import {
    StyledMessage,
    Gdpr
} from './ModalForm.css'

const gdpr = gdprJson[0]

export default class ModalForm extends PureComponent {
    static propTypes = {
        modal: PropTypes.string.isRequired
    }

    state = {
        fetching: false,
        sent: false,
        message: ''
    }

    onSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const { modal } = this.props

        let name
        let email
        let company
        let message

        let location
        let background
        let interest
        let publicspeaking
        let linkedin
        let github

        let url

        if (form.name) {
            name = form.name.value && encodeURIComponent(form.name.value)
        }

        if (form.email) {
            email = form.email.value && encodeURIComponent(form.email.value)
        }

        if (form.company) {
            company = form.company.value && encodeURIComponent(form.company.value)
        }

        if (form.message) {
            message = form.message.value && encodeURIComponent(form.message.value)
        }

        if (form.location) {
            location = form.location.value && encodeURIComponent(form.location.value)
        }

        if (form.background) {
            background = form.background.value && encodeURIComponent(form.background.value)
        }

        if (form.interest) {
            interest = form.interest.value && encodeURIComponent(form.interest.value)
        }

        if (form.publicspeaking) {
            publicspeaking = form.publicspeaking.value && encodeURIComponent(form.publicspeaking.value)
        }

        if (form.linkedin) {
            linkedin = form.linkedin.value && encodeURIComponent(form.linkedin.value)
        }

        if (form.github) {
            github = form.github.value && encodeURIComponent(form.github.value)
        }

        if (modal === 'ambassadors') {
            url = `${forms[modal].baseUrl}&NAME=${name}&EMAIL=${email}&LOCATION=${location}&BACKGROUND=${background}&INTEREST=${interest}&SPEAKING=${publicspeaking}&LINKEDIN=${linkedin}&GITHUB=${github}&${gdpr.flag}`
        } else {
            url = `${forms[modal].baseUrl}&NAME=${name}&EMAIL=${email}&COMPANY=${company}&MESSAGE=${message}&${gdpr.flag}`
        }

        this.setState(
            {
                fetching: true,
                message: ''
            },
            () =>
                jsonp(
                    url, { param: 'c' },
                    (err, data) => {
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
                                message: data.msg
                            })
                        }
                    }
                )
        )
    }

    render() {
        const { modal } = this.props

        return (
            this.state.sent ? (
                <div>{this.state.message}</div>
            ) : (
                <form onSubmit={this.onSubmit}>

                    {forms[modal].fields && (
                        Object.entries(forms[modal].fields)
                            .map(([key, value]) => (
                                <FormInput
                                    key={key}
                                    label={value.label}
                                    placeholder={value.placeholder ? value.placeholder : null}
                                    name={key}
                                    required={value.required ? value.required : null}
                                    tag={value.tag ? value.tag : null}
                                    type={value.type ? value.type : 'text'}
                                    ref={node => (this.key = node)}
                                    maxLength={value.maxLength ? value.maxLength : null}
                                    rows={value.maxLength ? '6' : null}
                                    help={value.help}
                                />
                            ))
                    )}

                    <Button fetching={this.state.fetching} type="submit">
                        {forms[modal].button}
                    </Button>

                    {this.state.message && <StyledMessage>{this.state.message}</StyledMessage>}

                    <Gdpr dangerouslySetInnerHTML={{ __html: gdpr.forms.modal }} />
                </form>
            )
        )
    }
}
