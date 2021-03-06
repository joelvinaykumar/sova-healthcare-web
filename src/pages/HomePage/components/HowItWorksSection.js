import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, Line, TimeLineCard } from '../../../components';
import icon1 from '../../../assets/icons/star-1.svg';
import icon2 from '../../../assets/icons/chemistry-2.svg';
import icon3 from '../../../assets/icons/result-3.svg';
import icon4 from '../../../assets/icons/doctor-4.svg';
import icon5 from '../../../assets/icons/refresh-5.svg';

export const HowItWorksSection = () => {

  const cardList = [
    { icon: icon1, title: 'Sign up' },
    { icon: icon2, title: 'Get Tested' },
    { icon: icon3, title: 'Learn' },
    { icon: icon4, title: 'Get Advice' },
    { icon: icon5, title: 'Re-Test' },
  ]

  return (
    <Container>
      <Text
        letterSpacing={0.05}
        size={32}
        color={lightTheme.text.h1}
        style={{ textTransform: 'uppercase', textAlign: 'center' }}
        family="Avenir"
      >
        How it Works?
      </Text>
      <Line width="210px" color={lightTheme.text.h1} />
      <AchievementCardList>
        {cardList.map((card, i) => (
          <>
            {/* <Path /> */}
            <TimeLineCard
              index={i+1}
              { ...card }
            />
          </>
        ))}
      </AchievementCardList>
      <Text
        letterSpacing={1.6}
        size={16}
        color={lightTheme.background.primary}
        style={{ textTransform: 'uppercase', textAlign: 'center' }}
        family="Avenir"
      >
        SEE HOW THE COMPLETE PROCESS WORKS
      </Text>
      <Line width="310px" color={lightTheme.text.h1} />
    </Container>
  )
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AchievementCardList = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: space-between;
  width: 45vw;
  margin: 0 auto;
  padding-bottom: 50px;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }

  @media screen and (max-width: 600px) {
    width: 70vw;
    flex-direction: column;
    justify-content: space-between;
  }
`;