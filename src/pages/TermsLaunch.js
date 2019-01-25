import React from 'react'
import terms from '../data/termsLaunch.md'
import PageMarkdown from '../templates/PageMarkdown'

const TermsLaunch = ({ ...props }) => (
    <PageMarkdown markdownSource={terms} {...props} />
)

export default TermsLaunch
