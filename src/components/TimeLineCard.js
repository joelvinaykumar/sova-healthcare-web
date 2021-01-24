import React from 'react';
import styled from 'styled-components';

import { Text } from '../components';
import { lightTheme } from '../utils/theme';

export const TimeLineCard = ({ index, icon, title }) => {
  
  return (
    <Container
    >
      <Index>
        <Text
          color="white"
          size={22}
          family="Avenir"
        >
          {index}
        </Text>
      </Index>
      <Icon>
        <img src={icon} width={50} alt="timeline-icon" />
      </Icon>
      <Text
        color={lightTheme.text.h1}
        size={20}
        lineHeight={25}
        family="Avenir"
        style={{ opacity: 0.8 }}
      >
        {title}
      </Text>
    </Container>
  )
};

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
`;

const Index = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${lightTheme.button.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  z-index: 1;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.15rem black);
  margin-bottom: 20px;
`;