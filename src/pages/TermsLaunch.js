import React from 'react'
import terms from '../data/pages/terms-launch.md'
import PageMarkdown from '../templates/PageMarkdown'

const TermsLaunch = ({ ...props }) => (
    <PageMarkdown markdownSource={terms} {...props} />
)

export default TermsLaunch
