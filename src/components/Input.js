import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    StyledInputWrapper,
    StyledInput,
    StyledTextarea,
    StyledCharacterCount
} from './Input.css'

export default class Input extends Component {
    state = { input: '' }

    static propTypes = {
        maxLength: PropTypes.number,
        type: PropTypes.string
    }

    static defaultProps = {
        maxLength: 0,
        type: 'text'
    }

    onChange = ({ target }) => {
        if (this.props.maxLength && target.value.length > this.props.maxLength) return
        this.setState({ input: target.value })
    }

    render() {
        const { maxLength, type, ...props } = this.props

        return (
            <StyledInputWrapper>
                {type === 'textarea' ? (
                    <StyledTextarea onChange={this.onChange} type={type} value={this.state.input} {...props} />
                ) : (
                    <StyledInput onChange={this.onChange} type={type} value={this.state.input} {...props} />
                )}
                {!!maxLength && <StyledCharacterCount>{maxLength - this.state.input.length}</StyledCharacterCount>}
            </StyledInputWrapper>
        )
    }
}
