import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;

const Box = styled.div`
  padding: 2rem;
  display: flex;
  background-color: #909d9f;
  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.375em;
  margin-bottom: 1.25rem;
`;

const Card = styled.div`
  width: 50%;
  min-width: 300px;
  padding-right: 1.25rem;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 2.25rem;
  color: #fba100;
  margin-bottom: 1.5rem;
  line-height: 1;
`;

const ImageBox = styled.div`
  width: 50%;
  cursor: pointer;
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
