import React from 'react'
import privacy from '../data/privacy.md'
import PageMarkdown from '../templates/PageMarkdown'

const Privacy = ({ ...props }) => (
    <PageMarkdown markdownSource={privacy} {...props} />
)

export default Privacy
