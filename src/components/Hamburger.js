import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, responsive, layout } from '../styles'

const StyledHamburger = styled.button`
    display: none;
    z-index: 10;
    padding: ${layout.pageFrame};
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: .15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    @media screen and (${responsive.sm.max}) {
        display: block;
    }
`

const StyledHamburgerBox = styled.span`
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
`

const StyledHamburgerInner = styled.span`
    width: 30px;
    height: 3px;
    background-color: rgba(${colors.white}, .8);
    border-radius: 5px;
    position: absolute;
    display: block;
    margin-top: -2px;
    top: auto;
    bottom: 0;
    transition-property: transform;
    transform: ${({ active }) => (active ? 'translate3d(0, -10px, 0) rotate(-45deg)' : 'translate3d(0, 0, 0) rotate(0)')};
    transition-duration: ${({ active }) => (active ? '0.22s' : '0.13s')};
    transition-timing-function: ${({ active }) => (active ? 'cubic-bezier(0.215, 0.61, 0.355, 1)' : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)')};

    &:before,
    &:after {
        width: 30px;
        height: 3px;
        background-color: rgba(${colors.white}, .8);
        border-radius: 5px;
        position: absolute;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
        content: '';
        display: block;
    }

    &:before {
        top: ${({ active }) => (active ? '0' : '-10px')};
        transform: ${({ active }) => (active ? 'rotate(-90deg)' : 'rotate(0)')};
        /* stylelint-disable */
        transition: ${({ active }) =>
        (active
            ? 'top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)'
            : 'top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)')};
        /* stylelint-enable */
    }

    &:after {
        bottom: -10px;
        top: ${({ active }) => (active ? '0' : '-20px')};
        opacity: ${({ active }) => (active ? '0' : '1')};
        /* stylelint-disable */
        transition: ${({ active }) =>
        (active
            ? 'top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear'
            : 'top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear')};
        /* stylelint-enable */
    }
`

const Hamburger = ({ active, ...props }) => (
    <StyledHamburger {...props}>
        <StyledHamburgerBox>
            <StyledHamburgerInner active={active} />
        </StyledHamburgerBox>
    </StyledHamburger>
)

Hamburger.propTypes = {
    active: PropTypes.bool.isRequired
}

export default Hamburger
