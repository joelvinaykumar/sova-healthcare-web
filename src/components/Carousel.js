import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../components';
import { lightTheme } from '../utils/theme';
import arrow from '../assets/icons/arrow.jpg';

export const Carousel = ({ backgroundColor, items }) => {

  const [currentItem, setCurrentItem] = useState(0);
  const n = items.length-1;

  const seePrevious = () => setCurrentItem(currentItem-1 < 0 ? n : currentItem-1);

  const seeNext = () => setCurrentItem(currentItem+1 > n ? 0 : currentItem+1);

  return (
    <Container backgroundColor={backgroundColor}>
      <Inside>
        <img
          src={arrow}
          width={50}
          alt="left arrow icon"
          style={{ transform: 'scaleX(-1)', cursor: 'pointer' }}
          onClick={seePrevious}
        />
        <CarouselItem>
          <Face src={items[currentItem].face} alt="carousel item" width={180} style={{ borderRadius: '50%' }} />
          <Testimonial>
            <Text
              family="Avenir Light"
              size={18}
              color={lightTheme.background.primary}
              className="testimonial-message"
            >
              {items[currentItem].message}
            </Text>
            <Text
              family="Avenir"
              size={22}
              style={{ textAlign: 'right', marginTop: 20 }}
            >
              {`-${items[currentItem].name}`}
            </Text>
          </Testimonial>
        </CarouselItem>
        <img
          src={arrow}
          width={50}
          alt="right arrow icon"
          onClick={seeNext}
          style={{ cursor: 'pointer' }}
        />
      </Inside>
      <Dots>
        {items.map((_, i) => (
          <Dot active={i === currentItem} onClick={() => setCurrentItem(i)} />
        ))}
      </Dots>
    </Container>
  )
};

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 60px 30px;

  @media screen and (max-width: 900px) {
    width: 80vw;
    padding: 50px 10px;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
    padding: 50px 10px;
  }
`;

const Inside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: space-between;
`;

const Face = styled.img`
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55vw;
  padding: 0 30px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 900px) {
    padding: 0;
    width: 70vw;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Dot = styled.div`
  width: ${({ active }) => active ? '11.5px' : '10px'};
  height: ${({ active }) => active ? '11.5px' : '10px'};
  margin-left: 15px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ active }) => active ? 'none' : 'white'};
  border: 2px solid ${({ active }) => active ? 'white' : 'none'};
  transition: all ease-in 0.01s;
`;