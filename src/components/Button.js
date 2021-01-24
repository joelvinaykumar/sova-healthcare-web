import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../utils/theme';

export const PrimaryButton = ({ width, height, color, backgroundColor, borderRadius, disabled, children, href }) => {
  return (
    <PrimaryBtn
      href={href}
      width={width}
      height={height}
      color={color}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {children}
    </PrimaryBtn>
  )
};

export const OutlineButton = ({ width, height, color, disabled, children, href }) => {
  return (
    <OutlineBtn
      href={href}
      width={width}
      height={height}
      color={color}
      disabled={disabled}
    >
      {children}
    </OutlineBtn>
  )
};

const PrimaryBtn = styled.a`  
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  color: ${({ color }) => `${color}`};
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-decoration: none;
  text-align: center;
  transition: all ease-in 0.2s;

  &:hover {
    background-color: ${lightTheme.button.secondary};
  }
`;

const OutlineBtn = styled.a`  
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  color: ${({ color }) => `${color}`};
  border: 2px solid ${({ color }) => `${color}`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 28px;
  text-decoration: none;
  transition: all ease-in 0.2s;
  text-align: center;

  &:hover {
    background-color: ${({ color }) => `${color}`};
  }
`;