import React from 'react';
import styled from 'styled-components';

import Logo from '../../../assets/images/logo.webp';
import { lightTheme } from '../../../utils/theme';
import { PrimaryButton, Text, Spacer } from '../../../components';

export const NavBar = () => {

  const routes = [
    { label: 'Home', link: '/' },
    { label: 'How it works', link: '/how-it-works' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Science', link: '/science' },
    { label: 'Faqs', link: '/faqs' },
    { label: 'About us', link: '/about-us' }
  ]

  return (
    <NavContainer>
      <img src={Logo} alt="logo" />
      <Spacer horizontal size={40} />
      <Routes>
        {routes.map(route => <Link href={route.link}>{route.label}</Link>)}
      </Routes>
      <Spacer horizontal size={40} />
      <PrimaryButton
        width={125}
        height={38}
        borderRadius={28}
        color="white"
        backgroundColor={lightTheme.button.primary}
        href="https://app.sova.health/signup"
      >
        <Text family="Avenir" size={15} style={{ textTransform: 'uppercase' }} >Get Started</Text>
      </PrimaryButton>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  background-color: ${lightTheme.background.primary};
  position: fixed;
  height: 60px;
  z-index: 9999;
  top: 0;

  @media screen and (max-width: 900px) {
    
  }
`;

const Routes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`  
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0;
  color: white;
  padding: 0 16px;
  transition: all ease-in 0.2s;
  
  &:hover {
    color: ${lightTheme.button.primary};
  }
`;

