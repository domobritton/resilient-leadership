import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import logo from '../img/logo.png';
import Burger from './Burger';
import Menu from './Menu';

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
  box-shadow: 0 8px 16px rgba(43, 37, 35, 0.1);
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
  @media (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavBarMenu = styled.div`
  padding: 0 1em;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    background-color: #ffffff;
    padding: 0.5rem 0;
    display: block;
    position: absolute;
    z-index: 1;
    transform: translate3d(0, -100%, 0);
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    padding: 0 1em;
    transform: translate3d(0, -100%, 0);
  }
`;

const ResilientLogo = styled(Link)`
  display: flex;
  flex: 2 0 0;
  padding: 0.25rem 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 43px;
  @media (max-width: 420px) {
    height: 35px;
  }
`;

const DesktopWrapper = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  line-height: 51px;
  align-items: center;
  flex: 1 0 0;
  min-width: 375px;
  li:hover {
    background-color: #dce0d9;
  }
  li.drop-down:hover {
    > ul {
      display: inline-block;
    }
  }
`;

const ListItem = styled.li`
  padding: 0 1rem;
`;

const DropDown = styled.ul`
  display: none;
  position: absolute;
  top: 51px;
  right: 0;
  white-space: nowrap;
  background-color: #ffffff;
`;

const titleStyle = css`
  display: flex;
`;

const linkStyle = css`
  font-size: 1em;
  font-weight: 700;
  color: #4a4a4a;
  cursor: pointer;
  letter-spacing: 0.25rem;
  text-decoration: none;
  display: inline-block;
  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const menuItems = (
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

const desktopItems = (
  <Links>
    <ResilientLogo to='/' title='Resilient Leadership'>
      <Image src={logo} alt='Resilient Leadership' />
    </ResilientLogo>
    <DesktopWrapper>
      <ListItem
        className='drop-down'
        css={[linkStyle, { position: 'relative' }]}
      >
        Services +
        <DropDown>
          <ListItem>
            <Link to='/executive-coaching' css={linkStyle}>
              Executive Coaching
            </Link>
          </ListItem>
          <ListItem>
            <Link to='/team-coaching' css={linkStyle}>
              Team Coaching
            </Link>
          </ListItem>
          <ListItem>
            <Link to='/organization-development' css={linkStyle}>
              Change Management
            </Link>
          </ListItem>
          <ListItem>
            <Link to='/360-feedback' css={linkStyle}>
              360˚ Feedback
            </Link>
          </ListItem>
          <ListItem>
            <Link to='/surveys-assessments' css={linkStyle}>
              Surveys & Assessments
            </Link>
          </ListItem>
        </DropDown>
      </ListItem>
      <ListItem>
        <Link to='/about' css={linkStyle}>
          About
        </Link>
      </ListItem>
      <ListItem
        css={css`
          padding-right: 0px;
        `}
      >
        <Link to='/contact' css={linkStyle}>
          Contact
        </Link>
      </ListItem>
    </DesktopWrapper>
  </Links>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const animation = open ? animateMenu : animateOut;
  const animationStyle = css`
    animation: ${animation} forwards 750ms ease-in-out;
  `;

  return (
    <>
      <Nav role='navigation' aria-label='main-navigation'>
        <Container>
          <Wrapper>
            <Link to='/' title='Logo' css={titleStyle}>
              <Image src={logo} alt='Resilient Leadership' />
            </Link>
            <Burger open={open} setOpen={setOpen} />
          </Wrapper>
          <NavBarMenu>{desktopItems}</NavBarMenu>
        </Container>
      </Nav>
      <MobileMenu css={animationStyle}>
        <MobileMenuWrapper css={animationStyle}>
          <Menu open={open} setOpen={setOpen} menuItems={menuItems} />
        </MobileMenuWrapper>
      </MobileMenu>
    </>
  );
};

export default Navbar;
