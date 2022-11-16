import React from 'react';
import styled from '@emotion/styled';
import { useNewsletterSignupContext } from './NewsletterSignupProvider';

const Message = styled.div`
  margin: 0 0 1.25rem 0;
  width: 100%;
  padding: 0.4375rem;
  color: #ffffff;
  background-color: #4bb543;
  position: absolute;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0.5rem;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: calc(1rem - 1px);
  font-size: 1.8rem;

  > svg > path {
    fill: #ffffff;
  }
`;

const Span = styled.span`
  font-size: 1.8rem;
  font-family: Quattrocento, serif;
`;

export const NewsletterSuccess = () => {
  const { messageSuccess } = useNewsletterSignupContext();
  return (
    <>
      {messageSuccess && (
        <Message>
          <Panel>
            <IconBox>
              <svg viewBox='0 0 512 512' height='1.5em' width='1.5em'>
                <path d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z' />
              </svg>
            </IconBox>
            <Span>Thank you for signing up to our monthly newsletter!</Span>
          </Panel>
        </Message>
      )}
    </>
  );
};

export default NewsletterSuccess;
