import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { HeroTitleBox, HeroTitle, HeroSubtitle } from '../styles';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(76, 59, 77, 0.1);
`;

const kenburns = keyframes`
  0% {
    transform: scale3d(1, 1, 1) translate3d(0%, 0%, 0%);
  }
  100% {
    transform: scale3d(1.5, 1.5, 1.5) translate3d(-10%, 10%, 0);
  }
`;

const Hero = ({ image, title, subtitle, alt, homepage = false }) => {
  const HeroWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    overflow: hidden;
    height: 500px;
    ${homepage &&
    css`
      @media (max-width: 650px) {
        height: calc(100vh - 80px);
      }
    `}
  `;
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
          height: 500px;
          z-index: -2;
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
    </HeroWrapper>
  );
};

export default Hero;
