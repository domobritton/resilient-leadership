import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        background-color: white;
        font-size: 10px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
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
        font-size: 62.5%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Oswald,
          Quattrocento, domlovesmary-pro, Helvetica, Arial, sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        text-rendering: optimizeLegibility;
        color: #262626;
      }
      p {
        font-family: Quattrocento, serif;
        font-size: 1.8rem;
        font-weight: normal;
        line-height: 1.65;
        letter-spacing: 0rem;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      a {
        font-family: Oswald, sans-serif;
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
        color: #e7e7e7;
        transition: color 200ms ease-in-out;
        font-size: 1.4rem;

        :hover {
          color: #6087df;
        }
      }
      #sib-container input:-ms-input-placeholder {
        text-align: left;
        color: #c0ccda;
      }

      #sib-container input::placeholder {
        text-align: left;
        color: #c0ccda;
      }

      #sib-container textarea::placeholder {
        text-align: left;
        color: #c0ccda;
      }
    `}
  />
);

export default GlobalStyles;
