import React from 'react'
import Helmet from 'react-helmet'
import { meta } from '../constants'

const Head = () => (
    <Helmet
        defaultTitle={`${meta.title} — ${meta.tagline}`}
        titleTemplate={`%s — ${meta.title}`}>
        <meta content={meta.description} name="description" />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@oceanprotocol" name="twitter:site" />
        <meta content={meta.title} name="twitter:title" />
        <meta content={meta.tagline} name="twitter:description" />
        <meta content={`${meta.url}/twitter_card.png`} name="twitter:image:src" />

        <meta content={meta.title} property="og:title" />
        <meta content="website" property="og:type" />
        <meta content={meta.url} property="og:url" />
        <meta content={`${meta.url}/twitter_card.png`} property="og:image" />
        <meta content={meta.tagline} property="og:description" />
        <meta content={meta.title} property="og:site_name" />

        {window.location.hostname !== 'oceanprotocol.com' &&
            <meta content="noindex,nofollow" name="robots" />
        }
    </Helmet>
)

export default Head
