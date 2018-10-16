import React, { PureComponent } from 'react'
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

class FormInput extends PureComponent {
    state = {
        input: '',
        isFocused: false
    }

    onChange = ({ target }) => {
        if (
            this.props.maxLength &&
            target.value.length > this.props.maxLength
        ) {
            return
        }
        this.setState({ input: target.value })
    }

    render() {
        const {
            name,
            label,
            required,
            tag,
            type,
            maxLength,
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
                </InputWrap>
                {help && <FormHelp>{help}</FormHelp>}
            </FormGroup>
        )
    }
}

export default FormInput
