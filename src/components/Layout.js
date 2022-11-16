import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import { GlobalStyles } from './styles';
import { MediaContextProvider, mediaStyles } from './Media';
import NewsletterSignup from './NewsletterSignup';
import NewsletterSignupProvider from './NewsletterSignupProvider';

const TemplateWrapper = ({
  children,
  homepage = false,
  aboutpage = false,
  contactpage = false,
}) => {
  const { title, description } = useSiteMetadata();

  // useEffect(() => {
  //   if (process.env.DEVELOP) {
  //     setTimeout(() => {
  //       var axe = require('react-axe');
  //       axe(React, ReactDOM, 1000);
  //     }, 2000);
  //   }
  // }, []);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GATSBY_RECAPTCHA_KEY}
      container={{
        element: 'footer-recaptcha',
        parameters: {
          badge: 'inline',
          theme: 'dark',
        },
      }}
    >
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-114974500-1'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-114974500-1');`,
          }}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='https://use.typekit.net/xgw3alr.css' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link rel='mask-icon' href={``} color='#DFB860' />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <style>{mediaStyles}</style>
      </Helmet>
      <MediaContextProvider>
        <NewsletterSignupProvider>
          <GlobalStyles />
          <main>
            {(homepage || aboutpage || contactpage) && <NewsletterSignup />}
            <Navbar homepage={homepage} />
            {children}
            <Footer />
          </main>
        </NewsletterSignupProvider>
      </MediaContextProvider>
    </GoogleReCaptchaProvider>
  );
};

export default TemplateWrapper;
