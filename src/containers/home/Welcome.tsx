import * as React from 'react';
import styled from 'styled-components';
import { Heading, Flex, Text, Box } from '@primer/components';
import BlogWelcomeWrapper from './welcome/style';
import socialDistancingSvg from '../../images/social_distancing.svg';

export const ImageWrapper = styled.div`
  float: left;
  max-width: 30vw;
  min-width: 400px;
  padding-bottom: 40px;
  padding-right: 60px;
  @media only screen and (max-width: 500px) {
    min-width: 300px;
  }
`;

export interface WelcomeProps {}

const Welcome: React.FunctionComponent<WelcomeProps> = () => {
  return (
    <>
      <Box id="welcome" />
      <BlogWelcomeWrapper>
        <Heading textAlign="center" mb={60}>
          Welcome to the Medical Student COVID-19 Action Network (MSCAN)
        </Heading>
        <Flex justifyContent="center">
          <Text fontSize={5} mb={60}>
            <ImageWrapper>
              <img src={socialDistancingSvg} width="100%" />
            </ImageWrapper>
            The COVID-19 pandemic is a unique challenge for our world.
            That’s why we've started the Medical Student COVID-19 Action Network,
            a united nationwide alliance of medical students serving the community
            during these difficult times.
            <Box mb={40} />
            Our mission is twofold: (1) to show COVID-19 service opportunities
            organized by all medical schools in the U.S. and (2) to make the science behind
            COVID-19 understandable to the public at our{' '}
            <a
              href="https://www.youtube.com/channel/UCZcBF-uqP37PKMNN42BrA6A"
              target="_blank"
            >
              online channel
            </a>.
            <Box mb={40} />
            Our goal is to help others serve from home, support our healthcare workers,
            combine resources, and exchange ideas. Let’s do our part as
            future healthcare professionals to support the amazing work being done
            to stem the tide of COVID-19!
          </Text>
        </Flex>
      </BlogWelcomeWrapper>
    </>
  );
};

export default Welcome;
