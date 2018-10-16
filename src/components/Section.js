import React from 'react'
import PropTypes from 'prop-types'
import { StyledSection, StyledColumn } from './Section.css'

const Section = ({
    children,
    viewport,
    fontColor,
    minHeight,
    background,
    ...props
}) => (
    <StyledSection background={background} viewport={viewport} {...props}>
        <StyledColumn fontColor={fontColor} minHeight={minHeight}>
            {children}
        </StyledColumn>
    </StyledSection>
)

Section.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
    fontColor: PropTypes.string,
    minHeight: PropTypes.number,
    viewport: PropTypes.bool
}

Section.defaultProps = {
    background: '',
    minHeight: 0,
    fontColor: 'inherit',
    viewport: false
}

export default Section
