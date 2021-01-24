import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, Line } from '../../../components';
import img1 from '../../../assets/images/section-2/img-1.png';
import img2 from '../../../assets/images/section-2/img-2.png';
import img3 from '../../../assets/images/section-2/img-3.png';
import img4 from '../../../assets/images/section-2/img-4.png';
import img5 from '../../../assets/images/section-2/img-5.png';
import img6 from '../../../assets/images/section-2/img-6.png';

export const WeHelpYouSection = () => {

  const cardList = [
    { icon: img1, title: 'Blood Biomarker Analysis', message: 'Get a scientific explanation for how specific biomarkers affect your body and what foods can be used to improve them.' },
    { icon: img2, title: 'One on One Lifestyle Analysis', message: 'Discover how your habits are affecting your health and immunity with consultation over video/audio calls.' },
    { icon: img3, title: 'Weekly Consultation', message: 'Discuss your goals/plans and build healthy habits with your nutritionist to boost your immunity' },
    { icon: img4, title: 'Superfood Library', message: 'Identify your superfoods as per your blood biomarkers and take the guesswork out fo eating right.' },
    { icon: img5, title: '24/7 Support', message: 'Get realtime feedback on your food decisions. Questions are answered by your nutritionist.' },
    { icon: img6, title: 'Sova Community', message: 'Get access to network of experts(nutritionists, chefs, fitness trianers & immunologists) with daily health tips, easy recipes, immunity boosting foods & lifestyle recommendations.' },
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
        WE HELP YOU ACHIEVE YOUR HEALTH GOALS
      </Text>
      <Line width={window.outerWidth>600 ? "40vw" : "60vw"} color={lightTheme.text.h1} />
      <AchievementCardList>
        {cardList.map(card => (
          <AchievementCard>
            <img src={card.icon} alt="card-icon" />
            <Text
              size={13}
              family="Avenir"
              color={lightTheme.text.h1}
              style={{ width: '150px', textTransform: 'uppercase' }}
            >
              {card.title}
            </Text>
            <Text
              size={11}
              family="Avenir Light"
              color={lightTheme.text.h1}
              style={{ width: '200px' }}
            >
              {card.message}
            </Text>
          </AchievementCard>
        ))}
      </AchievementCardList>
      <YoutubeSection>
        <iframe
          title="Sova Intro Video"
          width={window.outerWidth>600 ? "607" : "300"}
          height={window.outerWidth>600 ? "342" : "200"}
          src="https://www.youtube.com/embed/-3O3TVzbEJ8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </YoutubeSection>
    </Container>
  )
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 0 auto;
`;

const AchievementCardList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 100px;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 900px ) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0 0 0.2rem black);
  text-align: center;
`;

const YoutubeSection = styled.div`
  padding: 110px 0 50px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
