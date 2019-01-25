import React from 'react'
import terms from '../data/termsLaunch.md'
import PageMarkdown from '../templates/PageMarkdown'

const title = 'Terms Pre-Launch'
const description =
    'Terms and Conditions for Whitelisting for participating in the Public Pre-Launch Token Exchange and the Network Launch Token Exchange of Ocean Protocol Foundation Ltd.'

const TermsPreLaunch = ({ ...props }) => (
    <PageMarkdown
        title={title}
        description={description}
        markdownSource={terms}
        {...props}
    />
)

export default TermsPreLaunch
