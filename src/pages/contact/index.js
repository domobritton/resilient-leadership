import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import {
  Paragraph,
  Section,
  InnerWrapper,
  Title,
} from '../../components/styles';
// import Form from '../../components/Form';
import Hero from '../../components/Hero';

const Subtitle = styled.h4`
  font-size: 2.25rem;
  margin-bottom: 0.6rem;
`;

const QuoteContainer = styled.div`
  background-color: #dfb860;
`;

const Index = ({ data }) => {
  return (
    <Layout contactpage>
      <Hero image={data.file} title='Contact us' alt='contact' />
      <Section
        css={css`
          background-color: #f9f6ef;
        `}
      >
        <InnerWrapper>
          <Title>Get in touch</Title>
          <Subtitle>We'd love to hear from you!</Subtitle>
          <Paragraph>
            Let's have a conversation about how <b>Resilient Leadership</b> can
            help you.
          </Paragraph>
          <Paragraph>
            <b>Phone:</b> FOUR ONE FIVE-521-4153
          </Paragraph>
          <Paragraph>
            <b>Email:</b> charlene <em>at</em> resilientleadership.us
          </Paragraph>
          {/* <Form /> */}
        </InnerWrapper>
        <QuoteContainer>
          <InnerWrapper
            css={css`
              padding: 4rem 25px;
            `}
          >
            <Paragraph
              css={css`
                color: #14213d;
                font-size: 2.5rem;
              `}
            >
              “In order to succeed, people need a sense of self-efficacy, to
              struggle together with resilience to meet the inevitable obstacles
              and inequities of life.”
            </Paragraph>
            <Paragraph
              css={css`
                color: #14213d;
                font-size: 1.5rem;
                font-weight: 700;
              `}
            >
              Albert Bandura (1977). Social Learning Theory.
            </Paragraph>
          </InnerWrapper>
        </QuoteContainer>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "contact/resilient-leadership-contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Index;
