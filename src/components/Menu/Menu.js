import React, { useLayoutEffect } from 'react';
import PropTypes, { bool } from 'prop-types';
import styled from '@emotion/styled';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  width: 100vw;
  height: calc(100vh - 51px);
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 51px;
  left: 0;
  transition: transform 500ms ease-in-out;
  transform: ${({ open }) =>
    open ? 'translate3d(0, 0, 0)' : 'translate3d(-120%, 0, 0)'};
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
  return <StyledMenu open={open}>{menuItems}</StyledMenu>;
};

Menu.propTypes = {
  open: bool.isRequired,
  menuItems: PropTypes.object,
};

export default Menu;
