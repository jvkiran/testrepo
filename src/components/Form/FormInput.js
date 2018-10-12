import React, { PureComponent } from 'react'
import './FormInput.scss'

const FormTag = ({ component, ...props }) => {
    const Tag = component
    return <Tag {...props} />
}

class FormInput extends PureComponent {
    state = {
        input: '',
        isFocused: false
    }

    onChange = ({ target }) => {
        if (this.props.maxLength && target.value.length > this.props.maxLength) return
        this.setState({ input: target.value })
    }

    render() {
        const { name, label, required, component, maxLength, ...props } = this.props

        return (
            <>
                <label
                    htmlFor={name}
                    className={required ? 'form__label is-required' : 'form__label'}
                    title={required ? 'Required' : null}
                >
                    {label}
                </label>
                <div className={this.state.isFocused ? 'input-wrap is-focused' : 'input-wrap'}>
                    <FormTag
                        className="input"
                        id={name}
                        component={component}
                        maxLength={maxLength}
                        value={this.state.input}
                        {...props}
                        onChange={this.onChange}
                        onFocus={() => this.setState({ isFocused: true })}
                        onBlur={() => this.setState({ isFocused: false })}
                    />
                    {!!maxLength && <small className="count">{maxLength - this.state.input.length}</small>}
                </div>
            </>
        )
    }
}

export default FormInput
