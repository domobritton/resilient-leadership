import React from 'react';
import { bool, func } from 'prop-types';
import styled from '@emotion/styled';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 1rem;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 2px;
    background: #fba100;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-of-type(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    :nth-of-type(2) {
      width: 32px;
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  const ariaLabel = open ? `close mobile menu` : `open mobile menu`
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} aria-label={ariaLabel}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
