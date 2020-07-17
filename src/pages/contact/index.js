import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import {
  Paragraph,
  Section,
  InnerWrapper,
  Flex,
} from '../../components/styles';
import Form from '../../components/Form';

const Title = styled.h1`
  font-size: 2.5em;
  color: #fba100;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.75em;
  margin-bottom: 0.6rem;
`;

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Section
          css={css`
            min-height: calc(100vh - 392px);
          `}
        >
          <InnerWrapper>
            <Title>Get in touch</Title>
            <Subtitle>We'd love to hear from you!</Subtitle>
            <Paragraph>
              Let's have a conversation about how <b>Resilient Leadership</b>{' '}
              can help you.
            </Paragraph>
            <Paragraph>
              <b>Phone:</b> 415.521.4153
            </Paragraph>
            <Paragraph>
              <b>Email:</b> wilsoncoaching <em>at</em> gmail.com
            </Paragraph>
            <Form />
          </InnerWrapper>
          <InnerWrapper
            css={css`
              background-color: #4c3b4d;
              max-width: initial;
              padding: 4rem 0;
            `}
          >
            <Flex
              css={css`
                justify-content: center;
                flex-direction: column;
                max-width: 1100px;
                margin: 0 auto;
                padding: 0 1rem;
              `}
            >
              <Paragraph
                css={css`
                  color: #ffffff;
                  font-size: 1.5em;
                `}
              >
                “In order to succeed, people need a sense of self-efficacy, to
                struggle together with resilience to meet the inevitable
                obstacles and inequities of life.”
              </Paragraph>
              <Paragraph
                css={css`
                  color: #ffffff;
                  font-size: 1.5em;
                  font-weight: 700;
                `}
              >
                Albert Bandura (1977). Social Learning Theory.
              </Paragraph>
            </Flex>
          </InnerWrapper>
        </Section>
      </Layout>
    );
  }
}
