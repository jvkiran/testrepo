import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FormHelp from './FormHelp'
import {
    FormGroup,
    InputWrap,
    Input,
    Textarea,
    FormLabel,
    Count
} from './FormInput.css'

const FormTag = ({ tag, ...props }) =>
    tag === 'textarea' ? <Textarea {...props} /> : <Input {...props} />

FormTag.propTypes = {
    tag: PropTypes.string.isRequired
}

class FormInput extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
        tag: PropTypes.string,
        type: PropTypes.string,
        maxLength: PropTypes.number,
        maxWords: PropTypes.number,
        help: PropTypes.string
    }

    state = {
        input: '',
        wordCount: null,
        isFocused: false
    }

    onChange = ({ target }) => {
        const regex = /\s+/gi
        const wordCount = target.value
            .trim()
            .replace(regex, ' ')
            .split(' ').length

        if (
            (this.props.maxLength &&
                target.value.length > this.props.maxLength) ||
            (this.props.maxWords && wordCount > this.props.maxWords)
        ) {
            return
        }
        this.setState({ input: target.value, wordCount })
    }

    render() {
        const {
            name,
            label,
            required,
            tag,
            type,
            maxLength,
            maxWords,
            help,
            ...props
        } = this.props

        return (
            <FormGroup>
                <FormLabel
                    htmlFor={name}
                    className={
                        required ? 'form__label is-required' : 'form__label'
                    }
                    title={required ? 'Required' : null}
                >
                    {label}
                </FormLabel>
                <InputWrap
                    className={
                        this.state.isFocused
                            ? 'input-wrap is-focused'
                            : 'input-wrap'
                    }
                >
                    <FormTag
                        id={name}
                        name={name}
                        tag={tag}
                        maxLength={maxLength}
                        maxWords={maxWords}
                        value={this.state.input}
                        required={required}
                        type={type}
                        {...props}
                        onChange={this.onChange}
                        onFocus={() => this.setState({ isFocused: true })}
                        onBlur={() => this.setState({ isFocused: false })}
                    />
                    {!!maxLength && (
                        <Count>{maxLength - this.state.input.length}</Count>
                    )}
                    {!!maxWords && (
                        <Count>{maxWords - this.state.wordCount} words</Count>
                    )}
                </InputWrap>
                {help && <FormHelp>{help}</FormHelp>}
            </FormGroup>
        )
    }
}

export default FormInput
