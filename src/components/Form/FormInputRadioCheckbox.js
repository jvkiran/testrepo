import React from 'react'
import PropTypes from 'prop-types'
import FormHelp from './FormHelp'
import { FormGroup, FormLabel } from './FormInput.css'
import {
    RadioGroup,
    RadioWrap,
    Radio,
    RadioLabel
} from './FormInputRadioCheckbox.css'

const FormRadio = ({ name, required, label, help, type, options }) => (
    <FormGroup>
        <FormLabel
            htmlFor={name}
            className={required ? 'form__label is-required' : 'form__label'}
            title={required ? 'Required' : null}
        >
            {label}
        </FormLabel>

        <RadioGroup>
            {options.map((option, index) => (
                <RadioWrap key={index}>
                    <Radio
                        type={type}
                        id={option.value}
                        name={name}
                        value={option.value}
                    />
                    <RadioLabel htmlFor={option.value}>
                        {option.label}
                    </RadioLabel>
                </RadioWrap>
            ))}
        </RadioGroup>

        {help && <FormHelp>{help}</FormHelp>}
    </FormGroup>
)

FormRadio.propTypes = {
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    help: PropTypes.string,
    options: PropTypes.array,
    type: PropTypes.string
}

export default FormRadio
