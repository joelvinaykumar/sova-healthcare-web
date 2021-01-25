import React, { useState } from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, Line, Spacer, PrimaryButton } from '../../../components';

import facebook from '../../../assets/images/social/facebook.webp';
import instagram from '../../../assets/images/social/instagram.webp';
import twitter from '../../../assets/images/social/twitter.webp';
import youtube from '../../../assets/images/social/youtube.webp';

import phone from '../../../assets/images/social/phone.webp';
import emailIcon from '../../../assets/images/social/email.webp';

export const Footer = () => {

  const [email, setEmail] = useState(null);

  const socialIcons = [
    facebook,
    instagram,
    twitter,
    youtube
  ];

  const contacts = [
    { icon: phone, type: 'text', title: '+91 9811 574 691'  },
    { icon: emailIcon, type: 'email', title: 'support@sova.health' },
  ] 

  return (
    <Container>
      <Line color={lightTheme.background.secondary} width={window.outerWidth>600 ? "60vw" : "85vw"} />
      <InsideContainer>
        <Left>
          <Text
            family="Avenir"
            size={17}
            color={lightTheme.background.primary}
            style={{ marginBottom: 30 }}
          >
            Just good content. No spam.<br />
            Sign up for our newsletter
          </Text>
          <Input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
          <PrimaryButton
            color={lightTheme.background.primary}
            backgroundColor={lightTheme.background.primary}
            height={30}
            width={60}
            borderRadius={30}
          >
            <Text
              family="Avenir"
              size={15}
              color="white"
            >
              Submit
            </Text>
          </PrimaryButton>
        </Left>
        <Right>
          {contacts.map(contact => (
            <>
            <Contact>
              <img src={contact.icon} alt="icon" />
              <Text
                family="Avenir"
                size={16}
                color={lightTheme.background.primary}
              >
                {contact.title}
              </Text>
            </Contact>
            <Spacer vertical size={30} />
            </>
          ))}
        </Right>
      </InsideContainer>
      <Spacer vertical size={50} />
      <SocialIcons>
        {socialIcons.map(icon => <img src={icon} alt="social icon" />)}
      </SocialIcons>
      <Text
        family="Avenir Light"
        size={13}
        letterSpacing={1}
        color={lightTheme.background.primary}
        style={{ textTransform: 'uppercase', textAlign: 'center', marginBottom: 20 }}
      >
        WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED
      </Text>
    </Container>
  )
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 80vw;
  }
`;

const InsideContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  height: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 50px;
    align-items: center;
    width: 100%;
  }
`;

const Contact = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 12px;
  width: 361px;
  padding: 15px;
  border: 1px solid ${lightTheme.background.primary};
  margin-bottom: 15px;

  &:hover {
    border: 1px solid red;
  }

  &:focus {
    border: 1px solid ${lightTheme.button.primary};
  }

  @media screen and (max-width: 600px) {
    width: 261px;
  }
`;