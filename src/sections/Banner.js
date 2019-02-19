import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledBanner, StyledLink, FlexContentRow } from './Banner.css'
import { colors } from '../styles'
import content from '../data/banner.json'
import OceanMantarayBack from '@oceanprotocol/art/mantaray/mantaray-grid@2x.png'

export default class Banner extends PureComponent {
    static propTypes = {
        light: PropTypes.bool
    }

    render() {
        const { light } = this.props

        if (content.show === true) {
            return (
                <StyledBanner
                    backgroundColor={colors.darkPurple}
                    backgroundImage={OceanMantarayBack}
                    light={light}
                >
                    <FlexContentRow style={{ zIndex: 5 }}>
                        <StyledLink smooth to="/#register" light={light}>
                            {content.title}
                        </StyledLink>
                    </FlexContentRow>
                </StyledBanner>
            )
        } else {
            return null
        }
    }
}
