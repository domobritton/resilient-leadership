import React, { useLayoutEffect } from 'react';
import PropTypes, { bool } from 'prop-types';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const opacityOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: fixed;
  z-index: 2;
  top: 0;
  transition: transform 500ms ease-in-out;
  transform: ${({ open }) =>
    open
      ? `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
      : `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`};
  transform-style: preserve-3d;
  transform-origin: 7vw 60px;
  animation: ${({ open }) => open ? css`${opacityIn} 500ms ease-out forwards` : css`${opacityOut} 500ms ease-out forwards`};
`;

const useLockBodyScroll = (open) => {
  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      const originalStyle = window.getComputedStyle(document.body).overflow;

      if (open) {
        document.documentElement.style.overflowY = 'hidden';
      }

      return () => (document.documentElement.style.overflowY = originalStyle);
    }
  }, [open]);
};

const Menu = ({ open, menuItems }) => {
  useLockBodyScroll(open);
  return <StyledMenu open={open} role='navigation' aria-label='main-navigation'>{menuItems}</StyledMenu>;
};

Menu.propTypes = {
  open: bool.isRequired,
  menuItems: PropTypes.object,
};

export default Menu;
