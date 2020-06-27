import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import Features from '../components/Features';
import leadership from '../img/leadership.svg';
import {
  Wrapper,
  HeroTitleBox,
  HeroTitle,
  FlexRow,
  linkStyle,
} from '../components/styles';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  position: relative;
  margin: 0 auto;
`;

const Section = styled.section`
  display: flex;
  padding: 4rem 1rem;
`;

const MainPitchColumn = styled.div`
  width: 33%;
  min-width: 300px;
  position: relative;
  @media (max-width: 768px) {
    position: absolute;
  }
`;

const MainPitchBox = styled.div`
  background-color: #f5f5f5;
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  width: 400px;
  margin-left: 20%;
`;

const mainImageStyle = css`
  width: 67%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const mainPitchTitleStyle = css`
  font-size: 2.25em !important;
  color: #fba100 !important;
  margin-bottom: 1.5rem;
  line-height: 1;
  @media (max-width: 768px) {
    margin: 2rem;
    position: relative;
    z-index: 1;
  }
`;

const PhiloImageBox = styled.div`
  padding: 3rem 0 0;
`;

const philoImage = css`
  width: 65%;
  margin: 0 auto;
`;

const PhiloColumn = styled.div``;

const philoColumnRight = css``;

const PhiloTitle = styled.h3`
  font-size: 2.25em !important;
  color: #fba100 !important;
  margin-bottom: 1.5rem;
  line-height: 1;
`;

const ResultsColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const List = styled.ul`
  padding-left: 6.25rem;
`;

const ListItem = styled.li`
  font-size: 1.375em;
  padding: 1rem 1.25rem;
  background-color: #749ab6;
  color: #ffffff;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const ResultsTitle = styled.h3`
  font-size: 2.25em !important;
  color: #fba100 !important;
  border-bottom: 3px solid #fba100;
  padding: 0 0 7px;
  display: inline-table;
  margin-left: -5px;
  padding-left: 10px;
  width: 100%;
  line-height: 1.5;
`;

const CallToActionTitle = styled.h3`
  font-size: 2.25em !important;
  color: #fba100 !important;
  margin-bottom: 1.5rem;
  line-height: 1;
`;

const TestimonialCard = styled.div`
  padding: 3rem;
  background-color: #65737d;
  font-size: 1.25em;
  color: #ffffff;
  width: 50%;
  min-width: 18.75rem;
  :nth-of-type(n + 2) {
    margin-left: 0.625rem;
  }
  &:not(:last-of-type) {
    margin-right: 0.625rem;
  }
`;

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  description,
  philosophy,
  results,
  services,
  callToAction,
  testimonialSection,
}) => {
  const BackgroundWrapper = styled.section`
    position: relative;
  `;
  const TestimonialBackground = styled.div`
    background-image: url(${!!testimonialSection.image.childImageSharp
      ? testimonialSection.image.childImageSharp.fluid.src
      : testimonialSection.image});
    position: absolute;
    width: 100%;
    min-height: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    z-index: -1;
  `;
  return (
    <div>
      <div
        className='full-width-image margin-top-0'
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `center center`,
          backgroundAttachment: `fixed`,
          height: 650,
        }}
      >
        <HeroTitleBox>
          <HeroTitle>{title}</HeroTitle>
          <h3
            className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
            style={{
              boxShadow:
                'rgb(251,161,0) 0.5rem 0px 0px, rgb(251,161,0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(251,161,0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              textAlign: 'center',
            }}
          >
            {subheading}
          </h3>
        </HeroTitleBox>
      </div>
      <Wrapper>
        <InnerWrapper>
          <Section
            css={css`
              border-bottom: 1px solid #749ab6;
            `}
          >
            <MainPitchColumn>
              <h3 css={mainPitchTitleStyle}>{mainpitch.title}</h3>
              <MainPitchBox>
                <p>{mainpitch.description}</p>
                <p>{description}</p>
              </MainPitchBox>
            </MainPitchColumn>
            <Img
              fluid={mainpitch.image.childImageSharp.fluid}
              css={mainImageStyle}
            />
            <div className='tile'></div>
          </Section>
          <Section
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <PhiloColumn css={philoColumnRight}>
              <PhiloTitle>{philosophy.title}</PhiloTitle>
              <p>{philosophy.paragraph1}</p>
              <p>{philosophy.paragraph2}</p>
              {/* <QuoteBox>{philosophy.quote}</QuoteBox> */}
            </PhiloColumn>
            <PhiloImageBox>
              <Img
                fluid={philosophy.image.childImageSharp.fluid}
                css={philoImage}
              />
            </PhiloImageBox>
          </Section>
          <Section>
            <ResultsColumn>
              <FlexRow>
                <img
                  src={leadership}
                  alt='you will be a more effective leader'
                  style={{ width: 100 }}
                />
                <ResultsTitle>{results.title}</ResultsTitle>
              </FlexRow>
              <List>
                {results.listItems.map((item, idx) => (
                  <ListItem key={idx}>{item.text}</ListItem>
                ))}
              </List>
            </ResultsColumn>
          </Section>
          <Features gridItems={services.blurbs} />
        </InnerWrapper>
        <Section
          css={css`
            padding: 4rem 2rem;
            display: flex;
            flex-direction: column;
            background-color: #907d8e;
            color: #ffffff;
          `}
        >
          <InnerWrapper>
            <CallToActionTitle>{callToAction.title}</CallToActionTitle>
            <p>
              We believe that we are all <b>RESILIENT</b> by design and through
              building our capacity, and learning to move effectively with
              change, we can overcome any obstacle.
            </p>
            <p>
              We believe that through awareness, there is an opportunity for
              more productive action. By building skills in effective
              communication, you and your team can face challenges with greater
              resiliency, and deliver more reliable results.
            </p>
            <p>
              In 45 minutes, we’ll uncover your current gaps in leadership,
              re-center on your top strengths, and guide you through your
              potential and how our coaching expertise can help create new
              possibilities.
            </p>
            <p>
              <b>Our request: </b>
              Come to us with your biggest concerns and a willingness to share
              openly– so our solutions will have the biggest impact in your
              organization and your life.
            </p>
            <p>
              <b>Our promise: </b>
              You’ll walk away able to see more possibilities for your team and
              your leadership.
            </p>
            <Link to='/contact-us' css={linkStyle}>
              Get in touch
            </Link>
          </InnerWrapper>
        </Section>
        <BackgroundWrapper>
          <TestimonialBackground />
          <Section
            css={css`
              margin: 0 auto;
              width: 100%;
              max-width: 1100px;
              flex-direction: column;
            `}
          >
            <CallToActionTitle>What our clients say about us</CallToActionTitle>
            <FlexRow>
              {testimonialSection.testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx}>
                  <p>{testimonial.text1}</p>
                  <p>{testimonial.text2}</p>
                  <p>{testimonial.author}</p>
                </TestimonialCard>
              ))}
            </FlexRow>
          </Section>
        </BackgroundWrapper>
      </Wrapper>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  description: PropTypes.string,
  philosophy: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    quote: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  results: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    listItems: PropTypes.array,
  }),
  services: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  callToAction: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
    paragraph3: PropTypes.string,
    paragraph4: PropTypes.string,
    paragraph5: PropTypes.string,
  }),
  testimonialSection: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    testimonials: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        philosophy={frontmatter.philosophy}
        results={frontmatter.results}
        services={frontmatter.services}
        callToAction={frontmatter.callToAction}
        testimonialSection={frontmatter.testimonialSection}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
        }
        description
        philosophy {
          title
          paragraph1
          paragraph2
          quote
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        results {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          listItems {
            text
          }
        }
        services {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
          heading
          description
        }
        callToAction {
          title
          paragraph1
          paragraph2
          paragraph3
          paragraph4
          paragraph5
        }
        testimonialSection {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          testimonials {
            text1
            text2
            author
          }
        }
      }
    }
  }
`;
