import React from 'react'
import terms from '../data/termsPrelaunch.md'
import PageMarkdown from '../templates/PageMarkdown'

const TermsPreLaunch = ({ ...props }) => (
    <PageMarkdown markdownSource={terms} {...props} />
)

export default TermsPreLaunch
