import React from 'react'
import privacy from '../data/privacy.md'

import PageMarkdown from '../templates/PageMarkdown'

const title = 'Privacy Policy'
const description = 'Privacy Policy for the use of oceanprotocol.com.'

const Privacy = ({ ...props }) => (
    <PageMarkdown
        title={title}
        description={description}
        markdownSource={privacy}
        {...props}
    />
)

export default Privacy
