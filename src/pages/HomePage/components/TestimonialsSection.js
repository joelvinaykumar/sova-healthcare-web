import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, Line, Carousel } from '../../../components';
import cx1 from '../../../assets/images/testimonials/cx-1.webp';
import cx2 from '../../../assets/images/testimonials/cx-2.webp';
import cx3 from '../../../assets/images/testimonials/cx-3.webp';

export const TestimonialsSection = () => {

  const testimonials = [
    { face: cx1, name: 'Kritika', message: `"I can eat freely and am convinced that I am giving my body the right foods and the nutrients that it needs."
    Weight loss is a part of my motivation to eat right but it's not the only reason that I am doing this. For me, it's about being healthier. Eating what my body really needs keeps me from being tempted to eat the wrong thing. And fortunately, with the combination of eating right, exercising and generally trying to be healthier, I've also lost weight.”` },
    { face: cx2, name: 'Siddhant', message: `“Its an amazing feeling to see the second blood report. I was already feeling better but now I could see the progress! The root cause analysis was a wake up call for me. I became more mindful about the food I was eating. It was cool that the changes weren’t radical and my mother didn’t have to change what was being cooked already."` },
    { face: cx3, name: 'Parneeta', message: `“I was going through a really hard phase of my life dealing with PCOD, Face Acne and Weight Gain issues. The team helped me understand what nutrients my body needs in tracked progress over a period of time. I realized that personalized and flexible nutrition plans have helped to manage by EATING RIGHT.”` },    
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
        WHAT OUR CUSTOMERS SAY
      </Text>
      <Line width="420px" color={lightTheme.text.h1} />
      <CarouselSection>
        <Carousel items={testimonials} backgroundColor={lightTheme.background.secondary} />
      </CarouselSection>
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

const CarouselSection = styled.div`
  margin: 0 auto;
`;
