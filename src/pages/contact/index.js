import React from 'react';
import { navigate } from 'gatsby-link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import {
  linkStyle,
  Column,
  Paragraph,
  Section,
  InnerWrapper,
} from '../../components/styles';

const Title = styled.h1`
  font-size: 2.5em !important;
  color: #fba100 !important;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.75em;
  margin-bottom: 0.6rem;
`;

const Field = styled.div`
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  > div {
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: inherit;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  box-shadow: inset 0 0.0625em 0.125em rgba(43, 37, 35, 0.05);
  max-width: 100%;
  width: 100%;
  &:hover {
    border-color: #b5b5b5;
  }
`;

const TextArea = styled.textarea`
  position: relative;
  vertical-align: top;
  line-height: 1.5;
  font-size: 1rem;
  -webkit-appearance: none;
  border: 1px solid transparent;
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  width: 100%;
  box-shadow: inset 0 0.0625em 0.125em rgba(43, 37, 35, 0.05);
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
  max-height: 40em;
  min-height: 8em;
  margin: 0;
  height: 133px;
  &:hover {
    border-color: #b5b5b5;
  }
`;

const Button = styled.button`
  width: 192px;
  @media (min-width: 769px) {
    margin-left: auto;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

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
            <form
              name='contact'
              method='post'
              action='/contact/thanks/'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type='hidden' name='form-name' value='contact' />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name='bot-field' onChange={this.handleChange} />
                </label>
              </div>
              <Field>
                <Label htmlFor='name'>Your name</Label>
                <Input
                  type='text'
                  name='name'
                  onChange={this.handleChange}
                  id='name'
                  required
                />
              </Field>
              <Field>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  onChange={this.handleChange}
                  id='email'
                  required
                />
              </Field>
              <Field>
                <Label htmlFor='message'>Message</Label>
                <TextArea
                  name='message'
                  onChange={this.handleChange}
                  id='message'
                  required
                />
              </Field>
              <Column>
                <Button type='submit' css={linkStyle}>
                  Send
                </Button>
              </Column>
            </form>
          </InnerWrapper>
        </Section>
      </Layout>
    );
  }
}
