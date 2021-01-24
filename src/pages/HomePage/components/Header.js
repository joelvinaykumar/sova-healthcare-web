import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, PrimaryButton, Spacer } from '../../../components';

import BannerImg from '../../../assets/images/header/banner.webp';

export const Header = () => {
  return (
    <HeaderContainer>
      <Left>
        <Text
          color="white"
          size={36}
          family="Avenir"
        >
          Discover a Healthier You
        </Text>
        <Line />
        <Text
          color="white"
          size={19}
          family="Avenir"
        >
          Get a personalized nutrition program based on your lifestyle, habits and blood analysis.
        </Text>
        <Spacer vertical size={100} />
        <PrimaryButton
          backgroundColor="white"
          width={110}
          height={40}
          borderRadius={10}
        >
          <Text
            color={lightTheme.background.primary}
            size={15}
            letterSpacing={2}
            family="Avenir"
          >
            Get Started
          </Text>
        </PrimaryButton>
      </Left>
      <Right>
        <img src={BannerImg} width={50} alt="banner" />
      </Right>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  height: 300px;
  width: 100%;
  background-color: ${lightTheme.background.primary};
  padding: 140px 20px 120px 20px;  
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Line = styled.div`
  height: 20px;
  width: 410px;
  border-bottom: 3px solid white;
  margin-bottom: 48px;
`;

const Left = styled.div`
  width: 464px;
`;

const Right = styled.div`

`;