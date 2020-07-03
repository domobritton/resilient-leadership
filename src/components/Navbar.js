import React from 'react';
import { Link } from 'gatsby';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import logo from '../img/logo.png';

const animateMenu = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0%, 0);
  }
`;

const animateOut = keyframes`
  0% {
    transform: translate3d(0, 0%, 0);
  }
  100% {
    transform: translate3d(0, -100%, 0);
  }
`;

const Nav = styled.nav`
  background-color: #ffffff;
  position: relative;
  z-index: 30;
  min-height: 3.25rem;
  @media (min-width: 1025px) {
    display: flex;
    align-items: stretch;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1250px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: none;
  @media (max-width: 1250px) {
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

const Burger = styled.div`
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  > span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const NavBarMenu = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  box-shadow: 0 8px 16px rgba(43, 37, 35, 0.1);
  @media (max-width: 1250px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 1250px) {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(43, 37, 35, 0.1);
    padding: 0.5rem 0;
    display: block;
    position: absolute;
    z-index: 1;
    transform: translate3d(0, -100%, 0);
    &.is-active {
      animation: ${animateMenu} forwards 750ms ease-in-out;
    }
    &.is-not-active {
      animation: ${animateOut} forwards 750ms ease-in-out;
    }
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1em;
  @media (max-width: 1250px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;
  @media (max-width: 1250px) {
    display: flex;
    padding: 0 1em;
    transform: translate3d(0, -100%, 0);
    &.is-active {
      animation: ${animateMenu} forwards 750ms ease-in-out;
    }
    &.is-not-active {
      animation: ${animateOut} forwards 750ms ease-in-out;
    }
  }
`;

const StyledMobileResilient = styled(Link)`
  display: flex;
  @media (max-width: 1250px) {
    display: none;
  }
`;

const titleStyle = css`
  display: flex;
`;

const linkStyle = css`
  font-size: 1em;
  font-weight: 700;
  color: #4a4a4a;
  cursor: pointer;
  @media (max-width: 1250px) {
    padding: 0.5rem 0;
  }
`;
const Menu = () => (
  <Links>
    <Link to='/executive-coaching' css={linkStyle}>
      Executive Coaching
    </Link>
    <Link to='/team-coaching' css={linkStyle}>
      Team Coaching
    </Link>
    <Link to='/organization-development' css={linkStyle}>
      Change Management
    </Link>
    <StyledMobileResilient to='/' title='Resilient Leadership'>
      <img src={logo} alt='Resilient Leadership' style={{ width: '300px' }} />
    </StyledMobileResilient>
    <Link to='/360-feedback' css={linkStyle}>
      360˚ Feedback
    </Link>
    <Link to='/surveys-assessments' css={linkStyle}>
      Surveys & Assessments
    </Link>
    <Link to='/about' css={linkStyle}>
      About
    </Link>
    <Link to='/contact' css={linkStyle}>
      Contact
    </Link>
  </Links>
);

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: 'is-not-active',
            });
      }
    );
  };
  render() {
    return (
      <>
        <Nav role='navigation' aria-label='main-navigation'>
          <Container>
            {/* Hamburger menu */}
            <Wrapper>
              <Link to='/' title='Logo' css={titleStyle}>
                <img
                  src={logo}
                  alt='Resilient Leadership'
                  style={{ height: 40 }}
                />
              </Link>
              <Burger
                className={`${this.state.navBarActiveClass}`}
                data-target='navMenu'
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </Burger>
            </Wrapper>
            <NavBarMenu>
              <MenuWrapper>
                <Menu />
              </MenuWrapper>
            </NavBarMenu>
          </Container>
        </Nav>
        <MobileMenu id='navMenu' className={`${this.state.navBarActiveClass}`}>
          <MobileMenuWrapper className={`${this.state.navBarActiveClass}`}>
            <Menu />
          </MobileMenuWrapper>
        </MobileMenu>
      </>
    );
  }
};

export default Navbar;
