import React from 'react'
import terms from '../data/pages/terms-prelaunch.md'
import PageMarkdown from '../templates/PageMarkdown'

const TermsPreLaunch = ({ ...props }) => (
    <PageMarkdown markdownSource={terms} {...props} />
)

export default TermsPreLaunch
