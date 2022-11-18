import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import {
  Wrapper,
  InnerWrapper,
  Heading,
  Paragraph,
  Section,
} from '../components/styles';
// import Form from '../components/Form';
import Hero from '../components/Hero';

const FlexWithDirection = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 33%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  &:not(:last-of-type) {
    padding-right: 25px;
    @media (max-width: 1024px) {
      padding: 0 0 4rem;
    }
  }
  &:last-of-type {
    padding-left: 1rem;
    @media (max-width: 1024px) {
      padding: 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 3.8rem;
  color: #dfb860;
  margin-bottom: 1.5rem;
`;

const ContactText = styled.div`
  width: 35%;
  padding-right: 1rem;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const ContactBox = styled.div`
  width: 65%;
  min-width: 400px;
  padding-left: 1rem;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 250px;
    padding: 0;
  }
`;

const ImageBox = styled.div`
  height: 250px;
  width: 250px;
  overflow: hidden;
  border: 2px solid: #f9f6ef;
  border-radius: 8px;
  @media (max-width: 1024px) {
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
    fill: #dfb860;
  }
`;

const AboutPageTemplate = ({ title, heroImage, callToActionImg, bios }) => {
  return (
    <Wrapper>
      <Hero image={heroImage} title={title} alt='About page' />
      <Section
        css={css`
          background-color: #f9f6ef;
        `}
      >
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
          @media (max-width: 1024px) {
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
          <FlexWithDirection>
            <ContactText>
              <Title>Based in Sonoma, California</Title>
              <Paragraph
                css={css`
                  color: #ffffff;
                `}
              >
                Resilient Leadership is a boutique personal and professional
                development firm committed to helping you become more successful
                with greater ease.
              </Paragraph>
            </ContactText>
            <ContactBox>{/* <Form /> */}</ContactBox>
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
    <Layout aboutpage>
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        callToActionImg {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bios {
          image {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
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
