import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/logo.png';

import { FlexRow } from './styles';

const StyledMobileResilient = styled(Link)`
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

const footerStyle = css`
  padding: 3rem 0rem 1rem;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  text-align: center;
`;

const Column = styled.div`
  width: 33%;
  padding: 0.75rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Social = styled.a`
  border-radius: 1em;
  margin: 0.5em;
  display: inline;
  > svg > path {
    fill: #fba100;
  }
`;

const MenuList = styled.ul`
  font-size: 1em;
  line-height: 1.25;
  list-style: none;
  width: 100%;
  text-align: left;
  a {
    border-radius: 2px;
    color: #252525;
    display: block;
    padding: 0.5em 0.75em;
    cursor: pointer;
    line-height: 1.5;
    &:hover {
      background-color: #dce0d9;
    }
  }
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <StyledMobileResilient to='/' title='Resilient Leadership'>
        <img
          src={logo}
          alt='Resilient Leadership'
          style={{ width: 300, height: 43 }}
        />
      </StyledMobileResilient>
      <Container>
        <FlexRow>
          <Column>
            <MenuList>
              <li>
                <Link to='/executive-coaching'>Executive Coaching</Link>
              </li>
              <li>
                <Link to='/team-coaching'>Team Coaching</Link>
              </li>
              <li>
                <Link to='/360-feedback'>360◦ Feedback</Link>
              </li>
              <li>
                <Link to='/organization-development'>Change Management</Link>
              </li>
              <li>
                <Link to='/surveys-assessments'>Surveys & Assessments</Link>
              </li>
            </MenuList>
          </Column>
          <Column>
            <MenuList>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              {/* <li>
                <a href='/admin/' target='_blank' rel='noopener noreferrer'>
                  Admin
                </a>
              </li> */}
            </MenuList>
          </Column>
          <Column>
            <Social
              title='facebook'
              href='https://facebook.com'
              target='__blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </Social>
            <Social
              title='linkedIn'
              href='https://twitter.com'
              target='__blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </Social>
          </Column>
        </FlexRow>
      </Container>
    </footer>
  );
};

export default Footer;
