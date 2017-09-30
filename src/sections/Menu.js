import React, { Component } from 'react';
import styled from 'styled-components';
import smoothScroll from '../lib/smoothScroll';
import oceanLogo from '../assets/logos/ocean-logo.svg';
import Hamburger from '../components/Hamburger';
import { colors, fonts, responsive, transitions, layout } from '../styles';

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
`;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.div`
  height: 60px;
  z-index: 10;
  margin-left: 20px;
  & img {
    height: 100%;
  }
`;

const StyledNav = styled.nav`
  text-transform: uppercase;
  text-align: right;
  color: rgb(${colors.white});
  & a {
    display: inline-block;
    margin-right: 2rem;
    color: rgba(${colors.white}, 0.8);
    font-family: ${fonts.family.button};

    &:hover,
    &:focus,
    &.active {
      color: rgba(${colors.white}, 1);
    }
  }

  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

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
    color: rgba(${colors.white}, 0.8);
    font-family: ${fonts.family.button};
  }
  @media screen and (${responsive.sm.max}) {
    display: flex;
    opacity: ${({ active }) => (active ? '1' : '0')};
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  }
`;

const MenuItems = [
  {
    name: 'Project',
    href: '#project'
  },
  {
    name: 'Whitepaper',
    href: '#documentation'
  },
  {
    name: 'Use Cases',
    href: '#usecases'
  },
  {
    name: 'Team',
    href: '#team'
  },
  {
    name: 'Blog',
    href: '#blog'
  }
];

class Menu extends Component {
  state = {
    active: false,
    fixed: false
  };
  componentDidMount() {
    document.addEventListener('scroll', this.toggleFixedMenu);
  }
  toggleFixedMenu = () => {
    const pageFrame =
      Number(layout.pageFrame.replace('rem', '')) *
      Number(
        window
          .getComputedStyle(document.getElementsByTagName('html')[0])
          .getPropertyValue('font-size')
          .replace('px', '')
      );
    if (window.innerWidth > 640) {
      if (window.scrollY >= window.innerHeight - pageFrame && !this.state.fixed) {
        this.setState({ fixed: true });
      } else if (window.scrollY < window.innerHeight - pageFrame && this.state.fixed) {
        this.setState({ fixed: false });
      }
    }
  };
  toggleMobileScroll = () => {
    if (this.state.active) {
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
    } else {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    }
  };
  toggleMobileMenu = () => {
    this.toggleMobileScroll();
    this.setState({ active: !this.state.active });
  };
  onSmoothScroll = e => {
    if (e.target.getAttribute('href').indexOf('#') !== -1) {
      e.preventDefault();
      if (this.state.active) this.toggleMobileMenu();
      smoothScroll(e);
    }
  };

  componentWillUnmount() {
    document.removeEventListener('scroll', this.toggleFixedMenu);
  }
  render = () => (
    <StyledMenu fixed={this.state.fixed}>
      <StyledContainer>
        <StyledLogo>
          <a href="/">
            <img src={oceanLogo} alt="Ocean" />
          </a>
        </StyledLogo>
        <StyledNav>
          {MenuItems.map(item => (
            <a key={item.name} onClick={this.onSmoothScroll} href={item.href}>
              {item.name}
            </a>
          ))}
        </StyledNav>
        <Hamburger active={this.state.active} onClick={this.toggleMobileMenu} />
        <StyledMobileNav active={this.state.active}>
          {MenuItems.map(item => (
            <a key={item.name} onClick={this.onSmoothScroll} href={item.href}>
              {item.name}
            </a>
          ))}
        </StyledMobileNav>
      </StyledContainer>
    </StyledMenu>
  );
}

export default Menu;
