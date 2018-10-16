import styled from 'styled-components'
import { fonts, colors, layout, responsive } from '../../styles'

export const RadioGroup = styled.div`
    margin-top: calc(${layout.spacer} / 2);

    @media screen and (${responsive.sm.min}) {
        display: flex;
    }
`

export const RadioWrap = styled.div`
    position: relative;
    padding: calc(${layout.spacer} / 2);
    text-align: center;
    display: flex;
    align-items: center;
    margin-bottom: calc(${layout.spacer} / 4);

    @media screen and (${responsive.sm.min}) {
        flex: 1;
        margin-bottom: 0;
        margin-left: calc(${layout.spacer} / 4);

        &:first-child {
            margin-left: 0;
        }
    }
`

export const RadioLabel = styled.label`
    margin: 0;
    padding: 0;
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.small};
    line-height: 3.5;
    border: 2px solid rgb(${colors.dimmedGrey});
    border-radius: .2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

export const Radio = styled.input`
    &:checked + label {
        border-color: rgb(${colors.pink});
    }
`
