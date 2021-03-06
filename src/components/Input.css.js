import styled from 'styled-components'
import { colors, fonts, transitions } from '../styles'

export const StyledInputWrapper = styled.div`
    border-radius: 2px;
    position: relative;
    width: 100%;
    padding: 1px;
    margin: 1rem 0;
    background: linear-gradient(
        to right,
        rgb(${colors.purple}),
        rgb(${colors.pink})
    );

    & img {
        position: absolute;
        left: 1rem;
        top: 1rem;
        height: 1rem;
        opacity: 0.7;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    outline: none;
    margin: 0;
    font-size: ${fonts.size.base};
    font-family: ${fonts.family.base};
    padding: 0.75rem 1rem;
    padding-left: ${({ icon }) => (icon ? '3rem' : '1rem')};
    background: rgb(${colors.white});
    color: rgb(${colors.black});
    border: none;
    border-radius: 2px;
    box-shadow: none;
    transition: ${transitions.short};

    &::placeholder {
        color: rgba(${colors.black}, 0.5);
    }

    &:focus {
        &::placeholder {
            color: rgba(${colors.black}, 0.3);
        }
    }
`

export const StyledTextarea = StyledInput.withComponent('textarea')

export const StyledCharacterCount = styled.p`
    position: absolute;
    opacity: 0.7;
    font-size: ${fonts.size.small};
    margin: 0;
    right: 0;
`
