import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import jsonp from 'jsonp'
import FormInput from '../components/Form/FormInput'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import SubTitle from '../components/SubTitle'
import cross from '../assets/misc/cross.svg'
import gdprJson from '../data/gdpr'
import {
    StyledLightbox,
    StyledCard,
    StyledClose,
    StyledMessage,
    Gdpr
} from './Modal.css'

const gdpr = gdprJson[0]

const forms = {
    provider: {
        title: 'Join the Data Providers',
        name: 'Your Name',
        email: 'Your Email',
        business: 'Your Company Name',
        message: 'Tell us why you would like to publish data',
        button: 'Submit',
        baseUrl: '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=b402d6b267'
    },
    consumer: {
        title: 'Join the Data Consumers',
        name: 'Your Name',
        email: 'Your Email',
        business: 'Your Company Name',
        message: 'Tell us why you would like to get data',
        button: 'Submit',
        baseUrl: '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=482c337540'
    },
    contributor: {
        title: 'Join as a Contributor',
        name: 'Your Name',
        email: 'Your Email',
        business: 'Your Role',
        message: 'Tell us how you would like to contribute',
        button: 'Submit',
        baseUrl: '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=6500840fdf'
    },
    ambassadors: {
        title: 'Ocean Protocol Ambassador Program',
        description: 'Thank you for your interest in becoming an Ocean Protocol Ambassador. To help us learn more about you and why you are interested in representing Ocean Protocol please fill out the information below. \n\nAssuming your profile is a good fit, we will be in touch with you about next steps shortly. We look forward to hearing from you!',
        name: 'Your Name',
        email: 'Your Email',
        fields: {
            location: {
                label: 'Your location',
                placeholder: 'ie. Amsterdam',
                help: 'Where in the world are you located (geographically)?',
                required: true
            },
            background: {
                label: 'Your background',
                help: 'Please tell us a bit about your background (100 words or less).',
                maxLength: 100,
                tag: 'textarea',
                required: true
            },
            interest: {
                label: 'Your interest',
                help: 'Why would you like to be an Ocean Protocol Ambassador and what would you bring to the Ocean Protocol community (100 words or less)?',
                maxLength: 100,
                tag: 'textarea',
                required: true
            },
            communities: {
                label: 'Your communities',
                help: `What kind of communities are you a part of, which are relevant to advancing Ocean's cause and vision?`,
                placeholder: 'ie. data science, Python, crypto communities, scikit learn etc',
                required: true
            },
            publicspeaking: {
                label: 'Public speaking',
                help: 'How do you feel about public speaking?',
                required: true
            },
            linkedin: {
                label: 'Your LinkedIn profile',
                placeholder: 'ie. https://www.linkedin.com/company/13429589/',
                type: 'url'
            },
            github: {
                label: 'Your GitHub profile',
                placeholder: 'ie. https://github.com/oceanprotocol',
                type: 'url'
            }
        },
        button: 'Submit',
        baseUrl: ''
    }
}

class Modal extends PureComponent {
    state = {
        fetching: false,
        sent: false,
        message: ''
    }

    componentWillReceiveProps(newProps) { // eslint-disable-line react/no-deprecated
        if (!newProps.modal) {
            this.setState({
                fetching: false,
                sent: false,
                message: ''
            })
        }
    }

    componentDidUpdate() {
        if (!this.props.modal) {
            document.querySelectorAll('html')[0].style.overflow = 'auto'
        } else {
            document.querySelectorAll('html')[0].style.overflow = 'hidden'
        }
    }

    onSubmit = (e) => {
        e.preventDefault()

        let name
        let email
        let company
        let message
        let url

        let location
        let background
        let interest
        let publicspeaking
        let linkedin
        let github

        if (this.name) {
            if (!this.name.state.input || this.name.state.input.length < 3) {
                this.setState({ message: 'Please check the name' })
                return
            } else {
                name = encodeURIComponent(this.name.state.input)
            }
        }

        if (this.email) {
            if (!this.email.state.input || this.email.state.input.length < 5 || this.email.state.input.indexOf('@') === -1) {
                this.setState({ message: 'Please check the email' })
                return
            } else {
                email = encodeURIComponent(this.email.state.input)
            }
        }

        if (this.business) {
            if (!this.business.state.input || this.business.state.input.length < 3) {
                this.setState({ message: 'Please check the company' })
                return
            } else {
                company = encodeURIComponent(this.business.state.input)
            }
        }

        if (this.message) {
            if (!this.message.state.input || this.message.state.input.length < 3) {
                this.setState({ message: 'Please check the message' })
                return
            } else {
                message = encodeURIComponent(this.message.state.input)
            }
        }

        if (this.location) {
            if (!this.location.state.input || this.location.state.input.length < 3) {
                this.setState({ message: 'Please check the location' })
                return
            } else {
                location = encodeURIComponent(this.location.state.input)
            }
        }

        if (this.background) {
            if (!this.background.state.input || this.background.state.input.length < 3) {
                this.setState({ message: 'Please check your background' })
                return
            } else {
                background = encodeURIComponent(this.background.state.input)
            }
        }

        if (this.interest) {
            if (!this.interest.state.input || this.interest.state.input.length < 3) {
                this.setState({ message: 'Please check your interests' })
                return
            } else {
                interest = encodeURIComponent(this.interest.state.input)
            }
        }

        if (this.publicspeaking) {
            if (!this.publicspeaking.state.input || this.publicspeaking.state.input.length < 3) {
                this.setState({ message: 'Please check public speaking' })
                return
            } else {
                publicspeaking = encodeURIComponent(this.publicspeaking.state.input)
            }
        }

        if (this.linkedin) {
            linkedin = this.linkedin.state.input && encodeURIComponent(this.linkedin.state.input)
        }

        if (this.github) {
            github = this.github.state.input && encodeURIComponent(this.github.state.input)
        }

        if (this.props.modal === 'contributor') {
            url = `${forms[this.props.modal].baseUrl}&NAME=${name}&EMAIL=${email}&ROLE=${company}&MESSAGE=${message}&${gdpr.flag}`
        } else if (this.props.modal === 'ambassadors') {
            url = `${forms[this.props.modal].baseUrl}&NAME=${name}&EMAIL=${email}&LOCATION=${location}&BACKGROUND=${background}&INTEREST=${interest}&PUBLISPEAKING=${publicspeaking}&LINKEDIN=${linkedin}&GITHUB=${github}&${gdpr.flag}`

            // console.log(url)
        } else {
            url = `${forms[this.props.modal].baseUrl}&NAME=${name}&EMAIL=${email}&COMPANY=${company}&MESSAGE=${message}&${gdpr.flag}`
        }

        this.setState(
            {
                fetching: true,
                message: ''
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
        const { modal, toggle, ...props } = this.props

        return (
            <StyledLightbox show={!!modal} {...props}>
                <StyledCard>
                    <StyledClose alt="close" onClick={() => toggle()} src={cross} />
                    {!!modal && (
                        <div>
                            <SubTitle>{forms[modal].title}</SubTitle>
                            {forms[modal].description && (
                                <Paragraph>{forms[modal].description}</Paragraph>
                            )}
                            {this.state.sent ? (
                                <div>{this.state.message}</div>
                            ) : (
                                <form onSubmit={this.onSubmit}>
                                    <FormInput
                                        label={forms[modal].name}
                                        name="name"
                                        required
                                        type="text"
                                        ref={node => (this.name = node)}
                                    />

                                    <FormInput
                                        label={forms[modal].email}
                                        name="email"
                                        required
                                        type="email"
                                        ref={node => (this.email = node)}
                                    />

                                    {forms[modal].business && (
                                        <FormInput
                                            label={forms[modal].business}
                                            name="business"
                                            required
                                            type="text"
                                            ref={node => (this.business = node)}
                                        />
                                    )}

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

                                    {forms[modal].message && (
                                        <FormInput
                                            label={forms[modal].message}
                                            name="message"
                                            required
                                            tag="textarea"
                                            ref={node => (this.message = node)}
                                            maxLength={255}
                                            rows="6"
                                        />
                                    )}

                                    <Button fetching={this.state.fetching} type="submit">
                                        {forms[modal].button}
                                    </Button>
                                    {!!this.state.message && <StyledMessage>{this.state.message}</StyledMessage>}

                                    <Gdpr dangerouslySetInnerHTML={{ __html: gdpr.forms.modal }} />
                                </form>
                            )}
                        </div>
                    )}
                </StyledCard>
            </StyledLightbox>
        )
    }
}

Modal.propTypes = {
    modal: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Modal
