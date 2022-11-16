import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import Layout from '../components/Layout';
import Services from '../components/Services';
import {
  Wrapper,
  FlexWithDirection,
  linkStyle,
  Paragraph,
  Flex,
} from '../components/styles';
import Hero from '../components/Hero';

const slide = keyframes`
  0% {
    top: 0;
  }
  20% {
    top: -1.7em;
  }
  40% {
    top: -3.4em;
  }
  60% {
    top: -5.1em;
  }
  80% {
    top: -6.8em;
  }
  100% {
    top: -8.5em;
  }
`;

const Scroller = styled.div`
  height: 1.7em;
  line-height: 1.7em;
  position: relative;
  overflow: hidden;
  width: 10em;
  font-family: Oswald;
  font-size: 4.25rem;
  max-width: calc(100vw - 50px);

  & > span {
    position: absolute;
    top: 0;
    z-index: 0;
    animation: ${slide} 12s ease normal forwards;
    animation-delay: 500ms;
  }
`;

const TopGradient = styled.div`
  height: 0.25em;
  position: absolute;
  top: 0;
  width: 100%;
  background: rgb(223, 184, 96);
  background: linear-gradient(
    180deg,
    rgba(223, 184, 96, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
`;

const BottomGradient = styled.div`
  height: 0.25em;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgb(223, 184, 96);
  background: linear-gradient(
    0deg,
    rgba(223, 184, 96, 1) 0%,
    rgba(0, 0, 0, 0) 60%
  );
  z-index: 2;
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  position: relative;
  margin: 0 auto;
  padding: 0 25px;
`;

const Section = styled.section`
  display: flex;
  padding: 20rem 0 10rem;
  background-color: #ffffff;

  @media (max-width: 650px) {
    padding: 10rem 0;
  }
`;

const MissionColumn = styled.div`
  width: 50%;
  min-width: 300px;
  position: relative;
  padding: 0 25px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const missionTitleStyle = css`
  font-family: domlovesmary-pro, serif;
  font-size: 14rem;
  line-height: 1;
  color: #14213d;

  @media (max-width: 950px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 2.25rem;
    font-size: 8rem;
  }
`;

// const PhiloImageBox = styled.div`
//   padding: 3rem 0 0;
//   position: relative;
// `;

// const philoImage = css`
//   width: 65%;
//   margin: 0 auto;
//   left: 0;
//   right: 0;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

const PhiloTitle = styled.h3`
  font-size: 4.25rem;
  color: #14213d;
  margin-bottom: 1.75rem;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr;
  column-gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2px;
  }
`;

const FlexCenter = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 100%;
  width: 2px;
  background-color: #14213d;

  @media (max-width: 768px) {
    height: 2px;
    width: 100%;
  }
`;

const centerText = css`
  text-align: center;

  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const WeBelieveYouCan = styled.div`
  position: absolute;
  font-size: 20rem;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0.4;
  transform: translate(0, -50%);
  color: #dfb860;
  font-family: domlovesmary-pro, serif;

  @media (max-width: 1024px) {
    position: static;
    font-size: 10rem;
    opacity: 1;
    transform: unset;
    text-align: left;
  }

  @media (max-width: 650px) {
    font-size: 6.25rem;
  }
`;

const CallToActionTitle = styled.h3`
  font-size: 3.25rem;
  color: #dfb860;
  margin-bottom: 1.75rem;
  line-height: 1;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const TestimonialBox = styled(InnerWrapper)`
  padding: 20rem 25px;

  @media (max-width: 650px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

const TestimonialCard = styled.div`
  padding: 3rem;
  background-color: #70877f;
  border-radius: 3px;
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
    padding: 2rem;
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

const BackgroundWrapper = styled.div`
  position: relative;
`;

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  philosophy,
  approach,
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
          padding-top: 10rem;
          background-color: #dfb860;
        `}
      >
        <InnerWrapper
          css={css`
            display: flex;
            padding: 0;
            @media (max-width: 768px) {
              flex-direction: column;
            }
          `}
        >
          <MissionColumn>
            <h3 css={missionTitleStyle}>
              Resilience is
              <Scroller>
                <TopGradient />
                <span>
                  Adaptability
                  <br />
                  Confidence
                  <br />
                  Life & Career Skills
                  <br />
                  Communication
                  <br />
                  Time Management
                  <br />
                  Relationship Building
                  <br />
                </span>
                <BottomGradient />
              </Scroller>
            </h3>
          </MissionColumn>
          <MissionColumn>
            <Paragraph
              css={css`
                color: #14213d;
              `}
            >
              <b
                css={css`
                  font-size: 2.5rem;
                `}
              >
                Our Mission
              </b>{' '}
              is to support leaders, teams, and organizations to embody the
              skills necessary to consistently <b> reach higher goals</b>,
              quickly recover from setbacks, and face new challenges with wisdom
              and perseverance.
            </Paragraph>
            <Paragraph>
              It is our aim to support you in gaining deeper insights and
              knowledge —for you to <b>thrive</b>, <b>inspire</b> and live out
              the contribution that is excited to <b>emerge</b>.
            </Paragraph>
          </MissionColumn>
          {/* <Img
            fluid={mainpitch.image.childImageSharp.fluid}
            css={mainImageStyle}
          /> */}
        </InnerWrapper>
      </Section>
      <Section
        css={css`
          background-color: #f9f6ef;
          padding-bottom: 15rem;
        `}
      >
        <InnerWrapper
          css={css`
            display: flex;
            padding: 0;
            @media (max-width: 768px) {
              flex-direction: column;
            }
          `}
        >
          <MissionColumn
            css={css`
              @media (max-width: 650px) {
                margin-bottom: 48px;
              }
            `}
          >
            <PhiloTitle>{philosophy.title}</PhiloTitle>
            <Paragraph>
              At Resilient Leadership, we <b>believe</b> that you are here to do
              more than survive. <b>You are a leader</b>, and as such, you will
              be challenged, you will be put in uncomfortable circumstances and
              you will upset the status quo. But the question is,{' '}
              <b>who are you being while you are leading</b>?
            </Paragraph>
            <Paragraph>
              Your <b>success as a leader</b> will not be measured by how well
              you maintained the status quo. It will be measured by the
              contributions you made. In order to be the biggest contribution
              available within you, you need to be <b>courageous</b>,{' '}
              <b>wise</b> and <b>resilient</b>.
            </Paragraph>
          </MissionColumn>
          <MissionColumn>
            <PhiloTitle>{approach.title}</PhiloTitle>
            <Paragraph>
              We have an opportunity to use the <b>philosophies</b> and{' '}
              <b>insights</b> of the past, in combination with the leading edge
              discoveries of neuroscience and social sciences to{' '}
              <b>lead happier</b> and <b>healthier lives</b>.
            </Paragraph>
            <Paragraph>
              Using age-old wisdom and new innovations it is possible to
              cultivate <b>empowered teams</b> and <b>agile organizations</b>{' '}
              that move quickly to solve the world's toughest problems. At
              Resilient Leadership, we support our clients to reveal their
              brilliance and create team environments that allows talent to
              shine.
            </Paragraph>
          </MissionColumn>
        </InnerWrapper>
      </Section>
      {/* <Section
        css={css`
          padding-bottom: 0;
          position: relative;
        `}
      >
      <InnerWrapper
          css={css`
            position: absolute;
            top: -120px;
            width: 500px;
            left: 0;
            right: 0;

            @media (max-width: 440px) {
              max-width: calc(100vw - 50px);
            }

            @media (min-width: 440px) and (max-width: 767px) {
              display: none;
            }
          `}
        >
          <PhiloImageBox
            css={css`
              height: 500px;
              padding: 0;
              overflow: hidden;
              @media (max-width: 768px) {
                height: 90vw;
                max-height: initial;
              }
              @media (max-width: 540px) {
                height: 90vw;
              }
            `}
          >
            <div css={[philoImage, { position: 'absolute', zIndex: 3 }]}>
              <Fade delay={1000}>
                <Img fluid={approach.purpleFade.childImageSharp.fluid} />
              </Fade>
            </div>
            <div css={[philoImage, { position: 'absolute', zIndex: 3 }]}>
              <Fade delay={1000}>
                <Img fluid={approach.greenFade.childImageSharp.fluid} />
              </Fade>
            </div>
            <div css={[philoImage, { position: 'absolute', zIndex: 3 }]}>
              <Fade delay={1000}>
                <Img fluid={approach.yellowFade.childImageSharp.fluid} />
              </Fade>
            </div>
            <div css={[philoImage, { position: 'absolute' }]}>
              <Slide up>
                <Img
                  fluid={approach.purple.childImageSharp.fluid}
                  style={{
                    zIndex: 2,
                  }}
                />
              </Slide>
            </div>
            <Slide left>
              <Img
                fluid={approach.green.childImageSharp.fluid}
                style={{ position: 'absolute', zIndex: 1 }}
                css={philoImage}
              />
            </Slide>
            <Slide right>
              <Img
                fluid={approach.yellow.childImageSharp.fluid}
                style={{ position: 'absolute' }}
                css={philoImage}
              />
            </Slide>
          </PhiloImageBox>
        </InnerWrapper>
      </Section> */}
      <Section
        css={css`
          position: relative;
          padding-bottom: 20rem;

          @media (max-width: 650px) {
            padding-bottom: 8rem;
          }
        `}
      >
        <div
          style={{
            height: 150,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        >
          <svg
            viewBox='0 0 500 150'
            preserveAspectRatio='none'
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d='M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z'
              style={{ stroke: 'none', fill: '#f9f6ef' }}
            ></path>
          </svg>
        </div>
        <InnerWrapper>
          <WeBelieveYouCan>We believe you can...</WeBelieveYouCan>
          <Grid>
            <Slide up cascade>
              <FlexCenter>
                <Paragraph css={centerText}>
                  Live your contribution to your organization out so fully that
                  others are inspired and empowered by your presence.
                </Paragraph>
              </FlexCenter>
            </Slide>
            <Line />
            <Slide up cascade>
              <FlexCenter>
                <Paragraph css={centerText}>
                  Lead in such a way that your teams want to follow you on their
                  own volition.
                </Paragraph>
              </FlexCenter>
            </Slide>
            <Line />
            <Slide up cascade>
              <FlexCenter>
                <Paragraph css={centerText}>
                  Lead from a place of courage, wisdom and embodied strength.
                </Paragraph>
              </FlexCenter>
            </Slide>
            <Line />
            <Slide up cascade>
              <FlexCenter>
                <Paragraph css={centerText}>
                  Lead a life that is personally fulfilling, professionally
                  rewarding and positively contributes to the world at large.
                </Paragraph>
              </FlexCenter>
            </Slide>
          </Grid>
        </InnerWrapper>
      </Section>
      <Services services={services.blurbs} />
      <Section
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 10rem;
          padding-bottom: 20rem;
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
            productive action. By building skills in{' '}
            <b>effective communication</b>, you and your team can face
            challenges with greater resiliency, and{' '}
            <b>deliver more reliable results</b>.
          </Paragraph>
          <Paragraph>
            <b>In 45 minutes</b>, we'll uncover your current gaps in leadership,{' '}
            <b>re-center on your top strengths</b>, and guide you through your
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
            You'll walk away able to see more possibilities for your team and
            your leadership.
          </Paragraph>
          <Link to='/contact' css={[linkStyle, { maxWidth: 250 }]}>
            Get in touch
          </Link>
        </InnerWrapper>
      </Section>
      <TestimonialSection>
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
          <TestimonialBox>
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
          </TestimonialBox>
        </BackgroundWrapper>
      </TestimonialSection>
      <Section
        css={css`
          background-color: #dfb860;
          padding: 4rem 25px;
        `}
      >
        <InnerWrapper>
          <Paragraph
            css={css`
              color: #ffffff;
              font-size: 2.5rem;
            `}
          >
            {philosophy.quote}
          </Paragraph>
          <Paragraph
            css={css`
              color: #ffffff;
              font-size: 1.5rem;
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
  }),
  approach: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
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
    <Layout homepage>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        philosophy={frontmatter.philosophy}
        approach={frontmatter.approach}
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
        }
        approach {
          title
          paragraph
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purple {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          green {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          yellow {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purpleFade {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          greenFade {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          yellowFade {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        results {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 100) {
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
                fluid(maxWidth: 240, quality: 100) {
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
