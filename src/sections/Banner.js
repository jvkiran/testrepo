import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledBanner, StyledLink, FlexContentRow } from './Banner.css'
import { colors } from '../styles'
import content from '../data/banner.json'
import OceanMantarayBack from '@oceanprotocol/art/mantaray/mantaray-grid@2x.png'

export default class Banner extends PureComponent {
    static propTypes = {
        light: PropTypes.bool,
        viewport: PropTypes.bool,
        fullWidth: PropTypes.bool
    }

    render() {
        const { light, viewport, fullWidth } = this.props
        return (
            <StyledBanner
                backgroundColor={colors.darkPurple}
                backgroundImage={OceanMantarayBack}
                viewport={viewport}
                light={light}
            >
                <FlexContentRow wide={!fullWidth} style={{ zIndex: 5 }}>
                    <StyledLink smooth to="/#register" light={light}>
                        {content.title}
                    </StyledLink>
                </FlexContentRow>
            </StyledBanner>
        )
    }
}
