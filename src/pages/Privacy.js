import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Markdown from 'react-remarkable'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import SEO from '../components/SEO'

import { fonts, colors } from '../styles'

import privacy from '../data/privacy.md'

const StyledSection = styled(Section)`
    ${ContentRow} { /* stylelint-disable-line */
        max-width: 45rem;
    }

    ${Title} { /* stylelint-disable-line */
        margin-bottom: 1rem;
    }

    ${SubTitle} { /* stylelint-disable-line */
        color: rgb(${colors.lightGrey});
        margin-bottom: 3rem;
    }
`

const StyledContent = styled(ContentRow)`
    & h1 {
        font-size: ${fonts.size.h3};
    }

    & h2 {
        font-size: ${fonts.size.h4};
    }

    & h3 {
        font-size: ${fonts.size.h5};
    }
`

const title = 'Privacy Policy'
const description = 'Privacy Policy for the use of oceanprotocol.com.'

class Privacy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            fetching: false
        }
    }

    componentDidMount() {
        this.fetchPrivacyPolicy()
    }

    fetchPrivacyPolicy = () => {
        this.setState({ fetching: true })
        fetch(privacy)
            .then(response => response.text())
            .then(text => {
                this.setState({ fetching: false, text })
            })
            .catch({ fetching: false })
    }

    render() {
        return (
            <Fragment>
                <SEO
                    description={description}
                    path={this.props.location.pathname}
                    title={title} />
                <Header />
                <StyledSection>
                    <ContentRow>
                        <Title>{title}</Title>
                        <SubTitle>{description}</SubTitle>
                    </ContentRow>

                    <StyledContent>
                        {this.state.fetching ? (
                            <Spinner />
                        ) : (
                            <Markdown options={{ breaks: true, linkify: true }} source={this.state.text} />
                        )}
                    </StyledContent>
                </StyledSection>
            </Fragment>
        )
    }
}

Privacy.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
}

export default Privacy
