import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Slide from 'react-reveal/Slide';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { HeroTitleBox, HeroTitle, HeroSubtitle } from '../styles';
import Navbar from '../Navbar';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(76, 59, 77, 0.25);
`;

const kenburns = keyframes`
  0% {
    transform: scale3d(1, 1, 1) translate3d(0%, 0%, 0%);
  }
  100% {
    transform: scale3d(1.5, 1.5, 1.5) translate3d(-10%, 10%, 0);
  }
`;

const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 6.25rem;
  width: 100%;
`;

const Nav = styled.nav``;

const DesktopMenuList = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  li > a:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #808f85;
    top: 100%;
    left: 0;
  }
  li {
    a {
      position: relative;
      color: #ffffff;
    }
  }
  li:hover {
    > a {
      color: #ffffff;
    }
    > div {
      width: 100%;
    }
    :after {
      background-color: #fba100;
    }
  }
`;

const ListItem = styled.li`
  padding: 0 1rem;
`;

const linkStyle = css`
  font-size: 1.75em;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  letter-spacing: 0.25rem;
  text-decoration: none;
  display: inline-block;
  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.15em;
  }
  &:hover {
    color: #ffffff;
  }
`;

const UnderLine = styled.div`
  height: 4px;
  width: 0%;
  will-change: width;
  background-color: #fba100;
  position: relative;
  transition: all 400ms;
`;

const Hero = ({ image, title, subtitle, alt, homepage = false }) => {
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const HeroWrapper = styled.section`
    position: relative;
    width: 100vw;
    overflow: hidden;
    height: 700px;
    ${homepage &&
    css`
      @media (max-width: 650px) {
        height: calc(100vh - 80px);
      }
    `}
  `;

  const handleClick = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = null;
    }, 100);
  };

  useEffect(() => {
    const client = typeof window !== 'undefined';
    if (client && window.location.pathname === '/') {
      setIsHome(true);
    }
    if (client && window.location.pathname === '/about') {
      setIsAbout(true);
    }
    if (client && window.location.pathname === '/contact') {
      setIsContact(true);
    }
  }, []);

  return (
    <HeroWrapper>
      <Overlay />
      <Navbar />
      <Img
        id='hero'
        style={{
          position: 'absolute',
        }}
        fluid={image.childImageSharp.fluid}
        alt={alt}
        css={css`
          width: 100%;
          height: 751px;
          z-index: -2;
          top: 0;
          left: 0;
          transition: height 9999999s;
          ${homepage &&
          css`
            animation: ${kenburns} 40s ease-out forwards;
            @media (max-width: 650px) {
              min-height: 100%;
            }
          `}
        `}
      />
      <HeroTextWrapper>
        <HeroTitleBox>
          <HeroTitle>{title}</HeroTitle>
          {subtitle && homepage && (
            <HeroSubtitle
              css={css`
                > span:last-of-type > div {
                  display: none;
                }
              `}
            >
              {subtitle()}
            </HeroSubtitle>
          )}
        </HeroTitleBox>
        <Nav role='navigation' aria-label='main-navigation'>
          <DesktopMenuList>
            <Slide up>
              <ListItem onClick={handleClick}>
                {isHome ? (
                  <>
                    <a href='#services' css={linkStyle}>
                      Services
                    </a>
                    <UnderLine />
                  </>
                ) : (
                  <>
                    <Link to='/#services' css={linkStyle}>
                      Services
                    </Link>
                    <UnderLine />
                  </>
                )}
              </ListItem>
            </Slide>
            {!isAbout && (
              <Slide up delay={100}>
                <ListItem>
                  <Link to='/about' css={linkStyle}>
                    About
                  </Link>
                  <UnderLine />
                </ListItem>
              </Slide>
            )}
            {!isContact && (
              <Slide up delay={200}>
                <ListItem>
                  <Link to='/contact' css={linkStyle}>
                    Contact
                  </Link>
                  <UnderLine />
                </ListItem>
              </Slide>
            )}
          </DesktopMenuList>
        </Nav>
      </HeroTextWrapper>
    </HeroWrapper>
  );
};

export default Hero;
