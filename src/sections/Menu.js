import React, { Component } from 'react'
import oceanLogo from '@oceanprotocol/art/logo/logo-white.svg'
import smoothScroll from '../lib/smoothScroll'
import Hamburger from '../components/Hamburger'
import { layout } from '../styles'
import {
    StyledMenu,
    StyledContainer,
    StyledLogo,
    StyledNav,
    StyledMenuItem,
    StyledMobileNav
} from './Menu.css'

const MenuItems = [
    {
        name: 'Events',
        href: '#events'
    },
    {
        name: 'Project',
        href: '#project'
    },
    {
        name: 'Papers',
        href: '#papers'
    },
    {
        name: 'Why Ocean?',
        href: '#why'
    },
    {
        name: 'People',
        href: '#people'
    },
    {
        name: 'Blog',
        href: '#blog'
    },
    {
        name: 'Videos',
        href: '#video'
    },
    {
        name: 'Faq',
        href: '#faq'
    }
]

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            fixed: false,
            sections: {},
            current: '',
            lastScroll: window.scrollY
        }
    }

    componentDidMount() {
        this.mapSectionsTop()
        document.addEventListener('scroll', this.toggleFixedMenu)
        document.addEventListener('scroll', this.highlightCurrent)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.toggleFixedMenu)
        document.removeEventListener('scroll', this.highlightCurrent)
    }

    mapSectionsTop = () => {
        const sectionNodes = document.getElementsByTagName('section')
        const sections = {}
        for (let i = 0; i < sectionNodes.length; i++) {
            const sectionId = sectionNodes[i].id
            sections[sectionId] = {
                top: document.getElementById(sectionId).getBoundingClientRect().top + window.scrollY,
                bottom: document.getElementById(sectionId).getBoundingClientRect().bottom + window.scrollY
            }
        }
        this.setState({ sections })
        this.highlightCurrent()
    }

    highlightCurrent = () => {
        const range = []
        const scrollDown = this.state.lastScroll > window.scrollY
        if (scrollDown) {
            range[0] = window.scrollY + (window.innerHeight * 0)
            range[1] = window.scrollY + (window.innerHeight * 0.5)
        } else {
            range[0] = window.scrollY + (window.innerHeight * 0.5)
            range[1] = window.scrollY + (window.innerHeight * 1)
        }
        const sectionIds = Object.keys(this.state.sections)
        for (let i = 0; i < sectionIds.length; i++) {
            const id = sectionIds[i]
            let inView
            if (scrollDown) {
                inView = this.state.sections[id].top > range[0] && this.state.sections[id].top < range[1]
            } else {
                inView = this.state.sections[id].bottom > range[0] && this.state.sections[id].bottom < range[1]
            }
            if (inView) {
                if (this.state.current !== id) {
                    this.setState({ current: id })
                }
                break
            }
        }
    }

    toggleFixedMenu = () => {
        const pageFrame =
            Number(layout.pageFrame.replace('rem', '')) *
            Number(window
                .getComputedStyle(document.getElementsByTagName('html')[0])
                .getPropertyValue('font-size')
                .replace('px', ''))
        if (window.innerWidth > 640) {
            if (window.scrollY >= window.innerHeight - pageFrame && !this.state.fixed) {
                this.setState({ fixed: true })
            } else if (window.scrollY < window.innerHeight - pageFrame && this.state.fixed) {
                this.setState({ fixed: false })
            }
        }
    }

    toggleMobileScroll = () => {
        if (this.state.active) {
            document.getElementsByTagName('html')[0].style.overflow = 'auto'
        } else {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        }
    }

    toggleMobileMenu = () => {
        this.toggleMobileScroll()
        this.setState({ active: !this.state.active })
    }

    onSmoothScroll = (e) => {
        if (e.target.getAttribute('href').indexOf('#') !== -1) {
            e.preventDefault()
            if (this.state.active) this.toggleMobileMenu()
            smoothScroll(e)
        }
    }

    render() {
        return (
            <StyledMenu fixed={this.state.fixed}>
                <StyledContainer>
                    <StyledLogo>
                        <a href="/">
                            <img alt="Ocean" src={oceanLogo} />
                        </a>
                    </StyledLogo>
                    <StyledNav>
                        {MenuItems.map(item => (
                            <StyledMenuItem
                                current={item.href.replace('#', '') === this.state.current}
                                href={item.href}
                                key={item.name}
                                onClick={this.onSmoothScroll}>
                                {item.name}
                            </StyledMenuItem>
                        ))}
                    </StyledNav>
                    <Hamburger active={this.state.active} onClick={this.toggleMobileMenu} />
                    <StyledMobileNav active={this.state.active}>
                        {MenuItems.map(item => (
                            <StyledMenuItem
                                current={item.href.replace('#', '') === this.state.current}
                                href={item.href}
                                key={item.name}
                                onClick={this.onSmoothScroll}>
                                {item.name}
                            </StyledMenuItem>
                        ))}
                    </StyledMobileNav>
                </StyledContainer>
            </StyledMenu>
        )
    }
}

export default Menu
