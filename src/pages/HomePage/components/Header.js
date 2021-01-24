import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, PrimaryButton, Spacer } from '../../../components';

import BannerImg from '../../../assets/images/header/banner.webp';

export const Header = () => {
  return (
    <HeaderContainer>
      <InnerDiv>
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
            size={21}
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
          <Banner src={BannerImg} alt="banner" />
        </Right>
      </InnerDiv>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${lightTheme.background.primary};
  padding: 150px 0 80px 0;  
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 65%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Line = styled.div`
  height: 20px;
  width: 26vw;
  border-bottom: 3px solid white;
  margin-bottom: 48px;

  @media screen and (max-width: 600px) {
    width: 55vw;
  }
`;

const Left = styled.div`
  width: 45%;

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const Banner = styled.img`
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 250px;
  }
`;