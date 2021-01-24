import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text } from '../../../components';
import XMark from '../../../assets/icons/cross.webp';

export const RedefineSection = () => {

  const cardList = [
    { message: 'No Diet Charts' },
    { message: 'No Restrictive Diets' },
    { message: 'No Staying Hungry' },
  ]

  return (
    <Container>
      <Text
        letterSpacing={0.05}
        size={32}
        color={lightTheme.text.h1}
        style={{ textTransform: 'uppercase' }}
        family="Avenir"
      >
        REDEFINE YOUR RELATIONSHIP WITH FOOD
      </Text>
      <Line color={lightTheme.text.h1} />
      <PointCardList>
        {cardList.map(card => (
          <PointCard>
            <img src={XMark} alt="x-mark" />
            <Text
              size={20}
              family="Avenir"
              color={lightTheme.text.h1}
              style={{ marginLeft: 15 }}
            >
              {card.message}
            </Text>
          </PointCard>
        ))}
      </PointCardList>
    </Container>
  )
};

const Container = styled.div`
  height: 250px;
  background-color: ${lightTheme.background.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 20px;
  width: 40vw;
  border-bottom: 3px solid ${({ color }) => color};
  margin-bottom: 48px;
`;

const PointCardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PointCard = styled.div`
  height: 50px;
  width: 280px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
