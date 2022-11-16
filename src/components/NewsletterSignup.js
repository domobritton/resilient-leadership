import React from 'react';
import { animated, useTransition, config, set } from 'react-spring';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import NewsletterError from './NewsletterError';
import { useNewsLetterForm } from './useNewsletterForm';

const NewsletterContainer = styled.div`
  top: auto;
  right: auto;
  bottom: 20px;
  left: 20px;
  background-color: #14213d;
  box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.67);
  border: 1px solid #14213d;
  position: fixed;
  z-index: 10;
  border-radius: 3px;
  padding: 20px 12px 20px 20px;
  display: flex;
  align-items: center;
`;

const formContainer = css`
  position: fixed;
  transform: translate3d(-120%, 0, 0);
  bottom: 15px;
  left: 15px;
  background-color: #14213d;
  border-radius: 3px;
  z-index: 99;

  @media (max-width: 650px) {
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 60px 0 40px;
    border-radius: unset;
  }
`;

const SignUpButton = styled.button`
  cursor: pointer;
  white-space: nowrap;
  background-color: transparent;
  border: none;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  line-height: 1;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 12px;
  cursor: pointer;
`;

const ExpandButton = styled.button`
  border: 1px solid #ffffff;
  border-radius: 50%;
  background-color: #ffffff;
  padding: 4px 7px;
  cursor: pointer;
  white-space: nowrap;
  position: absolute;
  top: 20px;
  right: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 650px) {
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
  }
`;

const ExpandSpan = styled.span`
  line-height: 1;
  font-size: 16px;
  color: #14213d;
  font-weight: bold;

  @media (max-width: 650px) {
    color: #ffffff;
  }
`;

const SignUp = styled.span`
  color: #ffffff;
  margin-left: 12px;
`;

const SIBFormContainer = styled.div`
  padding: 32px 20px 32px;
  font-size: 1.8rem;
  font-family: Quattrocento, serif;
`;

const SIBBox = styled.div`
  background: #fff;
  margin: 0 auto;
  padding: 16px 32px;
  display: inline-block;
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  max-width: 540px;
  border: 1px solid #c0ccd9;
  border-radius: 3px;
  height: 650px;
  overflow: scroll;

  @media (max-width: 650px) {
    height: 550px;
  }
`;

const Box = styled.div`
  padding: 8px 0;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  text-align: center;

  > img {
    width: 100px;
    height: 100px;
  }
`;

const Label = styled.label`
  font-weight: 700;
  color: rgb(60, 72, 88);
  margin-bottom: 6px;
  text-align: left;

  &:after {
    content: attr(data-required);
    font-size: 1em;
    color: #ff4949;
    text-decoration: none;
    word-wrap: break-word;
    display: inline;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1.8rem;
  font-family: Quattrocento, serif;
`;

const HelperText = styled.div`
  font-size: 12px;
  text-align: left;
  color: rgb(131, 144, 164);
  margin: 6px 0;
`;

const UnsubscribeText = styled.div`
  font-size: 12px;
  text-align: left;
  color: rgb(131, 144, 164);
  margin: 10px 0;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

const TermsBox = styled.p`
  font-size: 1.75rem;
  color: #3c4858;
  line-height: 1.25;
  text-align: left;
`;

const PrivaceLink = styled.a`
  color: blue;
  font-size: 1.75rem;
  font-family: Quattrocento, serif;
`;

const Button = styled.button`
  padding: 0.85rem 1rem;
  background-color: #dfb860;
  color: #14213d;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border: 1px solid #dfb860;
  border-radius: 3px;
  align-items: center;
  cursor: pointer;
  max-width: 250px;
  font-family: Oswald, sans-serif;
  letter-spacing: 0.15em;
  &:hover {
    opacity: 0.95;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    max-width: unset;
  }
`;

const Loader = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px;
`;

export const NewsletterSignup = () => {
  const {
    onChange,
    onClose,
    onExpand,
    onSubmit,
    expanded,
    open,
    status,
    values,
  } = useNewsLetterForm();

  const translateForm = useTransition(expanded, {
    from: { transform: `translate3d(-120%, 0, 0)` },
    enter: { transform: `translate3d(0%, 0, 0)` },
    leave: { transform: `translate3d(-120%, 0, 0)` },
    reverse: expanded,
    delay: 150,
    config: config.stiff,
    onRest: () => set(!expanded),
  });

  return (
    <>
      {open && (
        <NewsletterContainer>
          <SignUpButton onClick={onExpand}>
            <FontAwesomeIcon icon={faEnvelope} size='1x' color='white' />
            <SignUp>Newsletter Sign up</SignUp>
          </SignUpButton>
          <CloseButton onClick={onClose}>X</CloseButton>
        </NewsletterContainer>
      )}
      {translateForm(
        (styles, item) =>
          item && (
            <animated.div css={formContainer} style={styles}>
              <ExpandButton onClick={onExpand}>
                <ExpandSpan>X</ExpandSpan>
              </ExpandButton>
              <SIBFormContainer>
                <NewsletterError
                  error={status.error}
                  message={status.message}
                />
                <SIBBox>
                  <form
                    id='sib-form'
                    onSubmit={onSubmit}
                    data-type='subscription'
                  >
                    <Box>
                      <ImageBox>
                        <img
                          src='https://img.mailinblue.com/5089825/images/rnb/original/6364b3cb15ee6d3e6840e7ac.png'
                          alt='paper airplane'
                          title='paper airplane'
                        />
                      </ImageBox>
                    </Box>
                    <Box>
                      <p>
                        Subscribe to Resilient Leadership's monthly newsletter,
                        where we touch on new insights, techniques that empower
                        individuals and teams, and the individual process of
                        becoming a high-performance leader.
                      </p>
                    </Box>
                    <Box>
                      <InputRow>
                        <Label htmlFor='firstName' data-required='*'>
                          Enter your first name
                        </Label>
                        <Input
                          maxLength='200'
                          type='text'
                          id='firstName'
                          name='firstName'
                          value={values.firstName}
                          onChange={onChange}
                          autoComplete='off'
                          placeholder='First Name'
                          data-required='true'
                          required
                        />
                      </InputRow>
                    </Box>
                    <Box>
                      <InputRow>
                        <Label htmlFor='email' data-required='*'>
                          Enter your email address to subscribe
                        </Label>
                        <Input
                          type='email'
                          id='email'
                          name='email'
                          value={values.email}
                          onChange={onChange}
                          autoComplete='off'
                          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                          placeholder='Email'
                          data-required='true'
                          required
                        />
                        <HelperText>For example: abc@xyz.com</HelperText>
                      </InputRow>
                    </Box>
                    <Box>
                      <label
                        htmlFor='optIn'
                        aria-label='I agree to receive your monthly newsletter and
                              accept the data privacy statement.'
                      ></label>
                      <CheckboxWrapper>
                        <Checkbox
                          id='optIn'
                          name='optIn'
                          type='checkbox'
                          value={values.optIn}
                          onChange={onChange}
                        />
                        <TermsBox>
                          I agree to receive your monthly newsletter and accept
                          the{' '}
                          <PrivaceLink
                            href='https://www.iubenda.com/privacy-policy/83253436'
                            target='_blank'
                            rel='noreferrer'
                          >
                            data privacy
                          </PrivaceLink>{' '}
                          statement.
                        </TermsBox>
                      </CheckboxWrapper>
                      <UnsubscribeText>
                        You may unsubscribe at any time using the link provided
                        in our newsletter.
                      </UnsubscribeText>
                    </Box>
                    <Box>
                      <Button
                        form='sib-form'
                        type='submit'
                        disabled={status.loading}
                      >
                        {status.loading && (
                          <Loader>
                            <svg
                              version='1.1'
                              id='L9'
                              xmlns='http://www.w3.org/2000/svg'
                              x='0px'
                              y='0px'
                              viewBox='25 30 50 50'
                              enableBackground='new 0 0 0 0'
                            >
                              <path
                                fill='#fff'
                                d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
                              >
                                <animateTransform
                                  attributeName='transform'
                                  attributeType='XML'
                                  type='rotate'
                                  dur='1s'
                                  from='0 50 50'
                                  to='360 50 50'
                                  repeatCount='indefinite'
                                />
                              </path>
                            </svg>
                          </Loader>
                        )}
                        SUBSCRIBE
                      </Button>
                    </Box>
                  </form>
                </SIBBox>
              </SIBFormContainer>
            </animated.div>
          )
      )}
    </>
  );
};

export default NewsletterSignup;
