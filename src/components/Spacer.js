import React from 'react';
import styled from 'styled-components';

export const Spacer = ({ size, horizontal, vertical }) => {
  return (
    <SpacerComponent 
      horizontal={horizontal}
      vertical={vertical}
      size={size}
    />
  )
};

const SpacerComponent = styled.div`
  height: ${({ vertical, size }) => vertical && `${size}px`};
  width: ${({ horizontal, size }) => horizontal && `${size}px`};
`;