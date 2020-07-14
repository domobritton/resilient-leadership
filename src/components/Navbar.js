import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Media } from './Media';
import logo from '../img/logo.png';
import Burger from './Burger';
import Menu from './Menu';

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
    padding: 0.5rem 1rem;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
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

const ResilientLogo = styled(Link)`
  display: flex;
  padding: 0.25rem 0;
  max-width: 320px;
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
  min-width: 375px;
  max-width: 490px;
  flex: 1 0 0;
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
  position: relative;
  display: inline-flex;
  margin: 0 auto;
  right: 0.5rem;
  @media (max-width: 340px) {
    right: 0;
  }
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
    padding: 1rem 0;
    font-size: 1.15em;
  }
`;

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
      <ListItem>
        <Link to='/contact' css={linkStyle}>
          Contact
        </Link>
      </ListItem>
    </DesktopWrapper>
  </Links>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(
    (e) => {
      const path = e.target.pathname;
      const client = typeof window !== 'undefined';
      if (client && path && path === window.location.pathname) {
        setOpen(!open);
      }
    },
    [open]
  );

  const menuItems = (
    <Links>
      <Link to='/' css={linkStyle} onClick={(e) => handleClose(e)}>
        Home
      </Link>
      <Link to='/executive-coaching' css={linkStyle} onClick={(e) => handleClose(e)}>
        Executive Coaching
      </Link>
      <Link to='/team-coaching' css={linkStyle} onClick={(e) => handleClose(e)}>
        Team Coaching
      </Link>
      <Link to='/organization-development' css={linkStyle} onClick={(e) => handleClose(e)}>
        Change Management
      </Link>
      <Link to='/360-feedback' css={linkStyle} onClick={(e) => handleClose(e)}>
        360˚ Feedback
      </Link>
      <Link to='/surveys-assessments' css={linkStyle} onClick={(e) => handleClose(e)}>
        Surveys & Assessments
      </Link>
      <Link to='/about' css={linkStyle} onClick={(e) => handleClose(e)}>
        About
      </Link>
      <Link to='/contact' css={linkStyle} onClick={(e) => handleClose(e)}>
        Contact
      </Link>
    </Links>
  );
  return (
    <header>
      <Nav role='navigation' aria-label='main-navigation'>
        <Container>
          <Media lessThan='md'>
            <Wrapper>
              <Burger open={open} setOpen={setOpen} />
              <Link to='/' title='Logo' css={titleStyle}>
                <Image src={logo} alt='Resilient Leadership' />
              </Link>
            </Wrapper>
          </Media>
          <Media greaterThanOrEqual='md'>
            <NavBarMenu>{desktopItems}</NavBarMenu>
          </Media>
        </Container>
      </Nav>
      <Media lessThan='md'>
        <Menu open={open} setOpen={setOpen} menuItems={menuItems} />
      </Media>
    </header>
  );
};

export default Navbar;
