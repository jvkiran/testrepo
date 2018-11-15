import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as OceanLogo } from '@oceanprotocol/art/logo/logo-white.svg'
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills'
import Hamburger from '../components/Hamburger'
import { ReactComponent as Caret } from '../assets/misc/caret.svg'
import { layout } from '../styles'
import {
    StyledMenu,
    StyledSubMenu,
    StyledContainer,
    StyledLogo,
    StyledNav,
    StyledMenuItem,
    StyledMobileNav,
    StyledSubMenuItem
} from './Menu.css'

const MenuItems = [
    {
        name: 'Events',
        href: '#events'
    },
    {
        name: 'Project',
        href: '#project',
        sub: [
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
            }
        ]
    },
    {
        name: 'People',
        href: '#people',
        sub: [
            {
                name: 'People',
                href: '#people'
            },
            {
                name: 'Core Team',
                href: '#team'
            },
            {
                name: 'Advisors',
                href: '#advisors'
            },
            {
                name: 'Ambassadors',
                href: '#ambassadors'
            },
            {
                name: 'Collaborators',
                href: '#collaborators'
            }
        ]
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
        name: 'More',
        href: '#more',
        sub: [
            {
                name: 'Art',
                href: '/art/'
            },
            {
                name: 'FAQ',
                href: '/faq/'
            },
            {
                name: 'Newsletter',
                href: '/newsletter/'
            }
        ]
    }
]

const SubMenu = ({ item, current }) => (
    <StyledSubMenu>
        {item.sub.map((subitem, index) => (
            <StyledSubMenuItem
                current={item.href.replace('#', '') === current}
                key={index}
                href={subitem.href}
            >
                {subitem.name}
            </StyledSubMenuItem>
        ))}
    </StyledSubMenu>
)

SubMenu.propTypes = {
    item: PropTypes.object,
    current: PropTypes.string
}

class Menu extends PureComponent {
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

        // eslint-disable-next-line no-unused-vars
        const scroll = new SmoothScroll('a[href*="#"]', {
            header: '[data-scroll-header]',
            topOnEmptyHash: true,
            speed: 500,
            speedAsDuration: true,
            easing: 'easeInOutCubic'
        })
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
                top:
                    document.getElementById(sectionId).getBoundingClientRect()
                        .top + window.scrollY,
                bottom:
                    document.getElementById(sectionId).getBoundingClientRect()
                        .bottom + window.scrollY
            }
        }
        this.setState({ sections })
        this.highlightCurrent()
    }

    highlightCurrent = () => {
        const range = []
        const scrollDown = this.state.lastScroll > window.scrollY
        if (scrollDown) {
            range[0] = window.scrollY + window.innerHeight * 0
            range[1] = window.scrollY + window.innerHeight * 0.5
        } else {
            range[0] = window.scrollY + window.innerHeight * 0.5
            range[1] = window.scrollY + window.innerHeight * 1
        }
        const sectionIds = Object.keys(this.state.sections)
        for (let i = 0; i < sectionIds.length; i++) {
            const id = sectionIds[i]
            let inView
            if (scrollDown) {
                inView =
                    this.state.sections[id].top > range[0] &&
                    this.state.sections[id].top < range[1]
            } else {
                inView =
                    this.state.sections[id].bottom > range[0] &&
                    this.state.sections[id].bottom < range[1]
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
            Number(
                window
                    .getComputedStyle(document.getElementsByTagName('html')[0])
                    .getPropertyValue('font-size')
                    .replace('px', '')
            )
        if (window.innerWidth > 640) {
            if (
                window.scrollY >= window.innerHeight - pageFrame &&
                !this.state.fixed
            ) {
                this.setState({ fixed: true })
            } else if (
                window.scrollY < window.innerHeight - pageFrame &&
                this.state.fixed
            ) {
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

    render() {
        return (
            <StyledMenu fixed={this.state.fixed} data-scroll-header>
                <StyledContainer>
                    <StyledLogo to={'#'} title="Back to homepage">
                        <OceanLogo />
                    </StyledLogo>
                    <StyledNav>
                        {MenuItems.map(item => (
                            <StyledMenuItem
                                current={
                                    item.href.replace('#', '') ===
                                    this.state.current
                                }
                                key={item.name}
                            >
                                <a href={item.href}>
                                    {item.name}
                                    {item.sub && <Caret />}
                                </a>

                                {item.sub && (
                                    <SubMenu
                                        item={item}
                                        current={this.state.current}
                                    />
                                )}
                            </StyledMenuItem>
                        ))}
                    </StyledNav>
                    <Hamburger
                        active={this.state.active}
                        onClick={this.toggleMobileMenu}
                    />
                    <StyledMobileNav active={this.state.active}>
                        {MenuItems.map(item => (
                            <StyledMenuItem key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={this.toggleMobileMenu}
                                >
                                    {item.name}
                                </a>
                            </StyledMenuItem>
                        ))}
                    </StyledMobileNav>
                </StyledContainer>
            </StyledMenu>
        )
    }
}

export default Menu
