import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as OceanLogo } from '@oceanprotocol/art/logo/logo-white.svg'
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
        noheader: PropTypes.bool
    }

    render() {
        return (
            <StyledMenu
                background={this.props.background}
                noheader={this.props.noheader}
            >
                <StyledContainer>
                    <StyledLogo to={'/'} title="Back to homepage">
                        <OceanLogo />
                    </StyledLogo>
                    <StyledNav>
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
