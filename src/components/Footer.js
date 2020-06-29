import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import logo from '../img/logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

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
        <div className='content has-text-centered'>
          <div className='container'>
            <div style={{ maxWidth: '100vw' }} className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link className='navbar-item' to='/executive-coaching'>
                        Executive Coaching
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/team-coaching'>
                        Team Coaching
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/360-feedback'>
                        360◦ Feedback
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/organization-development'>
                        Change Management
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/surveys-assessments'>
                        Surveys & Assessments
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <section>
                  <ul className='menu-list'>
                    <li>
                      <Link className='navbar-item' to='/'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/about'>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/contact'>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a
                        className='navbar-item'
                        href='/admin/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4 social'>
                <a title='facebook' href='https://facebook.com'>
                  <img
                    src={facebook}
                    alt='Facebook'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title='twitter' href='https://twitter.com'>
                  <img
                    className='fas fa-lg'
                    src={twitter}
                    alt='Twitter'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title='instagram' href='https://instagram.com'>
                  <img
                    src={instagram}
                    alt='Instagram'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title='vimeo' href='https://vimeo.com'>
                  <img
                    src={vimeo}
                    alt='Vimeo'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
