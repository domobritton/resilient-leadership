import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  align-items: center;
  background: rgb(144, 125, 142);
  background: linear-gradient(
    0deg,
    rgba(101, 115, 125, 1) 0%,
    rgba(116, 154, 182, 1) 100%
  );
`;

const Box = styled.div`
  padding: 2rem;
  display: flex;
  width: 100%;
  max-width: 1100px;
  background-color: #dfdfdf;
  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.375em;
  margin-bottom: 1.25rem;
  @media (max-width: 650px) {
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
  @media (max-width: 650px) {
    padding-right: 0;
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 2.25rem;
  color: #fba100;
  margin-bottom: 1.5rem;
  line-height: 1;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  cursor: pointer;
  @media (max-width: 650px) {
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
  max-width: 12rem;
  cursor: pointer;
  &:hover {
    background-color: #ffb42f;
    color: #ffffff;
  }
  @media (max-width: 650px) {
    margin: 0 auto;
    min-width: 160px;
    margin-bottom: 1.5rem;
  }
`;

const FeatureGrid = ({ gridItems }) => (
  <Section>
    {gridItems.map((item) => (
      <React.Fragment key={item.text}>
        <Box>
          <Card>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <Text>{item.text}</Text>
            </div>
            <Link to={item.link} css={linkStyle}>
              Learn more
            </Link>
          </Card>
          <ImageBox>
            <Link to={item.link}>
              <PreviewCompatibleImage imageInfo={item} />
            </Link>
          </ImageBox>
        </Box>
      </React.Fragment>
    ))}
  </Section>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
