import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Media } from './Media';
import logo from '../img/logo.png';
import Burger from './Burger';
import Menu from './Menu';

const NavWrapper = styled.div`
  padding-top: 3rem;
  position: relative;
  z-index: 10;
  @media (min-width: 1025px) {
    padding-top: 4rem;
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
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const ResilientLogo = styled(Link)`
`;

const Image = styled.img`
  width: 100%;
  max-width: 450px;

  @media (max-width: 1024px) {
    width: 70vw;
    max-width: 300px;
  }
`;

const linkStyle = css`
  font-size: 1em;
  font-weight: 700;
  color: #4c3b4d;
  cursor: pointer;
  letter-spacing: 0.25rem;
  text-decoration: none;
  display: inline-block;
  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.15em;
  }
`;

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
      <Link
        to='/executive-coaching'
        css={linkStyle}
        onClick={(e) => handleClose(e)}
      >
        Executive Coaching
      </Link>
      <Link to='/team-coaching' css={linkStyle} onClick={(e) => handleClose(e)}>
        Team Coaching
      </Link>
      <Link
        to='/organization-development'
        css={linkStyle}
        onClick={(e) => handleClose(e)}
      >
        Change Management
      </Link>
      <Link to='/360-feedback' css={linkStyle} onClick={(e) => handleClose(e)}>
        360˚ Feedback
      </Link>
      <Link
        to='/surveys-assessments'
        css={linkStyle}
        onClick={(e) => handleClose(e)}
      >
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
      <NavWrapper>
        <Container>
          <Media lessThan='md'>
            <Wrapper>
              <Burger open={open} setOpen={setOpen} />
              <Link to='/' title='Logo'>
                <Image src={logo} alt='Resilient Leadership' />
              </Link>
            </Wrapper>
          </Media>
          <Media greaterThanOrEqual='md'>
            <Links>
              <ResilientLogo to='/' title='Resilient Leadership'>
                <Image src={logo} alt='Resilient Leadership' />
              </ResilientLogo>
            </Links>
          </Media>
        </Container>
      </NavWrapper>
      <Media lessThan='md'>
        <Menu open={open} setOpen={setOpen} menuItems={menuItems} />
      </Media>
    </header>
  );
};

export default Navbar;
