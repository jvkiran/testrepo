import React, { PureComponent } from 'react'
import { StyledHeaderAddition, StyledSocialHero } from './Header.css'

export default class Header extends PureComponent {
    render() {
        return (
            <StyledHeaderAddition>
                <StyledSocialHero items={['github', 'gitter']} />
            </StyledHeaderAddition>
        )
    }
}
