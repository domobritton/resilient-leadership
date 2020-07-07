import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div
      css={css`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>
        <h1
          css={css`
            text-align: center;
          `}
        >
          NOT FOUND
        </h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
