import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { FlexWithDirection, WidthWrapper } from './styles';

const footerStyle = css`
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #14213d;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Social = styled.a`
  border-radius: 1em;
  margin: 0.5em;
  display: inline;
  > svg > path {
    fill: #dfb860;
  }
`;

const MenuList = styled.ul`
  font-size: 1.5rem;
  line-height: 1.65;
  list-style: none;
  width: 100%;
  text-align: left;
  a {
    font-family: 'Quattrocento';
    font-size: 1.6rem;
    font-weight: normal;
    letter-spacing: 0rem;
    text-transform: none;
    line-height: 1.65;
    color: #ffffff;
  }
`;

const ListItem = styled.li`
  svg {
    color: #dfb860;
    padding-right: 15px;
  }
`;

const ColumnTitle = styled.h3`
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 0rem;
  text-transform: none;
  line-height: 1.4;
  color: #ffffff;
  margin-bottom: 2.5rem;
`;

const Recaptcha = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 32px;
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <WidthWrapper>
        <Container>
          <FlexWithDirection>
            <Column>
              <MenuList>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/executive-coaching'>Executive Coaching</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/team-coaching'>Team Coaching</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/360-feedback'>360◦ Feedback</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/organization-development'>Change Management</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/surveys-assessments'>Surveys & Assessments</Link>
                </ListItem>
              </MenuList>
            </Column>
            <Column>
              <MenuList>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <a href='https://academy.resilientleadership.us'>Courses</a>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/'>Home</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/about'>About</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <Link to='/contact'>Contact</Link>
                </ListItem>
                <ListItem>
                  <FontAwesomeIcon icon={faAngleRight} />
                  <a
                    href='https://www.iubenda.com/privacy-policy/83253436'
                    title='Privacy Policy'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Privacy Policy
                  </a>
                  <script
                    type='text/javascript'
                    dangerouslySetInnerHTML={{
                      __html:
                        '(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);',
                    }}
                  />
                </ListItem>
                {/* <li>
                <a href='/admin/' target='_blank' rel='noopener noreferrer'>
                  Admin
                </a>
              </li> */}
              </MenuList>
            </Column>
            <Column
              css={css`
                text-align: right;
              `}
            >
              <ColumnTitle>Connect with us</ColumnTitle>
              <Social
                title='facebook'
                href='https://www.facebook.com/resilientleadershipcoaching'
                target='__blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </Social>
              <Social
                title='linkedIn'
                href='https://www.linkedin.com/in/charlene-e-wilson-m-a-acc-8114283/'
                target='__blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </Social>
              <Recaptcha id='footer-recaptcha' />
            </Column>
          </FlexWithDirection>
        </Container>
      </WidthWrapper>
    </footer>
  );
};

export default Footer;
