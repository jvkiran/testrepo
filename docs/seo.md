# SEO

## Dynamic `meta` tags

Dynamic `meta` tags for better search engine ranking can be achieved by using the SEO component on every page under `src/pages/`. Every created page in there requires the use of this component, with some props pushed to it, e.g.:

```js
import PropTypes from 'prop-types'
import SEO from '../components/SEO'

const Page = ({ location }) => {
    const title = 'PAGE_TITLE'
    const description = 'PAGE_DESCRIPTION'
    const image = 'PAGE_IMAGE_PATH'

    return (
        <SEO
            description={description}
            image={image}
            path={location.pathname}
            title={title}
        />
    )
}

Page.propTypes = {
    location: PropTypes.object.isRequired
}
```

This component will dynamically generate the required `meta` tags for search engines, Twitter Cards, and Facebook Open Graph tags.
