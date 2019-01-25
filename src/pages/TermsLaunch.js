import React from 'react'
import terms from '../data/termsLaunch.md'
import PageMarkdown from '../templates/PageMarkdown'

const title = 'Terms & Conditions for the Ocean Token Launch Distribution'

const TermsLaunch = ({ ...props }) => (
    <PageMarkdown title={title} markdownSource={terms} {...props} />
)

export default TermsLaunch
