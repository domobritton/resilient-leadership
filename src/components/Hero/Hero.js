import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { css, keyframes } from '@emotion/core';

import { HeroTitleBox, HeroTitle, HeroSubtitle, WidthWrapper } from '../styles';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(20, 33, 61, 0.65);
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
  align-items: left;
  flex-direction: column;
  width: 400px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Hero = ({ image, title, subtitle, alt, homepage = false }) => {
  const HeroWrapper = styled.section`
    position: relative;
    padding: 180px 0;
    overflow: hidden;
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
      <WidthWrapper>
        <HeroTextWrapper>
          <HeroTitleBox>
            <Fade delay={1000}>
              <HeroTitle>{title}</HeroTitle>
            </Fade>
            <Fade delay={1500}>
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
            </Fade>
          </HeroTitleBox>
        </HeroTextWrapper>
      </WidthWrapper>
      <div
        style={{
          height: 150,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M0.00,49.99 C45.71,222.54 360.04,38.00 500.56,113.00 L500.00,150.00 L0.00,150.00 Z'
            style={{
              stroke: 'none',
              fill: `${homepage ? '#dfb860' : '#f9f6ef'}`,
            }}
          ></path>
        </svg>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
