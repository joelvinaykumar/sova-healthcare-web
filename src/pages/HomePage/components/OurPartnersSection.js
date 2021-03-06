import React from 'react';
import styled from 'styled-components';

import { lightTheme } from '../../../utils/theme';
import { Text, Line, Spacer } from '../../../components';

import img1 from '../../../assets/images/partners/img-1.png';
import img2 from '../../../assets/images/partners/img-2.png';
import img3 from '../../../assets/images/partners/img-3.png';
import img4 from '../../../assets/images/partners/img-4.png';

import source1 from '../../../assets/images/partners/source-1.jpg';
import source2 from '../../../assets/images/partners/source-2.png';
import source3 from '../../../assets/images/partners/source-3.png';
import source4 from '../../../assets/images/partners/source-4.jpg';
import source5 from '../../../assets/images/partners/source-5.png';

export const OurPartnersSection = () => {

  const partnersList = [
    { icon: img1  },
    { icon: img2  },
    { icon: img3 },
    { icon: img4 },
  ];

  const sourcesList = [
    { icon: source1  },
    { icon: source2  },
    { icon: source3 },
    { icon: source4 },
    { icon: source5 },
  ];

  return (
    <Container>
      <Text
        letterSpacing={0.05}
        size={32}
        color={lightTheme.text.h1}
        family="Avenir"
      >
        OUR PARTNERS
      </Text>
      <Line width="180px" color={lightTheme.text.h1} />
      <Partners>
        {partnersList.map(partner => (
          <img src={partner.icon} alt="source" style={{ height: 40, marginBottom: 50 }} />
        ))}
      </Partners>
      <Spacer vertical size={80} />
      <Text
        letterSpacing={0.05}
        size={32}
        color={lightTheme.text.h1}
        family="Avenir"
      >
        AS SEEN IN
      </Text>
      <Line width="150px" color={lightTheme.text.h1} />
      <Partners>
        {sourcesList.map(source => (
          <img src={source.icon} alt="source" style={{ height: 40, marginBottom: 50 }} />
        ))}
      </Partners>
      <Spacer vertical size={60} />
    </Container>
  )
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  padding: 50px;
`;

const Partners = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;  
  flex-wrap: wrap;
  width: 80%;

  @media screen and (max-width: 600px) {
    display: grid;
    justify-content: center;
    align-content: center;
  }
`;
