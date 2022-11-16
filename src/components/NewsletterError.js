import React from 'react';
import styled from '@emotion/styled';

const Message = styled.div`
  margin: 0 0 1.25rem 0;
  width: 100%;
  padding: 0.4375rem;
  color: #661d1d;
  background-color: #ffeded;
  border: 1px solid #ff4949;
  border-radius: 3px;
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
    fill: #661d1d;
  }
`;

const Span = styled.span`
  font-size: 1.8rem;
  font-family: Quattrocento, serif;
`;

export const NewsletterError = ({ error, message }) => {
  return (
    <>
      {error && (
        <Message>
          <Panel>
            <IconBox>
              <svg viewBox='0 0 512 512' height='1.5em' width='1.5em'>
                <path d='M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z' />
              </svg>
            </IconBox>
            <Span>{message}</Span>
          </Panel>
        </Message>
      )}
    </>
  );
};

export default NewsletterError;
