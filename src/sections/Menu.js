import React, { Component } from 'react';
import styled from 'styled-components';
import smoothScroll from 'smoothscroll';
import oceanLogo from '../assets/logos/ocean-logo.svg';
import Hamburger from '../components/Hamburger';
import { colors, responsive, transitions, layout } from '../styles';

const StyledMenu = styled.div`
  background: rgb(${colors.black});
  width: ${({ fixed }) => (fixed ? `calc(100 % - ${layout.pageFrame } * 2)` : '100%')};
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  top: ${({ fixed }) => (fixed ? '0' : 'auto')};
  left: ${({ fixed }) => (fixed ? `${layout.pageFrame}` : 'auto')};
  right: ${({ fixed }) => (fixed ? `${layout.pageFrame}` : 'auto')};
  padding: ${({ fixed }) => (fixed ? '10px 40px' : '20px')};
  z-index: 5;
  transition: ${transitions.long};
`;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.div`
  height: 44px;
  z-index: 10;
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
    margin-right: 20px;
  }

  @media screen and (${responsive.sm.max}) {
    display: none;
  }
`;

const StyledMobileToggle = styled.div`
  display: none;
  z-index: 10;
  @media screen and (${responsive.sm.max}) {
    display: block;
  }
`;

const StyledMobileNav = styled.div`
  background: rgb(${colors.black});
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
    if (window.innerWidth > 640) {
      if (window.scrollY >= window.innerHeight && !this.state.fixed) {
        this.setState({ fixed: true });
      } else if (window.scrollY < window.innerHeight && this.state.fixed) {
        this.setState({ fixed: false });
      }
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
            <a key={item.name} onClick={smoothScroll} href={item.href}>
              {item.name}
            </a>
          ))}
        </StyledNav>
        <StyledMobileToggle onClick={() => this.setState({ active: !this.state.active })}>
          <Hamburger />
        </StyledMobileToggle>
        <StyledMobileNav active={this.state.active}>
          {MenuItems.map(item => (
            <a key={item.name} onClick={smoothScroll} href={item.href}>
              {item.name}
            </a>
          ))}
        </StyledMobileNav>
      </StyledContainer>
    </StyledMenu>
  );
}

export default Menu;
