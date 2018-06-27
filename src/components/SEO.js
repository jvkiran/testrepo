import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { meta } from '../../src/constants'

const SEO = ({
    title, description, image, path
}) => {
    const url = `${meta.url}${path}`

    return (
        <Helmet
            defaultTitle={`${meta.title} — ${meta.tagline}`}
            titleTemplate={`%s — ${meta.title}`}>

            <html lang="en" />

            <title>{title}</title>

            {/* General tags */}
            <meta content={description} name="description" />
            <meta content={`${meta.url}${image}`} name="image" />
            <link href={url} rel="canonical" />

            {/* OpenGraph tags */}
            <meta content={url} property="og:url" />
            <meta content={title} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content={`${meta.url}${image}`} property="og:image" />

            {/* Twitter Card tags */}
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="@oceanprotocol" name="twitter:creator" />
            <meta content={title} name="twitter:title" />
            <meta content={description} name="twitter:description" />
            <meta content={`${meta.url}${image}`} name="twitter:image" />
        </Helmet>
    )
}

SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string
}

SEO.defaultProps = {
    description: meta.description,
    image: meta.image,
    path: '',
    title: `${meta.title} — ${meta.tagline}`
}

export default SEO
