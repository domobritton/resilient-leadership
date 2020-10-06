import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        background-color: white;
        font-size: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: scroll;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
        box-sizing: border-box;
      }
      html,
      body,
      p,
      ul,
      li,
      textarea,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
      }
      *,
      *::after,
      *::before {
        box-sizing: inherit;
      }
      body {
        color: #3c3d41;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Junge, Heebo,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        text-rendering: optimizeLegibility;
      }
      h1,
      h4,
      p,
      a {
        font-family: Heebo, sans-serif;
      }
      h3 {
        font-family: Junge, serif;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: normal;
      }
      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
