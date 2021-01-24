import React from 'react';
import styled from 'styled-components';

import NotFoundIcon from '../assets/images/404Image.png'
import { lightTheme } from '../utils/theme';
import { OutlineButton, Text, Spacer } from '../components';

export const NotFoundPage = () => {
  return (
    <Container>
      <Box>
        <img src={NotFoundIcon} alt="Not Found" width={320} />
        <Spacer vertical size={62} />
        <Text
          color={lightTheme.text.primary}
          size={66}
          lineHeight={90}
          letterSpacing={1}
          family="HelveticaNueue Light"
        >
          PAGE NOT FOUND
        </Text>
        <Spacer vertical size={19} />
        <Text
          color={lightTheme.text.secondary}
          size={20}
          lineHeight={39}
          letterSpacing={1}
          family="HelveticaNueue Light"
        >
          We looked everywhere for this page.<br />
          Are you sure the website URL is correct?<br />
          Get in touch with the site owner.
        </Text>
        <Spacer vertical size={37} />
        <OutlineButton
          href="/"
          width={200}
          height={56}
          color={lightTheme.text.primary}
        >
          <BtnTitle>Go Back Home</BtnTitle>
        </OutlineButton>
        <div style={{ height: '50px' }} />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  text-align: left;
`;

const Title = styled(Text)`
  margin-top: 62px;
`;

const Description = styled(Text)`
  margin-top: 19px;
`;

const BtnTitle = styled.p`
  font-size: 22px;
  line-height: 39px;
  letter-spacing: 1;
  text-align: center;
  font-family: HelveticaNueue Light;
  color: ${lightTheme.text.secondary};
`;