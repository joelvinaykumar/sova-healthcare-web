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
      <NavDiv>
        <a href="/"><img src={Logo} alt="logo" /></a>
        <Spacer horizontal size={40} />
        <Routes>
          {window.outerWidth>600
          ? routes.map(route => (
          <Link href={route.link}>
            <Text
              color="white"
              family="Avenir Light"
              style={{ textAlign: 'center' }}
            >
              {route.label}
            </Text>
          </Link>
          ))
          : (
            <>
              <Text
                color="white"
                family="Avenir Light"
                style={{ textAlign: 'center' }}
                className="dropdown-menu"
              >
                -Menu-
              </Text>
            <RoutesDropDown className="dropdown-content">
              {routes.map(route => (
                <Link href={route.link}>
                  <Text
                    color="white"
                    family="Avenir Light"
                    style={{ textAlign: 'center' }}
                  >
                    {route.label}
                  </Text>
                </Link>
              ))}
            </RoutesDropDown>
            </>
          )
          }
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
      </NavDiv>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${lightTheme.background.primary};
  position: fixed;
  height: 60px;
  z-index: 9999;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  dropdwon-menu:hover .dropdown-content {
    display: flex;
  }

  .dropdwon-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    z-index: 1;
  }

  @media screen and (max-width: 400px) {
    padding: 20px;
  }
`;

const NavDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    padding: 30px;
  }
`;

const Routes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RoutesDropDown = styled.div`
  display: none;
  flex-direction: column;
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

