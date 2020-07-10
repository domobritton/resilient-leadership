import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import {
  Wrapper,
  InnerWrapper,
  HeroTitleBox,
  HeroTitle,
  Section,
  FlexRow,
  Heading,
  Paragraph,
} from '../components/styles';
import Form from '../components/Form';

const Column = styled.div`
  width: 50%;
  &:first-of-type {
    padding-right: 1rem;
  }
  &:last-of-type {
    padding-left: 1rem;
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
`;

const ContactBox = styled.div`
  width: 65%;
  min-width: 400px;
  padding-left: 1rem;
`;

const ImageBox = styled.div`
  height: 300px;
  overflow: hidden;
`;

export const AboutPageTemplate = ({
  title,
  heroImage,
  callToActionImg,
  bios,
}) => {
  const Hero = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${!!heroImage.childImageSharp
      ? heroImage.childImageSharp.fluid.src
      : heroImage});
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
  `;
  const CallToActionBackground = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${!!callToActionImg.childImageSharp
      ? callToActionImg.childImageSharp.fluid.src
      : callToActionImg});
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
          <FlexRow>
            {bios.map((bio, idx) => {
              const { name, text, socialLinks } = bio;
              return (
                <Column key={idx}>
                  <ImageBox>
                    <PreviewCompatibleImage imageInfo={bio} />
                  </ImageBox>
                  <Heading>{name}</Heading>
                  {text.map(({ paragraph }, idx) => (
                    <Fragment key={idx}>
                      <Paragraph>{paragraph}</Paragraph>
                    </Fragment>
                  ))}
                  {socialLinks.map(({ href }, idx) => (
                    <Fragment key={idx}>
                      <a href={href} target="__blank" rel="noopener noreferrer">
                        {idx === 0 && <FontAwesomeIcon icon={faFacebook} size='2x' />}
                        {idx === 1 && <FontAwesomeIcon icon={faLinkedin} size='2x' />}
                      </a>
                    </Fragment>
                  ))}
                </Column>
              );
            })}
          </FlexRow>
        </Section>
      </InnerWrapper>
      <CallToActionBackground>
        <InnerWrapper>
          <FlexRow
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
          </FlexRow>
        </InnerWrapper>
      </CallToActionBackground>
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
