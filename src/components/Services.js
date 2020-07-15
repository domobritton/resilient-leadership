import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  align-items: center;
  background: rgb(144, 125, 142);
  background: linear-gradient(
    0deg,
    rgba(101, 115, 125, 1) 0%,
    rgba(58, 48, 66, 1) 100%
  );
  > div:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`;

const Box = styled.div`
  padding: 2rem;
  display: flex;
  width: 100%;
  max-width: 1100px;
  background-color: #dfdfdf;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.375em;
  margin-bottom: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Card = styled.div`
  width: 50%;
  min-width: 250px;
  padding-right: 1.25rem;
  text-align: left;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-right: 0;
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 2.25rem;
  color: #fba100;
  margin-bottom: 1.5rem;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const linkStyle = css`
  padding: 0.65rem;
  background-color: #fba100;
  color: #ffffff;
  font-size: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 350px;
  &:hover {
    background-color: #ffb42f;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 1.5rem;
    min-width: 305px;
  }
  @media (max-width: 420px) {
    font-size: 1em;
    min-width: auto;
    width: 100%;
  }
`;

const Services = ({ services }) => (
  <Section>
    {services.map((item) => (
      <Fade up distance='50px' key={item.text}>
        <Box>
          <Card>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <Text>{item.text}</Text>
            </div>
            <Link to={item.link} css={linkStyle}>
              {item.linkText}
            </Link>
          </Card>
          <ImageBox>
            <Link to={item.link} aria-label={item.linkText}>
              <PreviewCompatibleImage imageInfo={item} />
            </Link>
          </ImageBox>
        </Box>
      </Fade>
    ))}
  </Section>
);

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default Services;
