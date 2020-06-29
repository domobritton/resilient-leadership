import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import logo from '../img/logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

import { FlexRow } from './styles';

const StyledMobileResilient = styled(Link)`
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

const footerStyle = css`
  background-color: #252525;
  color: #ffffff;
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
  padding: 0.5em 0.5em 0.3em 0.5em;
  border-radius: 1em;
  background-color: whitesmoke;
  margin: 0.5em;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  display: inline;
`;

const MenuList = styled.ul`
  font-size: 1em;
  line-height: 1.25;
  list-style: none;
  width: 100%;
  text-align: left;
  a {
    border-radius: 2px;
    color: whitesmoke;
    display: block;
    padding: 0.5em 0.75em;
    cursor: pointer;
    line-height: 1.5;
    &:hover {
      background-color: #fafafa;
      color: #252525;
    }
  }
`;

const Footer = class extends React.Component {
  render() {
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
                    <Link to='/organization-development'>
                      Change Management
                    </Link>
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
                  <li>
                    <a href='/admin/' target='_blank' rel='noopener noreferrer'>
                      Admin
                    </a>
                  </li>
                </MenuList>
            </Column>
            <Column>
              <Social title='facebook' href='https://facebook.com'>
                <img
                  src={facebook}
                  alt='Facebook'
                  style={{ width: '1em', height: '1em' }}
                />
              </Social>
              <Social title='twitter' href='https://twitter.com'>
                <img
                  className='fas fa-lg'
                  src={twitter}
                  alt='Twitter'
                  style={{ width: '1em', height: '1em' }}
                />
              </Social>
              <Social title='instagram' href='https://instagram.com'>
                <img
                  src={instagram}
                  alt='Instagram'
                  style={{ width: '1em', height: '1em' }}
                />
              </Social>
              <Social title='vimeo' href='https://vimeo.com'>
                <img
                  src={vimeo}
                  alt='Vimeo'
                  style={{ width: '1em', height: '1em' }}
                />
              </Social>
            </Column>
          </FlexRow>
        </Container>
      </footer>
    );
  }
};

export default Footer;
