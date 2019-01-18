import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as OceanLogoWhite } from '@oceanprotocol/art/logo/logo-white.svg'
import { ReactComponent as OceanLogoBlack } from '@oceanprotocol/art/logo/logo.svg'
import { ReactComponent as Caret } from '../assets/misc/caret.svg'
import {
    StyledMenu,
    StyledSubMenu,
    StyledContainer,
    StyledLogo,
    StyledNav,
    StyledMenuItem,
    StyledSubMenuItem
} from './Menu.css'

import menuItems from '../data/menu.json'

const SubMenu = ({ item }) => (
    <StyledSubMenu>
        {item.sub.map((subitem, index) => (
            <StyledSubMenuItem key={index} to={subitem.href}>
                {subitem.name}
            </StyledSubMenuItem>
        ))}
    </StyledSubMenu>
)

SubMenu.propTypes = {
    item: PropTypes.object
}

export default class Menu extends PureComponent {
    static propTypes = {
        background: PropTypes.string,
        noabsolute: PropTypes.bool,
        light: PropTypes.bool
    }

    render() {
        const { background, noabsolute, light } = this.props

        return (
            <StyledMenu background={background} noabsolute={noabsolute}>
                <StyledContainer>
                    <StyledLogo to={'/'} title="Back to homepage">
                        {light ? <OceanLogoBlack /> : <OceanLogoWhite />}
                    </StyledLogo>
                    <StyledNav light={light}>
                        {menuItems.map(item => (
                            <li key={item.name}>
                                <StyledMenuItem to={item.href}>
                                    {item.name}
                                    {item.sub && <Caret />}
                                </StyledMenuItem>
                                {item.sub && <SubMenu item={item} />}
                            </li>
                        ))}
                    </StyledNav>
                </StyledContainer>
            </StyledMenu>
        )
    }
}
