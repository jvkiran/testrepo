import React from 'react'
import Helmet from 'react-helmet'
import { meta } from '../constants'

const Head = () => (
    <Helmet
        defaultTitle={`${meta.title} — ${meta.tagline}`}
        titleTemplate={`%s — ${meta.title}`}>

        {window.location.hostname !== 'oceanprotocol.com' &&
            <meta content="noindex,nofollow" name="robots" />
        }
    </Helmet>
)

export default Head
