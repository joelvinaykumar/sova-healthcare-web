import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../utils/theme';

export const FloatingButton = () => (
  <Circle>
    <svg viewBox="0 0 23 23.36" fill={lightTheme.button.secondary} width="26px" height="26px"><path d="M22.81,9.41a11.49,11.49,0,1,0-7.47,12.93.47.47,0,0,1,.3,0l3.05,1a1,1,0,0,0,1.3-1V19.42a.48.48,0,0,1,.13-.32,11.63,11.63,0,0,0,1.3-1.79A11.47,11.47,0,0,0,22.81,9.41ZM7.5,12.5a1,1,0,1,1,1-1A1,1,0,0,1,7.5,12.5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,11.5,12.5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,15.5,12.5Z"></path></svg>
  </Circle>
)

const Circle = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.background.primary};
`;