import React from 'react';
import PropTypes, { bool } from 'prop-types';
import styled from '@emotion/styled';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
`;

const Menu = ({ open, menuItems }) => {
  return <StyledMenu open={open}>{menuItems}</StyledMenu>;
};

Menu.propTypes = {
  open: bool.isRequired,
  menuItems: PropTypes.object,
};

export default Menu;
