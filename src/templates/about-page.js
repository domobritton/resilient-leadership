import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import {
  Wrapper,
  InnerWrapper,
  FlexWithDirection,
  Heading,
  Paragraph,
  Section,
} from '../components/styles';
import Form from '../components/Form';
import Hero from '../components/Hero';

const Column = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:first-of-type {
    padding-right: 1rem;
    @media (max-width: 768px) {
      padding: 0 0 4rem;
    }
  }
  &:last-of-type {
    padding-left: 1rem;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1rem;
  color: #fba100;
`;

const ContactText = styled.div`
  width: 35%;
  padding-right: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const ContactBox = styled.div`
  width: 65%;
  min-width: 400px;
  padding-left: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 280px;
    padding: 0;
  }
`;

const ImageBox = styled.div`
  height: 250px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Social = styled.a`
  transition: opacity 400ms ease-in-out;
  &:last-of-type {
    margin-left: 1rem;
  }
  &:hover {
    opacity: 0.8;
  }
  > svg > path {
    fill: #4c3b4d;
  }
`;

export const AboutPageTemplate = ({
  title,
  heroImage,
  callToActionImg,
  bios,
}) => {
  return (
    <Wrapper>
      <Hero image={heroImage} title={title} alt='About page' />
      <Section>
        <InnerWrapper>
          <FlexWithDirection>
            {bios.map((bio, idx) => {
              const { name, text, socialLinks } = bio;
              return (
                <Column key={idx}>
                  <ImageBox>
                    <Img
                      fluid={bio.image.childImageSharp.fluid}
                      css={css`
                        width: 250px;
                        height: 250px;
                        @media (max-width: 650px) {
                          width: 100%;
                          height: 100%;
                        }
                      `}
                    />
                  </ImageBox>
                  <Heading
                    css={css`
                      line-height: 2.25;
                      border-bottom: 2px solid;
                      margin-bottom: 0;
                      max-width: 300px;
                      @media (max-width: 420px) {
                        max-width: initial;
                      }
                    `}
                  >
                    {name}
                  </Heading>
                  <div
                    css={css`
                      padding-top: 2rem;
                    `}
                  >
                    {text.map(({ paragraph }, idx) => (
                      <Fragment key={idx}>
                        <Paragraph>{paragraph}</Paragraph>
                      </Fragment>
                    ))}
                  </div>
                  {socialLinks.map(({ href }, idx) => (
                    <Fragment key={idx}>
                      <Social
                        href={href}
                        target='__blank'
                        rel='noopener noreferrer'
                      >
                        {idx === 0 && (
                          <FontAwesomeIcon icon={faFacebook} size='2x' />
                        )}
                        {idx === 1 && (
                          <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        )}
                      </Social>
                    </Fragment>
                  ))}
                </Column>
              );
            })}
          </FlexWithDirection>
        </InnerWrapper>
      </Section>
      <Section
        css={css`
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 500px;
          position: relative;
          @media (max-width: 768px) {
            height: auto;
          }
        `}
      >
        <Img
          fluid={callToActionImg.childImageSharp.fluid}
          style={{
            position: 'absolute',
          }}
          css={css`
            width: 100%;
            height: 100%;
            z-index: -2;
          `}
        />
        <InnerWrapper>
          <FlexWithDirection
            css={css`
              align-items: center;
            `}
          >
            <ContactText>
              <Title>Based in Marin, California</Title>
              <Paragraph
                css={css`
                  color: #ffffff;
                `}
              >
                Resilient Leadership’s mission is to support leaders, teams and
                organizations to embody the skills necessary to consistently
                reach higher goals, quickly recover from setbacks and face new
                challenges with wisdom and perseverance.
              </Paragraph>
            </ContactText>
            <ContactBox>
              <Form />
            </ContactBox>
          </FlexWithDirection>
        </InnerWrapper>
      </Section>
    </Wrapper>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  callToActionImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  bios: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        heroImage={post.frontmatter.heroImage}
        callToActionImg={post.frontmatter.callToActionImg}
        bios={post.frontmatter.bios}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        callToActionImg {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bios {
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          text {
            paragraph
          }
          socialLinks {
            href
          }
        }
      }
    }
  }
`;
