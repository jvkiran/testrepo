import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import fetch from 'isomorphic-fetch'
import remark from 'remark'
import remark2react from 'remark-react'
import toc from 'remark-toc'
import Page from '../templates/Page'
import Spinner from '../components/Spinner'
import { StyledContent } from './PageMarkdown.css'

export default class PageMarkdown extends Component {
    state = {
        text: '',
        fetching: false
    }

    static propTypes = {
        location: PropTypes.object.isRequired,
        markdownSource: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }

    componentDidMount() {
        this.fetchMarkdown()
    }

    fetchMarkdown() {
        this.setState({ fetching: true })
        fetch(this.props.markdownSource)
            .then(response => response.text())
            .then(text => {
                this.setState({ fetching: false, text })
            })
            .catch({ fetching: false })
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta content="noindex,nofollow" name="robots" />
                </Helmet>
                <Page
                    title={this.props.title}
                    description={this.props.description}
                    location={this.props.location}
                >
                    <StyledContent>
                        {this.state.fetching ? (
                            <Spinner />
                        ) : (
                            remark()
                                .use(toc, { maxDepth: 3, tight: true })
                                .use(remark2react, {
                                    sanitize: { clobberPrefix: '' }
                                })
                                .processSync(this.state.text).contents
                        )}
                    </StyledContent>
                </Page>
            </>
        )
    }
}
