import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { HeroTitleBox, HeroTitle, HeroSubtitle } from '../styles';

const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 500px;
  @media (max-width: 650px) {
    height: calc(100vh - 80px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(76, 59, 77, 0.1);
`;

const Hero = ({ image, title, subtitle, alt }) => {
  const [minwidth, setMinWidth] = useState(0);
  const handleZoom = () => {
    let scroll = window.scrollY;
    const e = document.getElementsByClassName('hero')[0];
    if (e && window.innerWidth > 650) {
      const elementTop = e.offsetTop;
      console.log(elementTop, scroll);
      if (scroll > elementTop && scroll < 500) {
        e.style.width = `${
          window.innerWidth * (1 + (scroll - elementTop) / window.innerWidth)
        }px`;
      }
      if (scroll <= elementTop) {
        e.style.width = window.innerWidth;
      }
    }
  };

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      window.addEventListener('scroll', handleZoom);
    }
    return () => window.removeEventListener('scroll', handleZoom);
  }, []);

  const handleResize = () => {
    setMinWidth(window.innerWidth)
  }

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [minwidth]);

  return (
    <HeroWrapper>
      <Overlay />
      <Img
        id='hero'
        style={{
          position: 'absolute',
        }}
        className='vh-57 center hero'
        fluid={image.childImageSharp.fluid}
        alt={alt}
        css={css`
          width: 100%;
          ${minwidth > 0 && `min-width: ${minwidth}px;`}
          height: 500px;
          z-index: -2;
          transition: height 9999999s;
          @media (max-width: 650px) {
            min-height: 100%;
          }
        `}
      />
      <HeroTitleBox>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && (
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
    </HeroWrapper>
  );
};

export default Hero;
