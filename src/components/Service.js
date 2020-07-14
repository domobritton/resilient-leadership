import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Wrapper,
  InnerWrapper,
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
import Hero from './Hero';

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
  return (
    <Wrapper>
      <Hero image={image} title={title} alt={title} />
      <Section>
        <InnerWrapper>
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
        </InnerWrapper>
      </Section>
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
