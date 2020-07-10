import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import { Paragraph, Section, InnerWrapper } from '../../components/styles';
import Form from '../../components/Form';

const Title = styled.h1`
  font-size: 2.5em !important;
  color: #fba100 !important;
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
            <Form />
          </InnerWrapper>
        </Section>
      </Layout>
    );
  }
}
