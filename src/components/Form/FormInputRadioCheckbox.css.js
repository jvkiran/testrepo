import styled from 'styled-components'
import { fonts, colors, layout, responsive } from '../../styles'

export const RadioGroup = styled.div`
    margin-top: calc(${layout.spacer} / 2);
    margin-bottom: -2%;

    @media screen and (${responsive.sm.min}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const RadioWrap = styled.div`
    position: relative;
    padding: calc(${layout.spacer} / 2);
    text-align: center;
    display: flex;
    align-items: center;
    margin-bottom: 2%;

    @media screen and (${responsive.sm.min}) {
        flex: 0 0 49%;
    }
`

export const RadioLabel = styled.label`
    margin: 0;
    padding: 0;
    font-family: ${fonts.family.button};
    font-size: ${fonts.size.small};
    line-height: 1.2;
    border: 2px solid rgb(${colors.dimmedGrey});
    border-radius: 0.2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: rgb(${colors.grey});
    text-align: left;
    padding-left: 2.5rem;
    display: flex;
    align-items: center;
`

export const Radio = styled.input`
    &:checked + label {
        border-color: rgb(${colors.pink});
    }
`
