import React from 'react';
import styled from 'styled-components';

export const Text = ({ color, children, size, lineHeight, letterSpacing, wordBreak, family, style }) => {
  return (
    <TextSpan 
      color={color}
      size={size}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      wordBreak={wordBreak}
      family={family}
      style={style}
    >
      {children}
    </TextSpan>
  )
};

const TextSpan = styled.span`
  color: ${({ color }) => `${color}`};
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  word-break: ${({ wordBreak }) => `${wordBreak}`};
  font-family: ${({ family }) => `${family}`};
`;