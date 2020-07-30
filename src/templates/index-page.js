import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import Services from '../components/Services';
import leadership from '../img/leadership.svg';
import {
  Wrapper,
  FlexWithDirection,
  linkStyle,
  Paragraph,
} from '../components/styles';
import Hero from '../components/Hero';

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  position: relative;
  margin: 0 auto;
`;

const Section = styled.section`
  display: flex;
  padding: 4rem 1rem;
  background-color: #ffffff;
`;

const MainPitchColumn = styled.div`
  width: 33%;
  min-width: 300px;
  position: relative;
  @media (max-width: 768px) {
    position: absolute;
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    padding: 0 1rem 1rem;
  }
`;

const MainPitchBox = styled.div`
  background-color: #dce0d9;
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  width: 400px;
  margin-left: 20%;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 0;
  }
`;

const mainImageStyle = css`
  width: 67%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const mainPitchTitleStyle = css`
  font-size: 2.25em;
  color: #fba100;
  margin-bottom: 1.5rem;
  line-height: 1;
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
    text-align: center;
  }
`;

const PhiloImageBox = styled.div`
  padding: 3rem 0 0;
  position: relative;
`;

const philoImage = css`
  width: 65%;
  margin: 0 auto;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PhiloTitle = styled.h3`
  font-size: 2.25em;
  color: #fba100;
  margin-bottom: 1.5rem;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ResultsColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const List = styled.ul`
  padding-left: 6.25rem;
  > div:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const ListItem = styled.li`
  font-size: 1.375em;
  padding: 1rem 1.25rem;
  background-color: #808f85;
  color: #ffffff;
`;

const ResultsTitle = styled.h3`
  font-size: 2.25em;
  color: #fba100;
  border-bottom: 3px solid #fba100;
  padding: 0 0 7px;
  display: inline-table;
  margin-left: -5px;
  padding-left: 10px;
  width: 100%;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    border-bottom: none;
    margin-left: 0;
    padding-left: 0;
    text-align: center;
  }
  @media (max-width: 420px) {
    width: 75%;
    line-height: 1.2;
  }
`;

const CallToActionTitle = styled.h3`
  font-size: 2.25em;
  color: #fba100;
  margin-bottom: 1.5rem;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TestimonialCard = styled.div`
  padding: 3rem;
  background-color: #808f85;
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
  @media (max-width: 768px) {
    width: 100%;
    :nth-of-type(n + 2) {
      margin-left: 0;
      margin-top: 1rem;
    }
    &:not(:last-of-type) {
      margin-right: 0;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    min-width: auto;
  }
`;

const Spacer = styled.div`
  margin: 0 0.5rem;
  @media (max-width: 910px) {
    display: none;
  }
`;

const Break = styled.br`
  @media (min-width: 911px) {
    display: none;
  }
`;

const BackgroundWrapper = styled.section`
  position: relative;
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
  const subtitle = () => (
    <>
      {subheading.map(({ heading }, idx) => (
        <span
          key={idx}
          css={css`
            @media (min-width: 911px) {
              display: inline-flex;
            }
          `}
        >
          {`${heading} `}
          <Break />
          <Spacer> | </Spacer>
        </span>
      ))}
    </>
  );

  return (
    <Wrapper>
      <Hero
        image={image}
        title={title}
        subtitle={subtitle}
        alt='Resilient Leadership'
        homepage
      />
      <Section
        css={css`
          padding-bottom: 0;
        `}
      >
        <InnerWrapper
          css={css`
            display: flex;
            border-bottom: 1px solid #4c3b4d;
            padding-bottom: 4rem;
            @media (max-width: 768px) {
              border-bottom: none;
              flex-direction: column;
              padding: 0;
            }
          `}
        >
          <MainPitchColumn>
            <h3 css={mainPitchTitleStyle}>{mainpitch.title}</h3>
            <MainPitchBox>
              <Paragraph>{mainpitch.description}</Paragraph>
              <Paragraph>{description}</Paragraph>
            </MainPitchBox>
          </MainPitchColumn>
          <Img
            fluid={mainpitch.image.childImageSharp.fluid}
            css={mainImageStyle}
          />
        </InnerWrapper>
      </Section>
      <Section
        css={css`
          padding-bottom: 0;
        `}
      >
        <InnerWrapper>
          <PhiloTitle>{philosophy.title}</PhiloTitle>
          <Paragraph>{philosophy.paragraph1}</Paragraph>
          <Paragraph>{philosophy.paragraph2}</Paragraph>
          <PhiloImageBox
            css={css`
              height: 60vw;
              max-height: 664px;
              margin-top: 4rem;
              padding: 0;
              overflow: hidden;
              @media (max-width: 768px) {
                height: 90vw;
                max-height: initial;
              }
              @media (max-width: 540px) {
                height: 85vw;
              }
            `}
          >
            <div css={[philoImage, { position: 'absolute', zIndex: 3 }]}>
              <Fade delay={1000}>
                <Img fluid={philosophy.purpleFade.childImageSharp.fluid} />
              </Fade>
            </div>
            <div css={[philoImage, { position: 'absolute', zIndex: 3 }]}>
              <Fade delay={1000}>
                <Img fluid={philosophy.greenFade.childImageSharp.fluid} />
              </Fade>
            </div>
            <div css={[philoImage, { position: 'absolute', zIndex: 3 }]}>
              <Fade delay={1000}>
                <Img fluid={philosophy.yellowFade.childImageSharp.fluid} />
              </Fade>
            </div>
            <div css={[philoImage, { position: 'absolute' }]}>
              <Slide up>
                <Img
                  fluid={philosophy.purple.childImageSharp.fluid}
                  style={{
                    zIndex: 2,
                  }}
                />
              </Slide>
            </div>
            <Slide left>
              <Img
                fluid={philosophy.green.childImageSharp.fluid}
                style={{ position: 'absolute', zIndex: 1 }}
                css={philoImage}
              />
            </Slide>
            <Slide right>
              <Img
                fluid={philosophy.yellow.childImageSharp.fluid}
                style={{ position: 'absolute' }}
                css={philoImage}
              />
            </Slide>
          </PhiloImageBox>
        </InnerWrapper>
      </Section>
      <Section>
        <InnerWrapper>
          <ResultsColumn>
            <FlexWithDirection
              css={css`
                @media (max-width: 768px) {
                  flex-direction: row;
                }
                @media (max-width: 768px) {
                  flex-direction: column;
                  align-items: center;
                }
              `}
            >
              <img
                src={leadership}
                alt='you will be a more effective leader'
                style={{ width: 100 }}
              />
              <ResultsTitle>{results.title}:</ResultsTitle>
            </FlexWithDirection>
            <List>
              {results.listItems.map((item, idx) => (
                <Slide up cascade key={idx}>
                  <ListItem>{item.text}</ListItem>
                </Slide>
              ))}
            </List>
          </ResultsColumn>
        </InnerWrapper>
      </Section>
      <Services services={services.blurbs} />
      <Section
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <InnerWrapper>
          <CallToActionTitle>{callToAction.title}</CallToActionTitle>
          <Paragraph>
            We believe that we are all <b>RESILIENT</b> by design and through
            building our capacity, and learning to move effectively with change,
            we can overcome any obstacle.
          </Paragraph>
          <Paragraph>
            We believe that through awareness, there is an opportunity for more
            productive action. By building skills in effective communication,
            you and your team can face challenges with greater resiliency, and
            deliver more reliable results.
          </Paragraph>
          <Paragraph>
            In 45 minutes, we’ll uncover your current gaps in leadership,
            re-center on your top strengths, and guide you through your
            potential and how our coaching expertise can help create new
            possibilities.
          </Paragraph>
          <Paragraph>
            <b>Our request: </b>
            Come to us with your biggest concerns and a willingness to share
            openly– so our solutions will have the biggest impact in your
            organization and your life.
          </Paragraph>
          <Paragraph>
            <b>Our promise: </b>
            You’ll walk away able to see more possibilities for your team and
            your leadership.
          </Paragraph>
          <Link to='/contact' css={[linkStyle, { maxWidth: 250 }]}>
            Get in touch
          </Link>
        </InnerWrapper>
      </Section>
      <Section
        css={css`
          flex-direction: column;
          padding: 0;
          background-color: transparent;
        `}
      >
        <BackgroundWrapper>
          <Img
            fluid={testimonialSection.image.childImageSharp.fluid}
            style={{ position: 'absolute' }}
            alt='testimonials'
            css={css`
              width: 100%;
              height: 100%;
              z-index: -2;
            `}
          />
          <InnerWrapper
            css={css`
              padding: 4rem 1rem;
            `}
          >
            <CallToActionTitle>What our clients say about us</CallToActionTitle>
            <FlexWithDirection>
              {testimonialSection.testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx}>
                  <Paragraph>{testimonial.text1}</Paragraph>
                  <Paragraph>{testimonial.text2}</Paragraph>
                  <Paragraph
                    css={css`
                      font-weight: 700;
                    `}
                  >
                    {testimonial.author}
                  </Paragraph>
                  <Paragraph
                    css={css`
                      margin-bottom: 0;
                    `}
                  >
                    {testimonial.company}
                  </Paragraph>
                </TestimonialCard>
              ))}
            </FlexWithDirection>
          </InnerWrapper>
        </BackgroundWrapper>
      </Section>
      <Section
        css={css`
          background-color: #4c3b4d;
          padding: 4rem 0;
        `}
      >
        <InnerWrapper
          css={css`
            padding: 0 1rem;
          `}
        >
          <Paragraph
            css={css`
              color: #ffffff;
              font-size: 1.5em;
            `}
          >
            {philosophy.quote}
          </Paragraph>
          <Paragraph
            css={css`
              color: #ffffff;
              font-size: 1.5em;
              font-weight: 700;
            `}
          >
            {philosophy.quoteAuthor}
          </Paragraph>
        </InnerWrapper>
      </Section>
    </Wrapper>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.array,
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
    quoteAuthor: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    purple: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    green: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    yellow: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    purpleFade: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    greenFade: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    yellowFade: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        subheading {
          heading
        }
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
          quoteAuthor
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purple {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          green {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          yellow {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purpleFade {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          greenFade {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          yellowFade {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
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
            link
            linkText
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
            company
          }
        }
      }
    }
  }
`;
