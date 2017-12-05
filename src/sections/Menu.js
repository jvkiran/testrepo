import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import smoothScroll from '../lib/smoothScroll'
import oceanLogo from '../assets/logos/ocean-logo.svg'
import Hamburger from '../components/Hamburger'
import { colors, fonts, responsive, transitions, layout } from '../styles'

const StyledMenu = styled.div`
  background: rgb(${colors.black});
  transition: transform 0.3s ease-in-out;
  transform: ${({ fixed }) => (fixed ? 'translate3d(0,100px,0)' : 'translate3d(0,0,0)')};
  padding: 0.75rem 1rem;
  z-index: 5;
  @media screen and (${responsive.sm.min}) {
    position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
    width: calc(100% - (${layout.pageFrame} * 2));
    top: ${({ fixed }) => (fixed ? '0' : 'auto')};
    left: ${layout.pageFrame};
    right: ${layout.pageFrame};
    margin: ${({ fixed }) => (fixed ? '-100px 0' : '1.5rem 0 0 0')};
    border-top: ${({ fixed }) => (fixed ? `${layout.pageFrame} solid #fff` : '0')};
  }
  @media screen and (${responsive.sm.max}) {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.div`
  height: 60px;
  z-index: 10;
  margin-left: 20px;
  & img {
    height: 100%;
  }
`

const StyledMenuItem = styled.a`
  transition: ${transitions.base};
  color: ${({ current }) => (current ? `rgba(${colors.white}, 1)` : `rgba(${colors.white}, 0.7)`)};
  font-family: ${fonts.family.button};
`

const animation = keyframes`${fadeIn}`

const StyledNav = styled.nav`
  text-transform: uppercase;
  text-align: right;
  color: rgb(${colors.white});
  animation: 1s ${animation} 1.2s backwards;

  & a {
    display: inline-block;
    margin-right: 2rem;

    &:hover,
    &:focus,
    &.active {
      color: rgba(${colors.white}, 1);
    }
  }

  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`

const StyledMobileNav = styled.div`
  background: rgb(${colors.black});
  position: fixed;
  display: none;
  height: ${({ active }) => (active ? '100vh' : '0')};
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  color: rgb(${colors.white});
  padding: 2rem;
  font-size: 2rem;
  transition: ${transitions.long};
  & a {
    margin: 0.5rem 0;
  }
  @media screen and (${responsive.sm.max}) {
    display: flex;
    opacity: ${({ active }) => (active ? '1' : '0')};
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  }
`

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
        name: 'Team',
        href: '#team'
    },
    {
        name: 'Blog',
        href: '#blog'
    }
]

class Menu extends Component {
  state = {
      active: false,
      fixed: false,
      sections: {},
      current: '',
      lastScroll: window.scrollY
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
      Number(
          window
              .getComputedStyle(document.getElementsByTagName('html')[0])
              .getPropertyValue('font-size')
              .replace('px', '')
      )
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

  onSmoothScroll = e => {
      if (e.target.getAttribute('href').indexOf('#') !== -1) {
          e.preventDefault()
          if (this.state.active) this.toggleMobileMenu()
          smoothScroll(e)
      }
  }

  render = () => (
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
  );
}

export default Menu
