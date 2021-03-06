import { social } from '../constants.js'

const forms = {
    dataleads: {
        title: 'Get in Touch',
        fields: {
            name: {
                label: 'Your name',
                placeholder: 'i.e. Jelly McJellyfish',
                required: true
            },
            email: {
                label: 'Your email',
                placeholder: 'i.e. jelly@mcjellyfish.com',
                type: 'email',
                required: true
            },
            company: {
                label: 'Your Company Name',
                placeholder: 'i.e. Jellyfish Inc.'
            },
            about: {
                label: 'About you',
                type: 'checkbox',
                required: true,
                options: [
                    {
                        value: 'provider',
                        label: 'I can provide data'
                    },
                    {
                        value: 'consumer',
                        label: 'I want to use data'
                    }
                ]
            },
            message: {
                label: 'Your Message',
                placeholder:
                    'Tell us why you would like to publish or get data',
                maxWords: 100,
                tag: 'textarea',
                required: true
            }
        },
        button: 'Submit',
        success: `Thank you! Assuming your profile is a good fit, we will be in touch with you.`,
        baseUrl:
            '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13',
        listIdProvider: 'b402d6b267',
        listIdConsumer: '482c337540'
    },
    ambassadors: {
        title: 'Ocean Protocol Ambassador Program',
        description:
            'Thank you for your interest in becoming an Ocean Protocol Ambassador. To help us learn more about you and why you are interested in representing Ocean Protocol please fill out the information below.\n\nWe look forward to hearing from you!',
        fields: {
            name: {
                label: 'Your name',
                placeholder: 'i.e. Jelly McJellyfish',
                required: true
            },
            email: {
                label: 'Your email',
                placeholder: 'i.e. jelly@mcjellyfish.com',
                type: 'email',
                required: true
            },
            location: {
                label: 'Your location',
                placeholder: 'i.e. Amsterdam',
                help: 'Where in the world are you located (geographically)?',
                required: true
            },
            background: {
                label: 'Your background',
                help:
                    'Please tell us a bit about your background (100 words or less).',
                maxWords: 100,
                tag: 'textarea',
                required: true
            },
            interest: {
                label: 'Your interest',
                help:
                    'Why would you like to be an Ocean Protocol Ambassador and what would you bring to the Ocean Protocol community (100 words or less)?',
                maxWords: 100,
                tag: 'textarea',
                required: true
            },
            community: {
                label: 'Your communities',
                help: `What kind of communities are you a part of, which are relevant to advancing Ocean's cause and vision?`,
                placeholder: 'i.e. data science, Python, etc.',
                required: true
            },
            publicspeaking: {
                label: 'Public speaking',
                help: 'How do you feel about public speaking?',
                type: 'radio',
                options: [
                    {
                        value: 'yes',
                        label: 'I love it!'
                    },
                    {
                        value: 'no',
                        label: 'I would rather not.'
                    }
                ],
                required: true
            },
            linkedin: {
                label: 'Your LinkedIn profile',
                placeholder: 'i.e. https://www.linkedin.com/company/13429589/',
                type: 'url'
            },
            github: {
                label: 'Your GitHub profile',
                placeholder: 'i.e. https://github.com/oceanprotocol',
                type: 'url'
            },
            twitter: {
                label: 'Your Twitter profile',
                placeholder: 'i.e. https://twitter.com/oceanprotocol',
                type: 'url'
            }
        },
        button: 'Submit',
        success: `Thank you for your submission. We will review your application shortly and get back to you if your profile is a good fit. \n\nIn the mean time join the conversation and connect with the <a href=${
            social.telegram
        }>Ocean community on Telegram</a>`,
        baseUrl:
            '//oceanprotocol.us16.list-manage.com/subscribe/post-json?u=cd10df7575858374f6a066d13&amp;id=ee0c0eec08'
    }
}

export default forms
