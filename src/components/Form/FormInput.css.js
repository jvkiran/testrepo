import styled from 'styled-components'
import { fonts, colors, gradients, layout } from '../../styles'

export const FormGroup = styled.div`
    margin-bottom: ${layout.spacer};
`

export const InputWrap = styled.div`
    background: ${gradients.main};
    border-radius: 2px;
    width: 100%;
    padding: 2px;
    display: flex;
    position: relative;

    &.is-focused {
        background: rgb(${colors.black});
    }
`

export const Input = styled.input`
    font-size: 1.1rem;
    font-family: ${fonts.family.button};
    color: rgb(${colors.black});
    border: none;
    box-shadow: none;
    width: 100%;
    background: rgb(${colors.white});
    padding: calc(${layout.spacer} / 3);
    margin: 0;
    border-radius: 2px;
    transition: 0.2s ease-out;
    min-height: 43px;
    appearance: none;

    &:focus {
        border: none;
        box-shadow: none;
        outline: 0;
    }

    &::placeholder {
        font-family: ${fonts.family.base};
        font-size: ${fonts.size.base};
        color: rgb(${colors.lightGrey});
        font-weight: ${fonts.fontWeight.base};
        line-height: 1.5;
        transition: 0.2s ease-out;
        opacity: 1;
    }

    &[readonly],
    &[disabled] {
        background-color: rgb(${colors.dimmedGrey});
        cursor: not-allowed;
        pointer-events: none;
    }
`

export const Textarea = Input.withComponent('textarea')

export const FormLabel = styled.label`
    color: rgb(${colors.grey});
    font-size: ${fonts.size.base};
    font-family: ${fonts.family.title};
    line-height: 1.2;
    display: block;
    margin-bottom: calc(${layout.spacer} / 4);

    &.is-required {
        &:after {
            content: '*';
            font-size: ${fonts.size.base};
            color: rgb(${colors.lightGrey});
            display: inline-block;
            margin-left: 0.1rem;
        }
    }
`

export const Count = styled.span`
    position: absolute;
    opacity: 0.7;
    font-size: ${fonts.size.mini};
    margin: 0;
    right: 0.4rem;
    top: 0.2rem;
    color: rgb(${colors.lightGrey});
`
