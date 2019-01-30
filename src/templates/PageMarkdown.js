import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import remark from 'remark'
import remark2react from 'remark-react'
import toc from 'remark-toc'
import * as matter from 'gray-matter'
import Page from '../templates/Page'
import Spinner from '../components/Spinner'
import { StyledContent } from './PageMarkdown.css'

export default class PageMarkdown extends Component {
    state = {
        text: '',
        title: ' ',
        description: '',
        fetching: false
    }

    static propTypes = {
        location: PropTypes.object.isRequired,
        markdownSource: PropTypes.any.isRequired
    }

    componentDidMount() {
        this.fetchMarkdown()
    }

    fetchMarkdown() {
        this.setState({ fetching: true })

        fetch(this.props.markdownSource)
            .then(response => response.text())
            .then(text => {
                const file = matter(text)
                this.setState({
                    fetching: false,
                    text: file.content,
                    title: file.data.title,
                    description: file.data.description
                })
            })
            .catch({ fetching: false })
    }

    MarkdownOutput = ({ text }) =>
        remark()
            .use(toc, { maxDepth: 3, tight: true })
            .use(remark2react, {
                sanitize: { clobberPrefix: '' } // needed to remove 'user-content' string from generated IDs
            })
            .processSync(text).contents

    render() {
        return (
            <Page
                title={this.state.title}
                description={this.state.description}
                location={this.props.location}
            >
                <StyledContent>
                    {this.state.fetching ? (
                        <Spinner />
                    ) : (
                        <this.MarkdownOutput text={this.state.text} />
                    )}
                </StyledContent>
            </Page>
        )
    }
}
