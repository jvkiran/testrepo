import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { colors } from '../styles'

const rotate360 = keyframes`
  from { transform: rotate(0deg) translateZ(0); }
  to { transform: rotate(360deg) translateZ(0); }
`

const StyledSpinnnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s infinite linear;
  border: ${({ white }) =>
        (white ? `0.25rem solid rgba(${colors.white}, 0.2)` : `0.25rem solid rgba(${colors.black}, 0.2)`)};
  border-radius: 50%;
  border-top-color: ${({ white }) => (white ? `rgb(${colors.white})` : `rgb(${colors.black})`)};
  height: 26px;
  width: 26px;
  margin: 20px;
`

const Spinner = ({ white, ...props }) => (
    <StyledSpinnnerWrapper {...props}>
        <StyledSpinner white={white} />
    </StyledSpinnnerWrapper>
)

Spinner.propTypes = {
    white: PropTypes.bool
}

Spinner.defaultProps = {
    white: false
}

export default Spinner
