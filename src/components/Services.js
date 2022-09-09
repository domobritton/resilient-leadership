import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { WidthWrapper } from './styles';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20rem 0;
  align-items: center;
  background-color: #14213d;
`;

const ServicesTitle = styled.h3`
  font-size: 3.25rem;
  color: #dfb860;
  margin-bottom: 1.75rem;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 25px;
  row-gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 580px);
  }
`;

const Box = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #f9f6ef;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.75rem;
`;

const ServiceButton = styled.div``;

const ServiceTitle = styled.h3`
  font-size: 3.25rem;
  color: #dfb860;
  margin: 1.75rem 0;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 2px solid #f9f6ef;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const linkStyle = css`
  padding: 0.65rem;
  background-color: #dfb860;
  color: #262626;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  border: 2px solid #dfb860;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin: 0 auto;

  &:hover {
    color: #262626;
  }
`;

const Services = ({ services }) => (
  <Section
    id='services'
    css={css`
      position: relative;
    `}
  >
    <WidthWrapper>
      <ServicesTitle>Our services</ServicesTitle>
      <Grid>
        {services.map((item) => (
          <Fade up distance='50px' key={item.text}>
            <Box>
              <div>
                {item?.link && item?.linkText ? (
                  <ImageBox>
                    <Link to={item.link} aria-label={item.linkText}>
                      <PreviewCompatibleImage imageInfo={item} />
                    </Link>
                  </ImageBox>
                ) : (
                  <ImageBox>
                    <PreviewCompatibleImage imageInfo={item} />
                  </ImageBox>
                )}
                <div>
                  <ServiceTitle>{item.title}</ServiceTitle>
                  <Text>{item.text}</Text>
                </div>
              </div>
              <ServiceButton>
                {item?.link && item?.linkText && (
                  <Link to={item.link} css={linkStyle}>
                    {item.linkText}
                  </Link>
                )}
              </ServiceButton>
            </Box>
          </Fade>
        ))}
      </Grid>
    </WidthWrapper>
    <div
      style={{
        height: 150,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <svg
        viewBox='0 0 500 150'
        preserveAspectRatio='none'
        style={{ height: '100%', width: '100%' }}
      >
        <path
          d='M-2.25,36.02 C79.57,264.97 349.20,-49.99 500.00,118.92 L500.00,150.00 L0.00,150.00 Z'
          style={{ stroke: 'none', fill: '#ffffff' }}
        ></path>
      </svg>
    </div>
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
