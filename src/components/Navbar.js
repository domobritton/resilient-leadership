import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Media } from './Media';
import { WidthWrapper } from './styles';
import resilientLogo from '../img/resilient-leadership.png';
import Burger from './Burger';
import Menu from './Menu';

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #14213d;
  z-index: 50;
`;

const Wrapper = styled(WidthWrapper)`
  min-height: 55px;
`;

const HeaderBar = styled.div`
  padding: 10px 0;
  background-color: #14213d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ResilientLogo = styled(Link)``;

const ResilientImage = styled.img`
  height: auto;
  width: 176px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  z-index: 3;
`;

const List = styled.ul`
  &:not(:last-child) {
    margin-right: 22px;
  }
`;

const ListItem = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  font-family: Oswald;
  color: #e7e7e7;
  margin-right: 22px;
  cursor: pointer;
`;

const DropDownItem = styled.span`
  font-family: Oswald;
  font-size: 1.4rem;
  font-weight: 300;

  &:after {
    display: inline-block;
    vertical-align: middle;
    content: '';
    width: 5px;
    height: 5px;
    transform: rotate(135deg);
    white-space: nowrap;
    border-right: 1px solid;
    border-top: 1px solid;
    margin-left: 4px;
  }
`;

const DropDownSubmenu = styled.ul`
  position: absolute;
  background-color: #14213d;
  left: 50%;
  transform: translate(-50%, 100%);
  display: none;
  text-align: left;
  padding: 10px 15px;
  box-shadow: 0 0 5px rgb(0 0 0 / 10%);
  list-style-type: none;
`;

const DropDownListItem = styled(ListItem)`
  &:hover ${DropDownSubmenu} {
    display: block;
    position: absolute;
    background-color: #14213d;
    transform: translate(-50%, 0%);
  }
`;

const DropDownSubmenuListItem = styled.li`
  padding: 5px 0;

  > a {
    white-space: nowrap;
  }
`;

const linkStyle = css`
  font-family: 'Quattrocento';
  font-weight: normal;
  font-size: 2.2rem;
  letter-spacing: 0rem;
  line-height: 1.6;
  text-transform: none;
`;

const topNavLinkStyle = css`
  margin-right: 0;
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
      <a
        href='https://academy.resilientleadership.us'
        css={linkStyle}
        onClick={(e) => handleClose(e)}
      >
        Courses
      </a>
      <Link to='/about' css={linkStyle} onClick={(e) => handleClose(e)}>
        About
      </Link>
      <Link to='/contact' css={linkStyle} onClick={(e) => handleClose(e)}>
        Contact
      </Link>
    </Links>
  );
  return (
    <Header>
      <Wrapper>
        <HeaderBar>
          <ResilientLogo to='/' title='Resilient Leadership'>
            <ResilientImage src={resilientLogo} alt='Resilient Leadership' />
          </ResilientLogo>
          <Nav>
            <Media greaterThanOrEqual='lg'>
              <List>
                <DropDownListItem>
                  <div>
                    <DropDownItem>Services</DropDownItem>
                    <DropDownSubmenu className='sub-menu'>
                      <DropDownSubmenuListItem>
                        <Link to='/executive-coaching'>Executive Coaching</Link>
                      </DropDownSubmenuListItem>
                      <DropDownSubmenuListItem>
                        <Link to='/team-coaching'>Team Coaching</Link>
                      </DropDownSubmenuListItem>
                      <DropDownSubmenuListItem>
                        <Link to='/organization-development'>
                          Change Management
                        </Link>
                      </DropDownSubmenuListItem>
                      <DropDownSubmenuListItem>
                        <Link to='/360-feedback'>360˚ Feedback</Link>
                      </DropDownSubmenuListItem>
                      <DropDownSubmenuListItem>
                        <Link to='/surveys-assessments'>
                          Surveys & Assessments
                        </Link>
                      </DropDownSubmenuListItem>
                      <DropDownSubmenuListItem>
                        <a href='https://academy.resilientleadership.us'>
                          Courses
                        </a>
                      </DropDownSubmenuListItem>
                    </DropDownSubmenu>
                  </div>
                </DropDownListItem>
                <ListItem>
                  <Link to='/about'>About</Link>
                </ListItem>
                <ListItem css={topNavLinkStyle}>
                  <Link to='/contact'>Contact</Link>
                </ListItem>
              </List>
            </Media>
            <Media lessThan='lg'>
              <Burger open={open} setOpen={setOpen} />
            </Media>
          </Nav>
        </HeaderBar>
      </Wrapper>
      <Media lessThan='lg'>
        <Menu open={open} setOpen={setOpen} menuItems={menuItems} />
      </Media>
    </Header>
  );
};

export default Navbar;
