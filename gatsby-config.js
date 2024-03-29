const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.resilientleadership.us/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

require('dotenv').config({
  path: `.env.${NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Resilient Leadership',
    siteUrl,
    description:
      'RESILIENT LEADERSHIP - Leadership Development - Executive Coaching, Team Coaching, Organization Dev - Our Mission is to support leaders, teams, and organizations to embody the skills necessary to consistently reach higher goals, quickly recover from setbacks, and face new challenges with wisdom and perseverance.',
  },
  // flags: {
  //   DEV_SSR: true, // use for debugging
  // },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/tags/`, `/blog/`],
      },
    },
    {
      resolve: `gatsby-plugin-fresnel`,
      options: {
        breakpoints: {
          sm: 0,
          md: 769,
          lg: 1025,
          xl: 1281,
        },
        interactions: {
          hover: '(hover: hover)',
          notHover: '(hover: none)',
          landscape: 'not all and (orientation: landscape)',
          portrait: 'not all and (orientation: portrait)',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['UA-114974500-1', '4279570470', 'G-1Q1CREHB00'],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'GTM-MF6B3M6',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Avoids sending pageview hits from custom paths
          exclude: [`/tags/`, `/blog/`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald`, `Quattrocento`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
    //   },
    // }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
