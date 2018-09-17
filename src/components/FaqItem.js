import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    StyledQuestion,
    StyledParagraph
} from './FaqItem.css'

export default class FaqItem extends Component {
    state = {
        collapsed: true
    }

    static propTypes = {
        answer: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired
    }

    toggle() {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        const { question, answer } = this.props
        return (
            <Container>
                <StyledQuestion className={this.state.collapsed ? '' : 'expanded'} dangerouslySetInnerHTML={{ __html: question }} onClick={() => this.toggle()} />
                <StyledParagraph className={this.state.collapsed ? '' : 'visible'} dangerouslySetInnerHTML={{ __html: answer }} />
            </Container>
        )
    }
}
