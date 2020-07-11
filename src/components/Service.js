import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import {
  Wrapper,
  InnerWrapper,
  HeroTitleBox,
  HeroTitle,
  Section,
  FlexWithDirection,
  Column,
  leftColumn,
  rightColumn,
  Heading,
  Title,
  Paragraph,
  List,
  ListItem,
  linkStyle,
} from './styles';

const Service = ({
  title,
  image,
  heading1,
  heading2,
  heading3,
  audience,
  objectives,
  summary1,
  summary2,
  processTitle,
  processBold,
  process1,
  process2,
  outcomesTitle,
  outcomes,
}) => {
  const Hero = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${!!image.childImageSharp
      ? image.childImageSharp.fluid.src
      : image});
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
  `;
  return (
    <Wrapper>
      <Hero>
        <HeroTitleBox>
          <HeroTitle>{title}</HeroTitle>
        </HeroTitleBox>
      </Hero>
      <InnerWrapper>
        <Section>
          <FlexWithDirection>
            <Column css={leftColumn}>
              <Heading>
                {heading1}
                {heading2 && (
                  <>
                    <br />
                    {heading2}
                  </>
                )}
                {heading3 && (
                  <>
                    <br />
                    {heading3}
                  </>
                )}
              </Heading>
              <Paragraph>
                <b>Audience</b>
              </Paragraph>
              <Paragraph>{audience}</Paragraph>
              {objectives && (
                <>
                  <Paragraph>
                    <b>Objectives</b>
                  </Paragraph>
                  <Paragraph>{objectives}</Paragraph>
                </>
              )}
            </Column>
            <Column css={rightColumn}>
              <Paragraph>{summary1}</Paragraph>
              {summary2 && <Paragraph>{summary2}</Paragraph>}
              <Title>{processTitle}</Title>
              <Paragraph>
                {processBold && <b>{processBold}: </b>}
                {process1}
              </Paragraph>
              {process2 && <Paragraph>{process2}</Paragraph>}
              <Title>{outcomesTitle}</Title>
              <List>
                {outcomes.map(({ text }, idx) => (
                  <ListItem key={idx}>{text}</ListItem>
                ))}
              </List>
            </Column>
          </FlexWithDirection>
          <Link to='/contact' css={linkStyle}>
            Get in touch
          </Link>
        </Section>
      </InnerWrapper>
    </Wrapper>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  audience: PropTypes.string,
  objectives: PropTypes.string,
  summary1: PropTypes.string,
  summary2: PropTypes.string,
  processTitle: PropTypes.string,
  process: PropTypes.string,
  outcomesTitle: PropTypes.string,
  outcomes: PropTypes.array,
};

export default Service;
