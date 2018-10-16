import styled, { keyframes } from 'styled-components'
import { colors } from '../styles'

export const StyledSpinner = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 1rem;

    &:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid rgb(${colors.purple});
        border-top-color: rgb(${colors.violet});
        animation: rotate360 0.6s linear infinite;
    }
`

export const rotate360 = keyframes`
    to { transform: rotate(360deg); }
`

export const StyledSpinnnerWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
`
